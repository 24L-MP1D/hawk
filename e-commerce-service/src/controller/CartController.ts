import { Product } from "../model/productModel";
import { ShoppingCart } from "../model/ShoppingCartModel";
import { Request, Response } from "express";



export const getOneCart = async (req: Request, res: Response) => {
    console.log("a")
    try {
      
      const product = await ShoppingCart.find();
      console.log(product);
      res.send(product);
    } catch (error) {
      res.send("find error");
    }
  };