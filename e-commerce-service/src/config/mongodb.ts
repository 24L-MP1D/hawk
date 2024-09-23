import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://galtbatzana1:galt@cluster0.hcogk.mongodb.net/"
    );
    console.log("Connected to database successfully!Galt");
  } catch (error) {
    console.error(error);
  }
};
