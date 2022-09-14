import { UserDatabase } from "../database/UserDatabase";
import Authenticator from "../services/Authenticator"
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator"
import { authenticationData } from "../types";
import { User } from "../User";
import { Request, Response } from "express";


export default async function createUser (req:Request, res:Response){
    const id:string = new IdGenerator().generateId();
    const {email, password, role} = req.body;
    const newUser:User = new User(id, email, password, role)
    try{
        if(!email || email.indexOf("@") === -1) {
           return res
           .status(422)
           .send("Preencha com um email válido.")
          
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
        const newUser:User = new User(id, email, hash, role);

        const payload:authenticationData = {id:newUser.id, role:newUser.role}
        const token = new Authenticator().generateToken(payload);
        const userDatabase = new UserDatabase()

        await  userDatabase.createUser(newUser)
            res.status(201).send({ newUser:{
                id, email, role
            },token })
    }catch(error:any){
        console.log(error)
    }

}
