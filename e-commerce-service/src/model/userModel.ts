import { model, Schema } from "mongoose";

const schema = new Schema({
  userName: String,
  email: String,
  phoneNumber: Number,
  password: String,
  address: String,
  zipCode: Number,
  cardId: String,
  savedProductId: String,
  createAt: Date,
  updateAt: Date,
  categoryType: String,
});
export const User = model("users", schema);
