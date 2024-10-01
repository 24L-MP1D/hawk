"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormikErrors, useFormik } from "formik";
import * as yup from "yup";
import { Regex } from "lucide-react";

export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  interface FormValues {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }

  const validationSchema = yup.object({
    name: yup.string().min(1).required("Нэр оруулна уу "),
    email: yup.string().email("wrong Email").required("email is required"),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(RegExp("(.*[a-z].*)"), "Жижиг үсэг орсон байх")
      .matches(RegExp("(.*[A-Z].*)"), "Том үсэг орсон")
      .matches(RegExp("(.*\\d.*)"), "Тоо орсон байх")
      .matches(RegExp('[_!@#$%^&*(),.?":{}|<>]'), "Тэмдэгт орсон байх"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match")
      .required("Password agian"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({
          userName: values.name,
          password: values.password,
          email: values.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(data);
    },
    validationSchema,
  });

  // const submit = async () => {
  //   const data = await fetch("http://localhost:4000/register", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userName: name,
  //       password: password,
  //       email: email,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   console.log(data);
  // };

  return (
    <div className="pt-[96px] pb-[374px]">
      <form
        className="mx-auto flex flex-col gap-4 w-[334px] text-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="font-semibold">Бүртгүүлэх</div>
        <div className="text-start">
          <Input
            className="h-[36] rounded-[18px]"
            type="email"
            placeholder="Имэйл Хаяг"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="text-red-500 text-sm pl-2">{formik.errors.email}</div>
        </div>
        <Input
          className="h-[36] rounded-[18px]"
          type="name"
          placeholder="Нэр"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Input
          className="h-[36] rounded-[18px]"
          type="password"
          placeholder="Нууц үг"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <div className="text-start">
          <Input
            className="h-[36] rounded-[18px]"
            type="password"
            placeholder="Нууц үг давтах"
            id="passwordConfirm"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
          />
          <div className="text-red-500 text-sm pl-2">
            {formik.errors.passwordConfirm}
          </div>
        </div>
        <Button
          type="submit"
          className="h-[36] rounded-[18px] bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Үүсгэх
        </Button>
        <div className="text-red-500 text-sm pl-2 text-start">
          {formik.errors.password}
        </div>
        <Button
          variant="outline"
          className="h-[36] rounded-[18px] border-blue-700 text-blue-700 hover:text-blue-700 hover:bg-black mt-8"
        >
          Нэвтрэх
        </Button>
      </form>
    </div>
  );
}
