import { RecipeDataBase } from "../database/RecipeDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { ICreateRecipeInputDTO, IEditrecipeInputDBDTO, IEditRecipeInputDTO, IGetRecipeByIdInputDTO, IGetrecipeByIdOutputDTO, IRecipeMessageOutputDTO } from "../models/DTO's/RecipeDTOs";
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
    public getRecipe = async (input:IGetRecipeByIdInputDTO) => {
        const token = input.token
        const id = input.id

        if(!token) {
            throw new Error("Token inválido ou faltando!")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        const recipeDB = await this.recipeDatabase.findById(id)

        if (!recipeDB) {
            throw new Error("Receita não encontrada")
        }
            const recipeResponse: IGetrecipeByIdOutputDTO = {
                id: recipeDB.id,
                title: recipeDB.title,
                description: recipeDB.description,
                createdAt: recipeDB.createdAt
 
            }

            return recipeResponse
    };
    public editRecipe = async (input: IEditRecipeInputDTO) => {
        const {
            token,
            idToEdit,
            title,
            description
        } = input

        if (!token) {
            throw new Error("Token faltando")
        }

        if (!token && !idToEdit && !title || !description) {
            throw new Error("Parâmetros faltando")
        }
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido")
        }

        if (title && typeof title !== "string") {
            throw new Error("Parâmetro 'title' inválido")
        }

        if (description && typeof description !== "string") {
            throw new Error("Parâmetro 'description' inválido")
        }

        const recipeDB = await this.recipeDatabase.findById(idToEdit)

        if (!recipeDB) {
            throw new Error("Receita a ser editada não existe")
        }

        if (payload.id !== recipeDB.user_id) {
             throw new Error("Usuários só podem editar a própria receita.")
        }


        const recipe = new Recipe(
            recipeDB.id,
            recipeDB.title,
            recipeDB.description,
            recipeDB.createdAt,
            recipeDB.user_id,
            recipeDB.user_name
        )

        title && recipe.setTitle(title)
        description && recipe.setDescription(description)

        await this.recipeDatabase.editRecipe(recipe)

        const response = {
            message: "Edição realizada com sucesso"
        }

        return response
    }
}