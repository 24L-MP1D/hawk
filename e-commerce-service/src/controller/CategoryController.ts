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
    const { categoryType } = req.query;
    const filtProduct = await Product.find({
      categoryType,
    });
    res.send(filtProduct);
    // if (categoryType && lowprice && highprice) {
    //   const filtProduct = await Product.find({
    //     categoryType,
    //   });
    //   const filteredProduct = filtProduct.filter(
    //     (filt) =>
    //       Number(filt.price) >= Number(lowprice) &&
    //       Number(filt.price) <= Number(highprice)
    //   );
    //   return res.send(filteredProduct);
    // }
    // if (lowprice && highprice) {
    //   const filtProduct = await Product.find();
    //   const filteredProduct = filtProduct.filter(
    //     (filt) =>
    //       Number(filt.price) >= Number(lowprice) &&
    //       Number(filt.price) <= Number(highprice)
    //   );
    //   return res.send(filteredProduct);
    // }
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
