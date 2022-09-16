import { Router } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeController } from "../controller/RecipeController";
import { RecipeDataBase } from "../database/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const recipeRouter = Router();

const recipeController = new RecipeController(
   new RecipeBusiness(
       new RecipeDataBase(),
       new IdGenerator(),
       new Authenticator()
   )
    );

recipeRouter.post("/", recipeController.createRecipe)