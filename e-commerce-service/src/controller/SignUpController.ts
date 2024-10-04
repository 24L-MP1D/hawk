import { Request, Response } from "express";
import { UserSignUpModel } from "../model/SignUpModel";
import bcrypt from "bcrypt";

export const createUserSignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body);

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPass = bcrypt.hashSync(password, salt);

  console.log({ hashedPass });

  const form = {
    email,
    password: hashedPass,
  };

  console.log({ form });

  try {
    const user = await UserSignUpModel.create(form);
    res.send(user);
  } catch (error) {
    res.send("Error, to SignUp!");
  }
};

const login = async (req: Request, res: Response) => {
  // try {
  //     const {loginUser} = req.body;
  //     // const user = await .findOne({mail});
  // //     if ()
  // // } catch (error) {
  // //     res.send({error: "Not valid email or password"})
  // // }
};
