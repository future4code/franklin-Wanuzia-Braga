import { RecipeDataBase } from "../database/RecipeDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { ICreateRecipeInputDTO, IRecipeMessageOutputDTO } from "../models/DTO's/RecipeDTOs";
import { Recipe } from "../models/Receitas";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeBusiness {
    constructor(
        protected recipeDatabase:RecipeDataBase,
        protected idGenerator:IdGenerator,
        protected authenticator:Authenticator,

    ) {}
    public create = async (input:ICreateRecipeInputDTO) => {
        const token = input.token
        const title = input.title
        const description = input.description

        if (!token || !title || !description) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof title !== "string" || title.length < 3) {
            throw new Error("Parâmetro 'title' inválido")
        }

        if (typeof description !== "string" || description.length < 10) {
            throw new Error("Parâmetro 'description' inválido")
        }

        const id = this.idGenerator.generate();
        const createdAt = new Date();
        const payload = this.authenticator.getTokenPayload(token)
       
        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }        

        const userId = payload.id;
        const user = await new UserDatabase().findById(userId)
        const userName = user.name      
        
        const newRecipe = new Recipe(
            id, 
            title,
            description,
            createdAt,
            userId,
            userName,
        )
        await this.recipeDatabase.createRecipe(newRecipe)


        const response:IRecipeMessageOutputDTO = {
            message: "Receita cadastrada com sucesso",
        }

        return response
    };
}