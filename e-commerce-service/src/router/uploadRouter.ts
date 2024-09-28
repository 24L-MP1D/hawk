import express from "express";
import { fileUploader } from "../controller/FileController";
import Multer, { memoryStorage } from "multer";
const uploadRouter = express.Router();
const storage = memoryStorage();
const multer = Multer({ storage });
uploadRouter.post("/upload", multer.single("image"), fileUploader);

export { uploadRouter };
