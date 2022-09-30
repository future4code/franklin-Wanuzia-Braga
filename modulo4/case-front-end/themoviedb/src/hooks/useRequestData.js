import { useState, useEffect } from "react";
import axios from 'axios';

// dotenv.config()


const useRequestData = (initialData, url) => {

    const [data, setData] = useState(initialData)
useEffect(() => {
    axios.get(url, {
        headers: {
            Authorization: process.env.REACT_APP_API_AUTHORIZATION
        },
        params: {
            api_key: process.env.REACT_APP_API_KEY
        }
    })
    .then((res) => {
       setData(res.data.results)
    })
    .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro')
    })
}, [url])
    return(data)
}
export default useRequestData