// import { v2 as cloudinary } from "cloudinary";
// import "dotenv/config";

// try {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARYNAME,
//     api_key: process.env.CLOUDINARYKEY,
//     api_secret: process.env.CLOUDINARYSECRETKEY,
//   });
//   console.log("success image upload");
// } catch (err) {
//   console.log(err);
// }

// export const handleUpload = async (file: string) => {
//   const res = await cloudinary.uploader.upload(file, {
//     resource_type: "auto",
//   });
//   return res;
// };

import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

try {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
} catch (error) {
  console.log(error);
}

export const hadleUpload = async (file: string) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
};
