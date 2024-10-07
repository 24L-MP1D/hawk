import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response, Request } from "express";
import { UserSignUpModel } from "../model/SignUpModel";
// const mockUser = {
//   email: "badral@gmail.com",
//   password: "Galt@123",
// };

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserSignUpModel.findOne({ email });
  console.log({ user });

  if (user) {
    const isAuthenticated =
      email === user.email &&
      bcrypt.compareSync(password, String(user.password));

    // const isAuthenticated = email === user.email && password === user.password;
    try {
      if (isAuthenticated) {
        const privateKey = "1234"; // .env file deeree nuuna
        const token = jwt.sign({ email: email }, privateKey, {
          expiresIn: "2h",
        });
        console.log({ token });
        return res.json({ token });
      } else {
        return res.status(401).json({ message: "Wrong pass" });
      }
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
  }
  return res.status(401).json({ message: "No user" });
};

// const login = async (req: Request, res: Response) => {
//   // try {
//   //     const {loginUser} = req.body;
//   //     // const user = await .findOne({mail});
//   // //     if ()
//   // // } catch (error) {
//   // //     res.send({error: "Not valid email or password"})
//   // // }
// };
