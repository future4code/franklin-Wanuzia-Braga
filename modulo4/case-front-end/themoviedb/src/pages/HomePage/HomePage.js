import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { goToMovieDetails } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { MovieListContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';
import BannerHeader from "../../components/BannerFilter/BannerFilter";



const apikey = 'api_key=c443e2649c9a98f6605f9a352ebdf2de'
// const apikey = process.env.REACT_APP_API_KEY


const HomePage = () => {
    const navigate = useNavigate()
    let [pageNumber, setPage] = useState(1)
    const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}popular?${apikey}&lang=pt-BR&page=${pageNumber}`);
    const movies = useRequestData([], currentPageUrl)

    const handleChange = (event, value) => {
        setPage(value);
        setCurrentPageUrl(`${BASE_URL}popular?${apikey}&lang=en&page=${pageNumber}`);
      };
    useEffect(() => {
        // setCurrentPageUrl()
      }, [movies, pageNumber]);
    
      console.log(pageNumber)

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

    return(
        <div>
            < BannerHeader />
        <MovieListContainer>
           {movieCards.length > 0 ? movieCards : <Loading />}
        </MovieListContainer>
        <div>       
        <ThemeProvider theme={theme}>
        <Pagination count={500} page={pageNumber} onChange={handleChange} /> 
        </ThemeProvider>
        </div>

        </div>
    )
}

export default HomePage