"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit() {
    const data = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
  return (
    <div className="pt-[96px] pb-[374px]">
      <div className="mx-auto flex gap-[16px] flex-col w-[334px] text-center">
        <div className="font-semibold">Нэвтрэх</div>
        <Input
          className="h-[36] rounded-[18px]"
          type="email"
          placeholder="Имэйл Хаяг"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          className="h-[36] rounded-[18px]"
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={submit} className="h-[36] rounded-[18px] bg-blue-700">
          Нэвтрэх
        </Button>
        <Button variant="link" className="text-xs underline text-gray-600">
          Нууц үгээ мартсан
        </Button>
        <Button
          variant="outline"
          className="h-[36] rounded-[18px] border-blue-700 text-blue-700 hover:text-blue-700 hover:bg-black mt-8"
        >
          Бүртгүүлэх
        </Button>
      </div>
    </div>
  );
}
