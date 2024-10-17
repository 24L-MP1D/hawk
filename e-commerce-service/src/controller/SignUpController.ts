import { Request, Response } from "express";
import { UserSignUpModel } from "../model/SignUpModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUserSignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // const isAuthenticated = true; // DB user fetch compare
  // if(password.length >=8) {
  // return res.sendStatus(401).json({message:"password 7oos urt baih yoestoi"})
  // if(tom useg orson bn uu) {
  // return res.sendStatus(401).json({message:"password 1 tom useg orson baih yoestoi"})

  console.log(req.body);

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPass = bcrypt.hashSync(password, salt);

  console.log({ hashedPass });

  const form = {
    email: email,
    password: hashedPass,
  };

  console.log({ form });

  try {
    const user = await UserSignUpModel.create(form);

    return res.status(200).json({ message: "Signed Up! Successfully" });
  } catch (error) {
    return res.status(401).json({ message: "Error, to SignUp!" });
  }
};
