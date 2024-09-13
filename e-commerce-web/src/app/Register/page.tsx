"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { isValidElement, useState } from "react";
import ReactPasswordChecklist from "react-password-checklist";

export default function Register() {
  const [password, setPassword] = useState("");
  const [passwordAgian, setPasswordAgian] = useState("");
  return (
    <div className="pt-[96px] pb-[374px]">
      <div className="mx-auto flex gap-[16px] flex-col w-[334px] text-center">
        <div className="font-semibold">Бүртгүүлэх</div>
        <Input
          className="h-[36] rounded-[18px]"
          type="email"
          placeholder="Имэйл Хаяг"
        />

        <Input
          className="h-[36] rounded-[18px]"
          type="name"
          placeholder="Нэр"
        />
        <Input
          className="h-[36] rounded-[18px]"
          type="name"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Нууц үг"
        />
        <Input
          className="h-[36] rounded-[18px]"
          type="name"
          onChange={(e) => setPasswordAgian(e.target.value)}
          placeholder="Нууц үг давтах"
        />

        <ReactPasswordChecklist
          rules={["capital", "lowercase", "number", "specialChar", "match"]}
          minLength={5}
          value={password}
          valueAgain={passwordAgian}
        />

        <ul className="list-disc text-start flex flex-col gap-2 text-xs pl-5">
          <li className="text-[#E11D48]">Том үсэг орсон байх</li>
          <li className="text-[#E11D48]">Жижиг үсэг орсон байх</li>
          <li className="text-[#E11D48]">Тоо орсон байх</li>
          <li className="text-[#E11D48]">Тэмдэг орсон байх</li>
        </ul>

        <Button className="h-[36] rounded-[18px] bg-blue-700">Үүсгэх</Button>
        <Button
          variant="outline"
          className="h-[36] rounded-[18px] border-blue-700 text-blue-700 hover:text-blue-700 hover:bg-black mt-8"
        >
          Нэвтрэх
        </Button>
      </div>
    </div>
  );
}
