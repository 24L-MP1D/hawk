import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response, Request } from "express";
const mockUser = {
  email: "Temmy@gmail.com",
  password: "$2b$10$tlyta5GcyZkZRKq2t/Lyq.ffoRkfFrxaXU9XGAu7MuhbZxOboPAxe",
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const isAuthenticated =
    email === mockUser.email && bcrypt.compareSync(password, mockUser.password);

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
