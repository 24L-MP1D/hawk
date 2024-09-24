import express from "express";
import { createUser, getUsers, updateUser } from "../controller/UserController";

export const userRouter = express.Router();

userRouter
  .post("/register", createUser)
  .put("/updateUser/:id", updateUser)
  .get("/getUsers", getUsers);
