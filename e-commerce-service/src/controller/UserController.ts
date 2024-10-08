import { Request, Response } from "express";
import { User } from "../model/UserModel";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const users = req.body;
  const { password } = req.body;

  try {
    const user = await User.create(users);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.send("find error");
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { userName, email, phoneNumber,address } = req.body;
  const { _id } = req.params;
  console.log(req.body);
  try {
    const user = await User.updateOne({
      _id,
      userName,
      email,
      phoneNumber,
      address
    });
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.send("find error");
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.send("find error");
  }
};
