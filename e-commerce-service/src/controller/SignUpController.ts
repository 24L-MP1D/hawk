import { Request, Response } from "express";
import { UserSignUpModel } from "../model/SignUpModel";

export const createUserSignUp = async (req: Request, res: Response) => {
    const userSignUp = req.body;
    console.log(req.body)
    try {
        const user = await UserSignUpModel.create(userSignUp)
        res.send(user)
    } catch (error) {
        res.send("error")
    }
};