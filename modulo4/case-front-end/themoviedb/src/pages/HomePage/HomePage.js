import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { goToMovieDetails } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { API_KEY, BASE_URL, BASE_URL_IMAGE, URL_LANGUAGE } from "../../urls";
import useRequestData from "../../hooks/useRequestData";
import { MovieListContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/theme';
import BannerHeader from "../../components/BannerFilter/BannerFilter";
import moment from 'moment';
import 'moment/locale/pt-br'

// const apikey = process.env.REACT_APP_API_KEY


const HomePage = () => {
    const navigate = useNavigate()
    let [pageNumber, setPage] = useState(1)
    const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}popular?${API_KEY}${URL_LANGUAGE}&page=${pageNumber}`);
    const movies = useRequestData([], currentPageUrl)

    const handleChange = (event, value) => {
        setPage(value);
        setCurrentPageUrl(`${BASE_URL}popular?${API_KEY}${URL_LANGUAGE}&page=${pageNumber}`);
      };
    useEffect(() => {
        // setCurrentPageUrl()
      }, [movies]);
    
    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }
    const movieCards = movies.map((movie) => {
        const dataCerta = moment(movie.release_date).format("D MMM YYYY").toUpperCase()
        return(
            <MovieCard 
            key={movie.id}
            title={movie.title}
            image={BASE_URL_IMAGE + movie.poster_path}
            release_date={dataCerta}
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