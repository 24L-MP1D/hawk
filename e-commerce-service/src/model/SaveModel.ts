import {model} from "mongoose";
import { Schema } from "mongoose";

const schema = new Schema({
    name: String,
    amount: String,  
}); 

export const SavedModel = model('Save', schema);


