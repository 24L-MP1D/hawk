import  express  from "express";
import { createSavedProducts, deleteSavedProducts, getSavedProducts, updateSavedProducts } from "../controller/save.Controller";

 
const saveRouter = express.Router();
 
saveRouter
.get("/Save", getSavedProducts)
.post("/Save", createSavedProducts)
.put("/Save/:id", updateSavedProducts)
.delete("/Save/:id",deleteSavedProducts)
 
export {saveRouter}
 
 