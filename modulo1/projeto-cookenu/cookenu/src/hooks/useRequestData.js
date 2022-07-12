import { useState, useEffect } from "react";
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
useEffect(() => {
    axios.get(url, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        setData(res.data)
    })
    .catch((err) => {
        console.log(err)
        alert('Ocorreu um erro')
    })
}, [url])
    return(data)
}
export default useRequestData