import { Request, Response } from "express";
import connection from "../connection";
import { User } from "../models/User";
import { IdGenerator } from "../services/idGenerator";

const userTable = "User";
export const createUser = async (req:Request, res:Response) => {
    const id:string = new IdGenerator().generateId();
    const {email, password} = req.body;
    const newUser = new User(id, email, password);
    try{
    
        if(!email || !password) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'email' e 'password'.")
        }
        const [user] =  await connection(userTable)
        .where({ email })
        if(user) {
            res.statusCode = 409
            throw new Error('Email já cadastrado.')
        }
        await connection
            .insert(newUser)
            .into(userTable);
        res.status(201).send("Usuário cadastrado com sucesso!")
    }catch(error:any) {
        console.log(error)
        if(res.statusCode ===200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    } 
    
};