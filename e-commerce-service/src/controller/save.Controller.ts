import { SavedModel } from "../model/saveModel";
import { Request, Response } from "express";

const getSavedProducts = async (req: Request, res: Response) => {
  try {
    const savedProducts = await SavedModel.find();
    res.send(savedProducts);
  } catch (error) {
    res.status(400).json({ errorMessage: "Aldaa garlaa" });
  }
};

const createSavedProducts = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  try {
    const savedProduct = await SavedModel.create({
      name,
      amount,
    });
    res.send({ message: "amjilttai uusgelee" });
  } catch (error) {
    res.status(400).json({ errorMessage: "Aldaa garlaa" });
  }
};

const updateSavedProducts = (req: Request, res: Response) => {
  async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const { id } = req.params;
    try {
      const savedProduct = await SavedModel.findByIdAndUpdate(id, {
        name,
        amount,
      });
      res.send({ mesage: "amjilttai update hiilee" });
    } catch (error) {
      res.status(400).json({ errorMessage: "Aldaa garlaa" });
    }
  };
};

const deleteSavedProducts = (req: Request, res: Response) => {
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const savedProduct = await SavedModel.deleteOne({ _id: id });
      res.send({ message: "deleted successfully" });
    } catch (error) {
      res.status(400).json({ errorMessage: "Cannot create user!" });
    }
  };
};
export {
  getSavedProducts,
  createSavedProducts,
  updateSavedProducts,
  deleteSavedProducts,
};
