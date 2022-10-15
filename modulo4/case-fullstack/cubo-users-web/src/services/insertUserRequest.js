import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const insertUserParticipation = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}insert`, body)
      .then((res) => {
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        alert("Insira dados válidos")
        setIsLoading(false)
      })
  }