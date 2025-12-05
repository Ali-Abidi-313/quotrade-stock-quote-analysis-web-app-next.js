import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectionDB } from "@/lib/connectDB";
import User from "@/models/User";
import { generateToken } from "@/lib/jwt";

export async function POST(req) {
  try {
    await connectionDB();

    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });
    }

    const token = generateToken(user);

    const response = NextResponse.json({ message: "Login successful" });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    });

    return response;

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
