import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { goToMovieDetails } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { MovieListContainer } from "./styled";
import Loading from "../../components/Loading/Loading";


const apikey = process.env.REACT_APP_API_KEY

const HomePage = () => {
    const navigate = useNavigate()
    const movies = useRequestData([], `${BASE_URL}popular?${apikey}`)

    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }

  
    const movieCards = movies.map((movie) => {
        return(
            <MovieCard 
            key={movie.id}
            title={movie.title}
            image={BASE_URL_IMAGE + movie.poster_path}
            release_date={movie.release_date}
             onClick={() => onClickCard(movie.id)}
            />
        )
    })
    console.log(movieCards)
    return(
        <MovieListContainer>
           {movieCards.length > 0 ? movieCards : <Loading />}



        </MovieListContainer>
    )
}

export default HomePage