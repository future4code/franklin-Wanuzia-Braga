import { IRecipeDB, Recipe } from "../models/Receitas";
import { BaseDatabase } from "./BaseDatabase"

export class RecipeDataBase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes";

    public createRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            createdAt: recipe.getCreatedAt(),
            user_id: recipe.getUserId(),
            user_name: recipe.getUserName()
        }


        await BaseDatabase
            .connection(RecipeDataBase.TABLE_RECIPES)
            .insert(recipeDB)
};
public findById = async (id: string) => {
    const usersDB: IRecipeDB[] = await BaseDatabase
        .connection(RecipeDataBase.TABLE_RECIPES)
        .select()
        .where({ id })

    return usersDB[0]
};
public editRecipe = async (recipe: Recipe) => {
    const recipeDB: IRecipeDB = {
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        createdAt: recipe.getCreatedAt(),
        user_id: recipe.getUserId(),
        user_name: recipe.getUserName(),

    }

    await BaseDatabase
        .connection(RecipeDataBase.TABLE_RECIPES)
        .update(recipeDB)
        .where({ id: recipeDB.id })
};
public deleteRecipe = async (id:string) => {
    await BaseDatabase
    .connection(RecipeDataBase.TABLE_RECIPES)
    .delete()
    .where({ id })
};
}