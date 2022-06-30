import axios from 'axios';
import { BASE_URL } from "../constants/urls";
import { goToRecipeList } from '../routes/coordinator';

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
        axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToRecipeList(navigate)
        setRightButtonText('Logout')
        setIsLoading(false)
    })
    .catch((error) => {
        setIsLoading(false)
        console.log(error)
    })
}

export const signUp = (body, clear, navigate,  setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
.then((res) => {
    // localStorage.setItem('token', res.data.token)
    clear()
    goToRecipeList(navigate)
    setIsLoading(false)
})
.catch((error) => {
    console.log(error)
    setIsLoading(false)
})
}
