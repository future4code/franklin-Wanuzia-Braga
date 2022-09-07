import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { authenticationData } from "../types";

 export const login = async (req:Request, res:Response) => {
    const {email, password} = req.body;
    try{

        if(!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Preencha com um email válido.")
        }
        const user =  await new UserDatabase().getUserByEmail(email);

        if(!user || user.password !== password) {
            res.statusCode = 401
            throw new Error('Credenciais de acesso inválidas.')
        }
        const payload:authenticationData = {id:user.id}
        const token = new Authenticator().generateToken(payload);
       res.status(200).send({token})
    }catch(error:any) {
        res.send(error)
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
            
        } if(error.statusCode = 422){
            res.send(error.message)
        }
        else {
            res.send({message: error})
        }
    } 
 }