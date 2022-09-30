import { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY } from "../constants/urls";

// const api_key = 'c443e2649c9a98f6605f9a352ebdf2de'

const useGenres = () => {
    const [genres, setGenres] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
            headers: {
                Authorization: process.env.REACT_APP_API_AUTHORIZATION
            }
            ,
            params: {
                api_key: API_KEY,
                language: 'en-US'
            }
        })
        .then((res) => {
            console.log(genres)
            setGenres(res.data.genres)
    })
    .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro')
    })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return(genres)
}
export default useGenres