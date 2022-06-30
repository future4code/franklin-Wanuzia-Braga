import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from '../../constants/urls'
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import { Add } from '@material-ui/icons'
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const RecipesListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const onClickCard = (id) => {
        goToRecipeDetail(navigate, id)
    }

  
    const recipeCards = recipes.map((recipe) => {
        return(
            <RecipeCard 
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })
    return(
        <RecipeListContainer>
           {recipeCards}
           <AddRecipeButton 
           color="primary"
           onClick={() => goToAddRecipes(navigate)}
           >
               <Add />
           </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage