import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackgroundHome } from '../components/BackgroundHome';
import { LoginForm } from "../components/LoginForm";
import { goToAdminTripsList } from "../routes/coordinator";

const LoginContainer = styled.div`
display: flex;
width: screen;
`

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value) 
    }
    const body = {
        email: email,
        password: password
    }
    const onSubmitLogin = () => {
      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/login`, body
        ).then((response) => {
            localStorage.setItem('token', response.data.token)
            goToAdminTripsList(navigate)

        }).catch((error) => {
            alert('Deu erro ao logar!')
            console.log( error)
        })

        
    }
    return (
        <LoginContainer>
            <BackgroundHome />
            <LoginForm
                valueEmail={email}
                onChangeEmail={handleEmailChange}
                valuePassword={password}
                onChangePassword={handlePasswordChange}
                botaoLogar={onSubmitLogin}
            />
        </LoginContainer>
    )
}
