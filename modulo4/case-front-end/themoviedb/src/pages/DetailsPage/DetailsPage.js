import React, { useState, useEffect } from "react";
import { BannerSection, FirtsDetails, Character, Name, Cast, ProfileImage } from './styled'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { MovieCardContainer, MovieCardContent, PosterImg, CharacterDetails } from './styled'
import { BASE_URL, BASE_URL_IMAGE, URL_YOUTUBE } from "../../constants/urls";
import { formataData, getYear } from "../../utils/formatDate";
import useDetailsData from "../../hooks/useDetailsData";
import CircularProgressWithLabel from "../../components/CircularProgress/CircularProgress";
import useRequestData from "../../hooks/useRequestData";
import { CardMedia } from "@mui/material";
import MovieCard from "../../components/MovieCard/MovieCard";

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
                setMovie(response.data)
            }).catch((err) => {
                alert(err)
                console.log(err)
            })
    }
    const genre = movie.genres
    const genres = genre && genre.map((genre) => {
        return (
            <Typography key={genre.id}> {genre.name} </Typography >
        )
    })
    const date = formataData(movie.release_date)
    const year = getYear(movie.release_date)
    const persons = useDetailsData([], `${BASE_URL}${params.id}/credits?api_key=c443e2649c9a98f6605f9a352ebdf2de`)
    const cast = persons.cast
    const images = cast && cast.filter(p => p.profile_path !== null)
    const personDetails = images && images.map((p) => {
          return (
                <CharacterDetails key={p.id}>
                   <ProfileImage src={BASE_URL_IMAGE + p.profile_path} alt={p.name}/>
                    <Name>{p.name}</Name>
                  {p.character !== null ? <p>{p.character}</p> : <p>{p.job}</p>}
                </CharacterDetails>
            )
        })
    const casting = cast && cast.filter(p => p.character !== null)
    const validCasting = casting && casting.map((p) => {
        return (
            <Character key={p.id}>
             <Name>{p.name}</Name>
             <p>{p.character}</p>
         </Character>
        )
    })
    // const getVideos = useRequestData([],`${BASE_URL}${params.id}/videos?api_key=c443e2649c9a98f6605f9a352ebdf2de`)
    // const validVideos = getVideos.filter(v => v.type === "Trailer" || v.name === "Official Trailer")
    //     const trailers = validVideos.map((trailer) => {
    //     const valid = URL_YOUTUBE + trailer.key
    //     console.log(valid)
    //     return (
    //         <CardMedia
    //         // key={trailer.id}
    //         component="video"
    //         src={valid}
    //       />
    //     )
    // })
    // console.log(trailers)
    //    const certification = useRequestData([], `${BASE_URL}${params.id}/release_dates?api_key=c443e2649c9a98f6605f9a352ebdf2de`)
    const recommendations = useRequestData([],`${BASE_URL}${params.id}/similar?api_key=c443e2649c9a98f6605f9a352ebdf2de`)
    const showCase = recommendations.map((similar) => {
        const date = formataData(similar.release_date)
                   return(
                <MovieCard
                key={similar.id}
                title={similar.title}
                image={BASE_URL_IMAGE + similar.poster_path}
                release_date={date}
                //  onClick={() => onClickCard(movie.id)}
                />
            )

    })
    useEffect(detailsMovie, [params.id]);
    return (
        <div>
            <BannerSection>
                <MovieCardContainer>
                    <PosterImg
                        alt={movie.original_title}
                        src={BASE_URL_IMAGE + movie.poster_path}
                    />
                </MovieCardContainer>
                <MovieCardContent >
                    <h1>
                        {movie.original_title} ({year})
                    </h1>
                    <FirtsDetails>
                        {date} . {genres} . {movie.runtime} min
                    </FirtsDetails>
                    <CircularProgressWithLabel
                        value={movie && movie.vote_average * 10}
                    />
                    <Typography>Avaliação dos usuários</Typography>
                    <h2>Sinopse</h2>
                    {movie.overview}
                    <FirtsDetails>
                        {validCasting}
                    </FirtsDetails>

                </MovieCardContent>
            </BannerSection> 
            <Typography 
            marginTop={15}
            fontWeight={700}
            fontSize={28}
            >
                Elenco original
            </Typography>
            <Cast>
                {personDetails}
            </Cast>
            <div>
            <Typography 
            marginTop={5}
            fontWeight={700}
            fontSize={28}
            >
                Trailer
            </Typography>
            {/* {trailers} */}

            </div>
            <div>
            <Typography 
            marginTop={5}
            fontWeight={700}
            fontSize={28}
            >
                Recomendações
            </Typography>
            {showCase}

            </div>
        </div>



    )
}

export default DetailsPage;





