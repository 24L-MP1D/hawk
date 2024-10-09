import { model } from "mongoose";
import { Schema } from "mongoose";
import { Product } from "./productModel";

const schema = new Schema({
  name: String,
  amount: Number,
  ProductId: String,
  image: String,
});

export const SavedModel = model("Save", schema);
