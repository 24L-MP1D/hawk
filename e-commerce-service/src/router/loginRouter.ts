import express from "express";
import { login } from "../controller/loginController";
export const loginRouter = express.Router();

loginRouter.post("/login", login);
