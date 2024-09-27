import { Request, Response } from "express";
import { ShoppingCart } from "../model/ShoppingCartModel";
import { Product } from "../model/productModel";




export const createShoppingCart = async (req: Request, res: Response) => {
  const Cart = req.body;
  Cart.createAt = new Date()
  console.log(req.body);
  try {
    const carts = await ShoppingCart.create(Cart);
    console.log(Cart);
    res.send(carts);
  } catch (error) {
    console.error(error);
    res.send("find error");
  }
};

export const getShoppingCart = async (req: Request, res: Response) => {
  const { id } = req.params;
  try{
    const Carts = await Product.findOne({ _id: id });
    console.log(Carts)
    res.send(Carts)
  }catch(error){
    console.log(error)
    res.send("find error")
  }
}



