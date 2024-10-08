import { model, Schema } from "mongoose";



const schema = new Schema({
  orderNumber: String,
  paymentStatus: Boolean, 
  paymentType: String, 
  createdAt: Date, 
  updateAt: Date, 
  paymentAmount: Number,
});

export const Payment = model("payment", schema);