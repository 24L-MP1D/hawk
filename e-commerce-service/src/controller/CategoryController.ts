import { Request, Response } from "express";
import { Product } from "../model/userModel";
export const createProduct = async (req: Request, res: Response) => {
  const products = req.body;
  try {
    const product = await Product.create(products);
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const product = await Product.find();
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete({ _id: id });
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const updateProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  try {
    const product = await Product.updateOne({ _id: id }, updatedProduct);
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
