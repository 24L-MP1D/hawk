import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserSignUpModel } from "../model/SignUpModel";
import jwt from "jsonwebtoken";

export const createUserSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserSignUpModel.findOne({ email });
  console.log({ user });
  const isAuthenticated = true; // DB user fetch compare

  //   if(password.length >=8) {
  //     return res.sendStatus(401).json({message: "password 7 oos urt baih yoestoi"})
  //   }

  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPass = bcrypt.hashSync(password.password, salt);
  console.log({ hashedPass });

  const form = {
    email: email,
    password: hashedPass,
  };

  if (user) {
    const isAuthenticated =
      email === user.email &&
      bcrypt.compareSync(password, String(user.password));
  }
  try {
    // const user = await UserSignUpModel.create(form);

    if (isAuthenticated) {
      const privateKey = "1234"; // .env file deeree nuuna
      const token = jwt.sign({ email: email }, privateKey, {
        expiresIn: "2h",
      });
      console.log({ token });
      return res.send({ token });
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    return res.send("Error, to SignIn!");
  }
};
