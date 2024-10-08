import express from "express";
import {  } from "../controller/UserController";
import { createShoppingCart, getBasketCarts, getShoppingCart } from "../controller/ShoppingCartController";


export const cartRouter = express.Router();

cartRouter
  .post("/ShoppingCart", createShoppingCart)
  .get("/getShoppingCart", getShoppingCart)
  .get("/getBasketCarts", getBasketCarts)
