import React, {useState} from "react";
import { InputsContainer } from "./styled";
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { Button } from "@material-ui/core";
import { login } from "../../services/user";
import {useNavigate} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'


const LoginForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email:'', password: ''})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        console.log(form)
        e.preventDefault()
        login(form, clear, navigate, setRightButtonText, setIsLoading)
    }
    
    return(
           <InputsContainer>
            <form onSubmit={onSubmitForm}>
             <TextField 
             name={'email'} 
             value={form.email}
             onChange={onChange}
             label={'E-mail'}
             variant={"outlined"}
             fullWidth
             margin={'normal'}
             required
             type={'email'}
             />
            <TextField 
             name={'password'} 
             value={form.password}
             onChange={onChange}
             label={'Senha'}
             variant={"outlined"}
             fullWidth
             margin={'normal'}
             required
             type={'password'}
             />
             <Button
             type={'submit'}
             fullWidth
             variant={'contained'}
             color={'primary'}
             margin={'normal'}
             >
                  {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer login</>}</Button>
            </form>
            </InputsContainer>
             )
}

export default LoginForm