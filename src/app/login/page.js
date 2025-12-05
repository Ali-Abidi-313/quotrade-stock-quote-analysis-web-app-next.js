"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const loginHandler = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (res.status === 200) {
      alert("Login successful");
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="w-full max-w-md mx-auto mt-20">
      <div className="w-120 rounded-2xl p-10 h-80 bg-[#5cdb95] my-20">
      <h1 className="text-2xl font-bold">Login</h1>

      <input type="email" placeholder="Email"
        className="border p-2 w-full mt-3"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input type="password" placeholder="Password"
        className="border p-2 w-full mt-3"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="rounded-3xl bg-[#1b2e4b] ml-4 text-white px-4 py-2 mt-4 hover:scale-105 hover:bg-[#4da8da] transition duration-300 ease-in-out shadow-md"
        onClick={loginHandler}>
        Login
      </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
