import { Request, Response, json, request } from "express";
import "dotenv/config";
import { User } from "../model/UserModel";

import bcrypt from "bcrypt";

import "dotenv/config";
import jwt from "jsonwebtoken";

const SALT_SECRET = process.env.SALT_SECRET || "";

export const createUser = async (req: Request, res: Response) => {
  let user = req.body;
  let { email, password, userName } = req.body;
  console.log(SALT_SECRET);
  const hashedPassword = await bcrypt.hash(
    String(password),
    Number(SALT_SECRET)
  );

  //middleware
  const token = req.cookies.token;
  const isVeried = jwt.verify(token, SALT_SECRET);

  if (!isVeried)
    return res.status(401).send({ success: false, message: "Not auth" });
  // middleware

  try {
    const users = await User.create({
      email,
      password: hashedPassword,
      userName,
    });
    res.send(user);
  } catch (error) {
    res.send("find error");
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { userName, email, phoneNumber, address } = req.body;
  const { _id } = req.params;
  console.log(req.body);
  try {
    const user = await User.updateOne({
      _id,
      userName,
      email,
      phoneNumber,
      address,
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
