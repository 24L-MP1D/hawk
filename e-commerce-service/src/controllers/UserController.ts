import { UserModel } from "../model/UserModel";
import { Request, Response } from 'express';

const getUsers = (req: Request, res: Response)=> {
    async (req: Request, res: Response)=>{
        try {
          const users = await UserModel.find(); 
          res.send(users);
      
        } catch (error) {
          res.status(400).json({errorMassage: "Error happened!"});
        }
}}

const createUser = ( req: Request, res: Response) => {
    async (req: Request, res: Response)=> {
        const { name, email } = req.body;
        try {
            const user = await UserModel.create({ 
                name,
                email,
            });
            res.send(user)
        }
        catch (error) {
            res.status(400).json({errorMessage: 'Cannot create user!'})
        }
    }
}

const updateUser = ( req: Request, res: Response) => {
    async (req: Request, res: Response)=> {
        const { name, email } = req.body;
        const { id } = req.params;
      
        try {
          const user = await UserModel.findByIdAndUpdate(id, { 
            name,
            email,
         });
          res.send(user);
        }
        catch (error) {
          res.status(400).json({errorMessage: 'Cannot create user!'});
        }
      }
}

const deleteUser = (req:Request, res: Response) => {
    async (req: Request, res: Response)=> {
        const { id } = req.params;
        try {
          const user = await UserModel.deleteOne({_id: id});
          res.send({message:"deleted successfully"})
        }
        catch (error) {
          res.status(400).json({errorMessage: 'Cannot create user!'});
        }
      }
}

export { 
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
