import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response, Request } from "express";
const mockUser = {
  email: "badral@gmail.com",
  password: "Galt@123",
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // const isAuthenticated =
  //   email === mockUser.email && bcrypt.compareSync(password, mockUser.password);
  const isAuthenticated =
    email === mockUser.email && password === mockUser.password;
  try {
    if (isAuthenticated) {
      const privateKey = "1234"; // .env file deeree nuuna
      const token = jwt.sign({ email: email }, privateKey, {
        expiresIn: "2h",
      });
      console.log({ token });
      return res.json({ token });
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized user" });
  }
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
