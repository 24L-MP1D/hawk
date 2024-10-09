// src/index.ts

import express from "express";
import connectDB from "./configs/database";
import cors from "cors";
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
import { createUserSignIn } from "./controller/SignInController";
import { login } from "./controller/loginController";

import { paymentRouter } from "./router/PaymentRouter";
import { orderRouter } from "./router/orderRouter";

import { loginRouter } from "./router/loginRouter";

import { categoryRouter } from "./router/categoryRouter";
import { reviewRouter } from "./router/reviewRouther";

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
app.use(paymentRouter);
app.use(orderRouter);


app.use(cartRouter);

//login service

app.use(loginRouter);


app.post("/SignUp", createUserSignUp);

app.post("/signin", createUserSignIn);

app.post("/login", login);




app.use(categoryRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cartRouter);
app.use(reviewRouter)