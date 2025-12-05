import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectionDB } from "@/lib/connectDB";
import User from "@/schemas/User";

export async function POST(req) {
  try {
    await connectionDB();

    const body = await req.json();
    const { name, email, password } = body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword
    });

    return NextResponse.json({ message: "Signup successful!" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
