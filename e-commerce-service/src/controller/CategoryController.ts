import { Request, Response } from "express";
import { Product } from "../model/productModel";

export const createProduct = async (req: Request, res: Response) => {
  const products = req.body;
  products.createAt = new Date();
  console.log({ products });
  try {
    const product = await Product.create(products);
    res.send(product);
  } catch (error) {
    console.error(error);
    res.send("find error");
  }
};
export const getOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ _id: id });
    console.log(product);
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const getProducts = async (req: Request, res: Response) => {
  try {
    const product = await Product.find();
    console.log({ product });
    res.send(product);
  } catch (error) {
    res.send("find error");
  }
};
export const getFiltProducts = async (req: Request, res: Response) => {
  try {
    const { categoryType, lowprice, highprice, date } = req.query;
    type date = {
      from: string;
      to: string;
    };
    console.log("l", lowprice, "h", highprice);
    console.log(typeof lowprice);
    console.log(date);

    const filter: {
      categoryType?: string;
      price?: { $gt: number; $lt: number };
    } = {};

    if (categoryType) {
      filter.categoryType = String(categoryType);
    }

    if (lowprice && highprice) {
      filter.price = { $gt: Number(lowprice), $lt: Number(highprice) };
    }

    const filtProduct = await Product.find(filter);
    res.send(filtProduct);
  } catch (err) {
    res.send(err);
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
