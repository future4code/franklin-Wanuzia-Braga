import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeContainer, RecipeImage, ScreenContainer } from "./styled";
import Typography from '@material-ui/core/Typography'
import Loading from "../../components/Loading/Loading";

const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipes = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

    return (
        <ScreenContainer>
            {recipes ? <RecipeContainer>
                <RecipeImage src={recipes.image} />
                <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipes.title}</Typography>
                    <Typography align={'center'}>{recipes.description}</Typography>
            </RecipeContainer> : <Loading />}
        </ScreenContainer>


    )
}

export default RecipeDetailPage