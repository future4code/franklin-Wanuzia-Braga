import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { ICreateRecipeInputDTO, IDeleteRecipeInputDTO, IEditRecipeInputDTO, IGetRecipeByIdInputDTO, IGetrecipeByIdOutputDTO, IRecipeMessageOutputDTO } from "../models/DTO's/RecipeDTOs";

export class RecipeController {
    constructor(
        protected recipeBusiness:RecipeBusiness
    ) {}
    public createRecipe = async (req: Request, res: Response) => {
        try {
            const input: ICreateRecipeInputDTO = {
                token: req.headers.authorization,
                title: req.body.title,
                description: req.body.description,
            }

            const response:IRecipeMessageOutputDTO = await this.recipeBusiness.create(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public getRecipeById = async (req:Request, res:Response) => {
        try{
            const input:IGetRecipeByIdInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }
            const response:IGetrecipeByIdOutputDTO = await this.recipeBusiness.getRecipe(input)

            res.status(200).send(response)
        }catch(error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public editRecipe = async (req: Request, res: Response) => {
        try {
            const input: IEditRecipeInputDTO = {
                token: req.headers.authorization,
                idToEdit: req.params.id,
                title: req.body.title,
                description: req.body.description,
            }

            const response = await this.recipeBusiness.editRecipe(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    };
    public deleteRecipe = async (req: Request, res: Response) => {
        try {
            const input: IDeleteRecipeInputDTO = {
                token: req.headers.authorization,
                idToDelete: req.params.id
            }

            const response = await this.recipeBusiness.deleteRecipe(input)

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