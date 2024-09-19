import express from "express";
import {
  createProduct,
  deleteProducts,
  getProducts,
  updateProducts,
} from "../controller/CategoryController";

export const productsRouter = express.Router();

productsRouter
  .post("/products", createProduct)

  .get("/products", getProducts)

  .delete("/products/:id", deleteProducts)

  .put("/products/:id", updateProducts);
