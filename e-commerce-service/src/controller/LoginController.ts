import { Request, Response } from "express";
import { User } from "../model/UserModel";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("user does not exist");
    if (user.password !== password)
      return res.status(401).send("password incorrect");
    else {
      return res.status(201).send(user);
    }

    // if (password === password) return res.status(201).send(user);
    // else return res.status(401).send("password incorrect");

    // const isEqual = bcrypt(String(password), user.password);
    // if (isEqual) return res.send(user);
    // res.status(401).send("password incorrect");
  } catch (error) {
    res.send("aldaaaa");
  }
};
