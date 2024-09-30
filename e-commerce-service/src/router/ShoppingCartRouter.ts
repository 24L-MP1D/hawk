import express from "express";
import {  } from "../controller/UserController";
import { createShoppingCart, getShoppingCart } from "../controller/ShoppingCartController";
import { getOneCart } from "../controller/CartController";



export const cartRouter = express.Router();

cartRouter
  .post("/ShoppingCart", createShoppingCart)
  .get("/ShoppingCart", getOneCart)
