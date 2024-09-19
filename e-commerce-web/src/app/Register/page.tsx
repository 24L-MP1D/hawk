"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");

  //regex usage
  const hasUppercase = /[A-Z]/.test(password);
  const lengGreater = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSepcialChar = /[$&+,:;=?@#|'<>_.^*()%!-]/.test(password);
  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordsAreSame = password === passwordConfirm && password !== "";

  //make valid
  const isValid =
    lengGreater &&
    hasLowercase &&
    hasUppercase &&
    hasNumber &&
    hasSepcialChar &&
    passwordsAreSame &&
    emailValidation &&
    name.length >= 4;

  function submit() {}
  console.log({ name, email, password, passwordConfirm });

  return (
    <div className="pt-[96px] pb-[374px]">
      <div className="mx-auto flex gap-[16px] flex-col w-[334px] text-center">
        <div className="font-semibold">Бүртгүүлэх</div>
        <Input
          className="h-[36] rounded-[18px]"
          type="email"
          placeholder="Имэйл Хаяг"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          className="h-[36] rounded-[18px]"
          type="name"
          placeholder="Нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          className="h-[36] rounded-[18px]"
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          className="h-[36] rounded-[18px]"
          type="password"
          placeholder="Нууц үг давтах"
          value={passwordConfirm}
          onChange={(e) => setpasswordConfirm(e.target.value)}
        />

        <ul className="list-disc text-start flex flex-col gap-2 text-xs pl-5">
          <li className={hasUppercase ? "text-green-500" : "text-[#E11D48]"}>
            Том үсэг орсон байх
          </li>
          <li className={hasLowercase ? "text-green-500" : "text-[#E11D48]"}>
            Жижиг үсэг орсон байх
          </li>
          <li className={hasNumber ? "text-green-500" : "text-[#E11D48]"}>
            Тоо орсон байх
          </li>
          <li className={hasSepcialChar ? "text-green-500" : "text-[#E11D48]"}>
            Тэмдэг орсон байх
          </li>
          <li
            className={passwordsAreSame ? "text-green-500" : "text-[#E11D48]"}
          >
            Нууц үг баталгаажлаа
          </li>
          <li className={lengGreater ? "text-green-500" : "text-[#E11D48]"}>
            Нууц үгийн урт 8с багагүй
          </li>
        </ul>

        <Button
          className="h-[36] rounded-[18px] bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isValid}
        >
          Үүсгэх
        </Button>
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
