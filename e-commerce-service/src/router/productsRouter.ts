import express from "express";
import {
  createProduct,
  deleteProducts,
  getOneProduct,
  getProducts,
  updateProducts,
} from "../controller/CategoryController";

export const productsRouter = express.Router();

productsRouter
  .get("/products/:id", getOneProduct)
  .post("/products", createProduct)

  .get("/products", getProducts)

  .delete("/products/:id", deleteProducts)

  .put("/products/:id", updateProducts);
