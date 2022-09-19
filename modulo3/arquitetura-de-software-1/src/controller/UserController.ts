import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { User } from "../model/User";

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
    public login = async (req:Request, res:Response) => {
        try{
            const input:any = {
                email: req.body.email,
                password: req.body.password
            }

            const result = await new UserBusiness().login(input)

            res.status(200).send(result)

        }catch(error){
            console.log(error)
        }
    }
    public getall = async (req:Request, res:Response)=> {
        try {
            const token:string = req.headers.authorization as string
            const users = await new UserBusiness().getUsers(token)

            res.status(200).send(users)
        }catch(error:any){
            res.send(error)
            if(error.message === "Token faltando")
            res.status(403).send("Token faltando")
            if(error.message === "Usuário não autorizado")
            res.status(401).send("Usuário não autorizado")
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
    public deleteUser = async (req:Request, res:Response) => {
        try{
            const input:any = {
                token:req.headers.authorization,
                idToDelete: req.params.id
            }

            const result = await new UserBusiness().deteleUser(input)
            res.status(200).send(result)

        }catch(error){
            res.send(error)
        }
    }
}