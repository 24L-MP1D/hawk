import { Schema, model } from "mongoose";

const schema = new Schema({
  userName: String,
  email: {
    type: String,
    required: [true, "Please provide email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password!"],
    unique: false,
  },
  phoneNumber: Number,
  address: String,
  zipCode: Number,
});

export const UserSignUpModel = model("userSignUp", schema);
