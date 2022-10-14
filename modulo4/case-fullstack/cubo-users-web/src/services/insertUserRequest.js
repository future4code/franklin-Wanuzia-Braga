import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const insertUserParticipation = (body, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}insert`, body)
      .then((res) => {
        console.log(res.message)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.message)
        setIsLoading(false)
      })
  }