import { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, BASE_URL_GENRES, URL_LANGUAGE } from "../urls";

const useGenres = () => {
    // const api = process.env.REACT_APP_API_KEY
    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL_GENRES}${API_KEY}${URL_LANGUAGE}`, {
            headers: {
                Authorization: process.env.REACT_APP_API_AUTHORIZATION
            }
        })
        .then((res) => {
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