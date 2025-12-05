"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const submitHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-40">
      <div className="w-120 rounded-2xl p-10 h-80 bg-[#5cdb95] my-20">
      <h1 className="text-2xl font-bold">Signup</h1>

      <input type="text" placeholder="Name"
        className="border p-2 w-full mt-3 rounded-2xl"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input type="email" placeholder="Email"
        className="border p-2 w-full mt-3 rounded-2xl"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input type="password" placeholder="Password"
        className="border p-2 w-full mt-3 rounded-2xl"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="rounded-3xl bg-[#1b2e4b] text-white px-4 py-2 mt-4 hover:scale-105 hover:bg-[#4da8da] transition duration-300 ease-in-out shadow-md"
        onClick={submitHandler}>
        Signup
      </button>
      
      <button className="rounded-3xl bg-[#1b2e4b] ml-4 text-white px-4 py-2 mt-4 hover:scale-105 hover:bg-[#4da8da] transition duration-300 ease-in-out shadow-md" onClick={() => router.push("/login")}>
        Login </button>
      </div>
     
    </div>
  );
}
