import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/UserController";

const userRouter = express.Router();

userRouter
.get("/users", getUsers)
.post("/users", createUser)
.put("/users/:id", updateUser )
.delete("/users/:id", deleteUser);

export { userRouter }; 