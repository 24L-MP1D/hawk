import { model, Schema } from "mongoose";

const schema = new Schema({
  orderNumber: String,
  productCount: Number,
  size: String,
  createAt: Date,
  updateAt: Date,
  productName: String,
  price: Number,
});

export const ShoppingCart = model("shoppingCarts", schema);