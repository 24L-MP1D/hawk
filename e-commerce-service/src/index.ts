// src/index.ts

import express from "express";
import connectDB from "./configs/database";
import cors from "cors";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProducts,
} from "./controller/CategoryController";
import { productsRouter } from "./router/productsRouter";

import { saveRouter } from "./router/saveRouter";
import { userRouter } from "./router/UserRouter";
import { uploadRouter } from "./router/uploadRouter";
import { cartRouter } from "./router/ShoppingCartRouter";
import { createUserSignUp } from "./controller/SignUpController";
const app = express();
const port = 4000;

connectDB();
app.use(cors());
app.use(express.json());

// products CRUD done
app.use(productsRouter);

app.use(uploadRouter);

app.use(userRouter);
app.use(saveRouter);

app.post("/Auth/SignUp", createUserSignUp);

app.post("/signin", (req: Request, res: Response) => {
const {email, password} = req.body;
const isAuthenticated = true;  // DB user fetch compare

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashedPass = bcrypt.hashSync(password.password, salt);

const form = {
    email: email.email,
    password: hashedPass,
  };
  console.log({ form });

if(isAuthenticated) {
  const privateKey = "1234"; // .env file deeree nuuna
  const token = jwt.sign({ email: email }, privateKey, { expiresIn: '2h' }); 

return res.json({token})
} else {
return res.sendStatus(401);
}
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cartRouter);
