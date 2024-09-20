import  express  from "express";
import {getSavedProducts, createSavedProducts, updateSavedProducts,deleteSavedProducts} from "../controllers/SaveController";

const saveRouter = express.Router();

saveRouter
.get("/Save", getSavedProducts)
.post("/Save", createSavedProducts)
.put("/Save/:id", updateSavedProducts)
.delete("/Save/:id",deleteSavedProducts)

export {saveRouter}
