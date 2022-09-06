import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../models/User";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { authenticationData } from "../types";

const userTable = "User";
export const createUser = async (req:Request, res:Response) => {
    const id:string = new IdGenerator().generateId();
    const {email, password} = req.body;
    const newUser = new User(id, email, password);

    try{
    
        if(!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Preencha com um email válido.")
        }
        const [user] =  await connection(userTable)
        .where({ email })
        if(user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado.')
        }
        if(!password || password.length < 6) {
            throw new Error("Senha inválida!")
        }
        const payload:authenticationData = {id:newUser.id}
        const token = new Authenticator().generateToken(payload);
        await connection
            .insert(newUser)
            .into(userTable);
            res.status(201).send({ token })
    }catch(error:any) {
        console.log(error)
        if(res.statusCode ===200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    } 
    
};