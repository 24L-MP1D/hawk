import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserSignUpModel } from "../model/SignUpModel";
import jwt from "jsonwebtoken";

export const createUserSignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = (await UserSignUpModel.findOne({ email })) || "";
  console.log({ user });
  // const isAuthenticated = email

  if (!user) {
    return res.status(401).json({ messege: "Invalid user!" });
  }
  const isAuthenticated = await bcrypt.compareSync(
    String(password),
    String(user.password)
  );
  if (isAuthenticated) {
    const privateKey = "1234"; // .env file deeree nuuna
    const token = jwt.sign({ email: email, userId: user._id }, privateKey, {
      expiresIn: "2h",
    });
    console.log({ token });
    return res.send({ token });
  } else {
    return res.status(404);
  }

  // try {
  //   if (user.email === email && user.password === password) {
  //     const privateKey = "1234"; // .env file deeree nuuna
  //     const token = jwt.sign({ email: email }, privateKey, {
  //       expiresIn: "2h",
  //     });
  //     console.log({ token });
  //     return res.send({ token });
  //   } else {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }
  // } catch (error) {
  //   return res.send("Error, to SignIn!");
  // }
};
