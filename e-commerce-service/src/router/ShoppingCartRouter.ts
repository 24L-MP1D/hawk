import express from "express";
import {  } from "../controller/UserController";
import { createShoppingCart, getShoppingCart } from "../controller/ShoppingCartController";


export const cartRouter = express.Router();

cartRouter
  .post("/ShoppingCart", createShoppingCart)
  .get("/getShoppingCart/:id", getShoppingCart)
