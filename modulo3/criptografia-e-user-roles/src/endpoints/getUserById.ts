import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { authenticationData, UserRole } from "../types";

export const getById = async (req:Request, res:Response) => {
    const token = req.headers.authorization as string;
    try{
        const data = new Authenticator().compare(token);
        const user = await new UserDatabase().getUserById(data.id);

        res.status(200).send({
            id:user.id, 
            email:user.email, 
            role:user.role
        });
    }catch(error){
        res.send(error)
    }
}