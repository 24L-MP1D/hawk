import { Request, Response } from "express";
import { Product, User } from "../model/productModel";
import bcrypt from "bcrypt";
const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!password || !email)
      return res.send("you must enter the email and password");
    const userRegister = await Product.create({ password, email });
    res.send(userRegister);
  } catch (err) {
    console.log(err);
    res.send("aldaa");
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.send("user oldohgui baina");
    if (!user.password) return;
    const isEquel = await bcrypt.compare(String(password), user.password);

    if (isEquel) return res.send(user);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};
export { register, login };
