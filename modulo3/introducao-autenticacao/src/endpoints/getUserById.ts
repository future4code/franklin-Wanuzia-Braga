import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { authenticationData } from "../types";

export const getUserById = async (req:Request, res:Response) => {
    const token = req.headers.authorization as string;
    try{
        const data = new Authenticator().getTokenData(token) as authenticationData;
        const user = await new UserDatabase().getUserById(data.id)

        res.status(200).send({id:user.id, email:user.email});
    }catch(error){
        res.send(error)
    }
}

