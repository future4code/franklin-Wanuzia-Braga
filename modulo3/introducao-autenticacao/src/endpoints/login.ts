import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { authenticationData } from "../types";

 export const login = async (req:Request, res:Response) => {
    const {email, password} = req.body;
    try{

        if(!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            res.send("Preencha com um email válido.")
            return
        }
        const user =  await new UserDatabase().getUserByEmail(email);

        const hashManager = new HashManager();
        const passwordIsValid:boolean = await hashManager.compare(password, user.password)

        if(!user || !passwordIsValid) {
            res.statusCode = 401
            res.send('Credenciais de acesso inválidas.')
            return
        }
        const payload:authenticationData = {id:user.id, role:user.role}
        const token = new Authenticator().generateToken(payload);
       res.status(200).send({token})
    }catch(error:any) {
        res.send(error)
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error})
        }
    } 
 }