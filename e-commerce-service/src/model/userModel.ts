import { model } from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({ 
    name: String, 
    password: String, 
    email: String, 
    phoneNunber: String, 
});

export const UserModel = model('User', schema);



