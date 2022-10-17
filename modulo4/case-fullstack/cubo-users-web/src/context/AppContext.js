import { useState, createContext, useContext } from "react";
import { BASE_URL } from '../constants/urls';
import axios from 'axios';
export const AppContext = createContext({})

export default function AppProvider ({children, values}) {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get(`${BASE_URL}participation`)
    .then((res) => {
      const _data = res.data.map((item, index) => {
      item.index = index+1
      return item
      })
      setData(_data)
    })
    .catch((error) => {
        console.log(error)
        setData([])
    }) 
  }

  const fetchData = async (body, success, error) => {
      await axios.post(`${BASE_URL}insert`, body)
      .then((res) => {
        success(res.message)
        getData()
      })
      .catch((err) => {
        alert("Erro ao enviar os dados. Verifique o valor inserido.")
        error(err.message)
      })
  }

  const context = {data, fetchData, getData}
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext);