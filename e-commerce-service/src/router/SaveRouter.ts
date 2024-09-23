import express from "express";
import {
  getSavedProducts,
  createSavedProducts,
  updateSavedProducts,
  deleteSavedProducts,
} from "../controllers/SaveController";

const saveRouter = express.Router();

saveRouter
  .get("/save", getSavedProducts)
  .post("/save", createSavedProducts)
  .put("/save/:id", updateSavedProducts)
  .delete("/save/:id", deleteSavedProducts);

export { saveRouter };
