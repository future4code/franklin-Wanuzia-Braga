import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';
import useRequestData from "../../hooks/useRequestData";

export const GlobalState = ({children}) => {
    const [data, setData] = useState([]);
    const rows = useRequestData([], `${BASE_URL}participation`)
   
    const getData = () => {
      setData(rows)
        }
    
    const insertData = (body, clear, setIsLoading) => {
        axios.post(`${BASE_URL}insert`, body)
        .then((res) => {
          console.log(res.message)
          clear()
          setIsLoading(false)
          setData(rows)
        })
        .catch((err) => {
          alert(err.message)
          setIsLoading(false)
        })
    }

    const state = {data}
    const setters = {setData}
    const requests = {getData, insertData}

    return( 
    <>
    <GlobalStateContext.Provider value={{state, setters, requests}}>
    {children}
    </GlobalStateContext.Provider >
    </>
    );
}