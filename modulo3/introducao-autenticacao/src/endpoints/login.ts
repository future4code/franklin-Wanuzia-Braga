import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../models/User";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { authenticationData } from "../types";

const userTable = "User";

const getUserByEmail = async(email: string): Promise<User> => {
    const result = await connection
      .select("*")
      .from(userTable)
      .where({ email });
    return result[0];
   };

 export const login = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    try{

        if(!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Preencha com um email válido.")
        }
        const user =  await getUserByEmail(email);

        if(!user || user.password !== password) {
            res.statusCode = 401
            throw new Error('Credenciais de acesso inválidas.')
        }
        const payload:authenticationData = {id:user.id}
        const token = new Authenticator().generateToken(payload);
       res.status(200).send({token})
    }catch(error:any) {
        console.log(error)
        if(res.statusCode ===200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    } 
 }