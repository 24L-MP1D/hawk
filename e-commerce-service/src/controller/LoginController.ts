import { Request, Response } from "express";
import { User } from "../model/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const salt = Number(process.env.SALT);
const ACCESSTOKEN_SECRET = process.env.ACCESSTOKEN_SECRET || "";
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("user does not exist");

    const matchedPass = await bcrypt.compare(password, user.password);

    if (!matchedPass) return res.send("error pass");

    const accesstoken = jwt.sign(
      { userId: user._id, email },
      ACCESSTOKEN_SECRET,

      {
        expiresIn: "5h",
      }
    );

    res.status(201).send(accesstoken);

    // if (password === password) return res.status(201).send(user);

    // else return res.status(401).send("password incorrect");

    // const isEqual = bcrypt(String(password), user.password);

    // if (isEqual) return res.send(user);

    // res.status(401).send("password incorrect");
  } catch (error) {
    res.send("aldaaaa");
  }
};
