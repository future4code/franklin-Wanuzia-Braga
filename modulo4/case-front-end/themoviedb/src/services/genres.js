import { useState, useEffect } from "react";
import axios from 'axios';

const useGenres = () => {
    const [genres, setGenres] = useState()
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c443e2649c9a98f6605f9a352ebdf2de&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1 - 100&with_genres=Action%20Horror%20Western&with_watch_monetization_types=flatrate', {
            headers: {
                Authorization: process.env.REACT_APP_API_AUTHORIZATION
            }
            // ,
            // params: {
            //     api_key: process.env.REACT_APP_API_KEY
            // }
        })
        .then((res) => {
            console.log(genres)
            setGenres(res.data)
    })
    .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro')
    })
}, [genres])
    return(genres)
}
export default useGenres