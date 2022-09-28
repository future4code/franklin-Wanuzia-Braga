import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { goToMovieDetails } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL, BASE_URL_IMAGE } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { MovieListContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";


const apikey = 'api_key=c443e2649c9a98f6605f9a352ebdf2de'

const HomePage = () => {
    const navigate = useNavigate()
    let [pageNumber, setPage] = useState('1')
    const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}popular?${apikey}&lang=en&page=${pageNumber}`);
    const movies = useRequestData([], currentPageUrl)

    useEffect(() => {
        // setCurrentPageUrl()
      }, [movies, pageNumber]);
    
      console.log(pageNumber)

      function goToNextPage() {
          for (let i = 0; i <= 99; i++) {
           setPage(pageNumber ++)
          }
        setCurrentPageUrl(`${BASE_URL}popular?${apikey}&lang=en&page=${pageNumber}`);
      }
      function goToPrevPage() {
        for (let i = 1; i <= 99; i++) {
        setPage(pageNumber --)
        }
        setCurrentPageUrl(`${BASE_URL}popular?${apikey}&page=${pageNumber}`);
      }

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

        <MovieListContainer>
           {movieCards.length > 0 ? movieCards : <Loading />}
        </MovieListContainer>
        <div>
      
        <Pagination goToPrevPage={goToPrevPage} goToNextPage={goToNextPage} />

    </div>

        </div>
    )
}

export default HomePage