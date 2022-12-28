import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserInsertDTO } from "../models/User";

export class UserController {
    constructor(
        protected userBusiness:UserBusiness
    ) {}
    public insertUser = async (req: Request, res: Response) => {
        try {
            const input: IUserInsertDTO = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                participation: Number(req.body.participation)
            }

         const response = await this.userBusiness.create(input)

            res.status(201).send({message: response})
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    
    public getAll= async (req:Request, res:Response) => {
        try{
 
            const response = await this.userBusiness.getAllUsers()

            res.status(200).send(response)
        }catch(error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
   
    
    public getUserById = async (req:Request, res:Response) => {
        try{
            const idProfile:string = req.params.id
         
            const response = await this.userBusiness.getUserById(idProfile)

            res.status(200).send(response)
        }catch(error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public deleteUser = async (req: Request, res: Response) => {
        try {
            const idToDelete = req.params.id
            const response = await this.userBusiness.deleteUser(idToDelete)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
   
}