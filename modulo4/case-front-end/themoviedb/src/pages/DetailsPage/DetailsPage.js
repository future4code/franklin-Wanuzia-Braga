import React, { useState, useEffect } from "react";
import {
    BannerSection, FirtsDetails, Character, Name, ShowCase,
    ProfileImage, Container, Trailer, PosterItem, LittleDetails, GenresMovie, DetailParagraph, SinopseDetail
} from './styled'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { MovieCardContainer, MovieCardContent, PosterImg, ShowcaseItem, Title, Section, Jobs } from './styled'
import { API_KEY, BASE_URL, BASE_URL_IMAGE, URL_LANGUAGE, URL_YOUTUBE } from "../../urls";
import { formataData, getYear } from "../../utils/formatDate";
import useDetailsData from "../../hooks/useDetailsData";
import CircularProgressWithLabel from "../../components/CircularProgress/CircularProgress";
import useRequestData from "../../hooks/useRequestData";
import { goToMovieDetails } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/pt-br';
import GetByGenre from "../../services/moviesByGenre";
import NotAddedIcon from "@mui/icons-material/NoteAdd"

const DetailsPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [movie, setMovie] = useState({})
    // const api_key = process.env.REACT_APP_API_KEY
    const detailsMovie = () => {
        axios.get(`${BASE_URL}${params.id}?${API_KEY}${URL_LANGUAGE}`,
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

            <p key={genre.id}> {genre.name} </p >

        )
    })

    const date = formataData(movie.release_date)
    const year = getYear(movie.release_date)
    const persons = useDetailsData([], `${BASE_URL}${params.id}/credits?${API_KEY}`)
    const cast = persons.cast
    const images = cast && cast.filter(p => p.profile_path !== null)
    const personDetails = images && images.map((p) => {
        return (
            <ShowcaseItem key={p.id}>
                <ProfileImage src={BASE_URL_IMAGE + p.profile_path} alt={p.name} />
                <Name>{p.name}</Name>
                <p>{p.character}</p>
            </ShowcaseItem>
        )
    })
    function returnCast(cast) {
        return cast.slice(0, 5)
    }
    const casting = cast && cast.filter(p => p.job !== null)
    const validCasting = casting && casting.map((p) => {

        return (
            <Character key={p.id}>
                <Name>{p.name}</Name>
                {p.character ? <p>Character</p> : <p>{p.job}</p>}
            </Character>
        )
    })
    const getVideos = useRequestData([], `${BASE_URL}${params.id}/videos?${API_KEY}`)
    const validVideos = getVideos.filter(v => v.name === "Official Trailer")

    const trailers = validVideos.map((trailer) => {
        const valid = URL_YOUTUBE + trailer.key
        return (
            <Trailer
                type="text/html"
                key={trailer.id}
                src={valid}
                alt={trailer.name}
                title={trailer.name}
            />
        )
    })
    const certification = useRequestData([], `${BASE_URL}${params.id}/release_dates?${API_KEY}`)
    // const validAgeBR = certification && certification.filter(p => p.iso_3166_1 = "BR")
    // const ageBR = validAgeBR & validAgeBR.map((a) => {
    //     return a.release_date
    // })
    // console.log(ageBR)
    // const ageBR = validAgeBR && validAgeBR.map((a) => {
    //     const i = a && a.release_date
    //     console.log(i)
    //     const finallyage = i && i.map((c) => {
    //         return  c.certification
    //     })
    //     return  finallyage
    // })
       const allAges = certification && certification.map((country) => {
           return country && country.release_date

       })
    //    const fodaSe = allAges && allAges.map((a) => {
    //        return a.certification
    //    })
       console.log(allAges)
    const onClickCard = (id) => {
        goToMovieDetails(navigate, id)
    }
    const recommendations = useRequestData([], `${BASE_URL}${params.id}/similar?${API_KEY}${URL_LANGUAGE}&page=1`)
    const validShowCase = recommendations.filter(v => v.poster_path !== null)
    const showCase = validShowCase.map((similar) => {
        const date = moment(similar.release_date).format("D MMM YYYY").toUpperCase()

        return (

            <ShowcaseItem key={similar.id}>

                {similar.poster_path ?
                    <PosterItem src={BASE_URL_IMAGE + similar.poster_path}
                        alt={similar.title}
                        onClick={() => onClickCard(similar.id)}
                    /> :
                    <PosterItem
                        src={NotAddedIcon}
                        alt={similar.title}
                        onClick={() => onClickCard(similar.id)}
                    />

                }
                <Name>{similar.title}</Name>
                <p>{date}</p>

            </ShowcaseItem>
        )

    })
    GetByGenre()
    useEffect(detailsMovie, [params.id]);
    return (
        <Container>
            <BannerSection>
                <MovieCardContainer>
                    <PosterImg
                        alt={movie.original_title}
                        src={BASE_URL_IMAGE + movie.poster_path}
                    />
                </MovieCardContainer>
                <MovieCardContent >
                    <Title>
                        {movie.original_title} ({year})
                    </Title>
                    <LittleDetails>
                        <li>{date}</li>
                        <GenresMovie>
                            <li></li>{genres}
                        </GenresMovie>
                        <li>{movie.runtime}min</li>
                    </LittleDetails>
                    <FirtsDetails>
                        <CircularProgressWithLabel
                            value={movie && movie.vote_average * 10}
                        />
                        <DetailParagraph>Avaliação dos usuários</DetailParagraph>
                    </FirtsDetails>
                    <h2>Sinopse</h2>
                    {movie.overview ? <SinopseDetail>{movie.overview}</SinopseDetail> :
                        <SinopseDetail>Sinopse indisponível</SinopseDetail>}
                    <Jobs>
                        {validCasting && returnCast(validCasting)}
                        {/* {validCasting} */}
                    </Jobs>

                </MovieCardContent>
            </BannerSection>
            <Section>
                <Typography
                    marginTop={15}
                    marginLeft={5}
                    fontWeight={700}
                    fontSize={28}
                    align={"left"}
                >
                    Elenco original
                </Typography>
                <ShowCase>
                    {personDetails}
                </ShowCase>
                <div>
                    {validVideos.length > 0 ?
                        <Typography
                            marginTop={5}
                            marginLeft={5}
                            fontWeight={700}
                            fontSize={28}
                        >
                            Trailer
                        </Typography> : <Typography
                            marginTop={5}
                            marginLeft={5}
                            fontWeight={700}
                            fontSize={28}
                        >Trailer Oficial não localizado </Typography>}
                    {trailers}
                </div>
                <div>
                    <Typography
                        marginTop={5}
                        marginLeft={5}
                        fontWeight={700}
                        fontSize={28}
                    >
                        Recomendações
                    </Typography>
                    <ShowCase>
                        {showCase}
                    </ShowCase>
                </div>
            </Section>
        </Container>
    )
}

export default DetailsPage;





