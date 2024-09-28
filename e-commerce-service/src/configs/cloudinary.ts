import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
cloudinary.config({
  cload_name: process.env.CLOUDINARYNAME,
  api_key: process.env.CLOUDINARYKEY,
  api_secret: process.env.CLOUDINARYSECRETKEY,
});

export const handleUpload = async (file: string) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
};
