import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { ICreateRecipeInputDTO, IRecipeMessageOutputDTO } from "../models/DTO's/RecipeDTOs";

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
}