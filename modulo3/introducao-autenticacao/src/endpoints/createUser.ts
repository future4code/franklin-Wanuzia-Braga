import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";
import { authenticationData } from "../types";

export const createUser = async (req:Request, res:Response) => {
    const id:string = new IdGenerator().generateId();
    const {email, password} = req.body;

    try{
             
        if(!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            res.send("Preencha com um email válido.")
            return;
        }
        const user =  await new UserDatabase().getUserByEmail(email)
        if(user) {
            return res
            .status(409)
            .send('Email já cadastrado.')
            
        }
        if(!password || password.length < 6) {
            res.send("Senha inválida!")
            return
        }
        const hasManager = new HashManager()
        const hash = await hasManager.hash(password)
        const newUser:User = new User(id, email, hash);

        const payload:authenticationData = {id:newUser.id}
        const token = new Authenticator().generateToken(payload);
        const userDatabase = new UserDatabase()

        await  userDatabase.createUser(newUser)
            res.status(201).send({ newUser:{
                id, email
            },token })

    }catch(error:any) {
        res.send(error)
        if(res.statusCode === 200) {
            res.status(500).send({message: "Internal server error"})
        }else {
            res.send({message: error.message})
        }
    }
    };
