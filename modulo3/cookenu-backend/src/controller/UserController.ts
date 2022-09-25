import { Request, Response } from "express";
import { UserBusiness } from "../business/Userbusiness";
import { IDeleteUserInputDTO, IFollowInputDTO, IGetUserByIdInputDTO, IGetUserProfileOutputDTO, ILoginInputDTO, ISignupInputDTO, ISignupOutputDTO } from "../models/DTO's/UserDTOs";

export class UserController {
    constructor(
        protected userBusiness:UserBusiness
    ) {}
    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response:ISignupOutputDTO = await this.userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    
    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public getOwnProfile = async (req:Request, res:Response) => {
        try{
            const token:string = req.headers.authorization as string;
            const response:IGetUserProfileOutputDTO = await this.userBusiness.getUserProfile(token)

            res.status(200).send(response)
        }catch(error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public getProfileByUserId = async (req:Request, res:Response) => {
        try{
            const input:IGetUserByIdInputDTO = {
                token: req.headers.authorization,
                idProfile: req.params.id
            }
            const response:IGetUserProfileOutputDTO = await this.userBusiness.getUserProfileById(input)

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
            const input: IDeleteUserInputDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.userBusiness.deleteUser(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public followUser = async (req: Request, res: Response) => {
        try {
            const input: IFollowInputDTO = {
                token: req.headers.authorization,
                id_followed: req.body.id_followed
                
            }
            const response = await this.userBusiness.followUser(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

}