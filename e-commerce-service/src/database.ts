import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL as string, {
      dbName: "e-commerce",
    })
    .then(() => {
      console.log("MongoDB bolson");
    })
    .catch((error) => {
      console.error("Error..");
    });

  return;
};

export default connectDB;
