import React, {useState, useEffect} from "react";
import {BannerSection, FirtsDetails} from './styled'
import axios from  'axios';
import {useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { MovieCardContainer, MovieCardContent, PosterImg } from './styled'
import { BASE_URL, BASE_URL_IMAGE } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { formataData } from "../../utils/formatDate";

const DetailsPage = () => {
    const params = useParams()
    const [movie, setMovie] = useState({})
    // const api_key = process.env.REACT_APP_API_KEY

    const detailsMovie = () => {
        axios.get(`${BASE_URL}${params.id}?api_key=c443e2649c9a98f6605f9a352ebdf2de`,
            {
                headers: {
                    Authorization: process.env.REACT_APP_API_AUTHORIZATION
                }
            }).then((response) => {
            //    console.log(response.data)
                setMovie(response.data)
            }).catch((err) => {
                alert(err)
                console.log(err)
            })
    }

        const genre = movie.genres
        const genres = genre && genre.map((genre) => {
           return (
               <Typography > {genre.name} </Typography >
           )
       } )

       const certification = useRequestData([], `${BASE_URL}${params.id}/release_dates?api_key=c443e2649c9a98f6605f9a352ebdf2de`)
      const date = formataData(movie.release_date)
       console.log(certification)
useEffect(detailsMovie, [params.id]);
    return (
        <BannerSection>
          <MovieCardContainer>
          <PosterImg
            alt={movie.original_title}
            src={BASE_URL_IMAGE + movie.poster_path}
          />
         </MovieCardContainer>   
          <MovieCardContent >
              <h1>
                 {movie.original_title} ({movie.release_date})
              </h1>
            <FirtsDetails>
            {date}

                {genres}

            </FirtsDetails>
                
          </MovieCardContent> 
        </BannerSection>


    )
            }

export default DetailsPage;





