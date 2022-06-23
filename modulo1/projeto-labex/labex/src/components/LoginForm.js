import React from "react";
import styled from 'styled-components';
import { BackButton } from "./BackButton";

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #000000;
width: 50%;
padding: 4rem;
`
const WelcomeTitle = styled.h1`
display: flex;
color: #5062f0;
font-size: 5rem;
`
const LoginParagraph = styled.p`
color: #e5ddd5;
font-size: 200%;
`
const Label = styled.label`
color: #f98882;
font-size: 150%;
align-self: center;
margin: 2%;
`
const MailLogin = styled.input`
width: 60%;
height: 4%;
`
const PasswordLogin = styled.input`
width: 60%;
height: 4%;
`

const LoginButton = styled.button`
background-color: black;
color: #5062f0;
font-size: 1.5rem;
font-weight: bold;
width: 7rem;
height: 5rem;
border-radius: 20%;
margin-top: 5%;
border: 5px solid #5062f0;
&:hover{
    background-color: #5062f0;
    color: #ffffff;
    cursor: pointer;
}
`

export function LoginForm(props) {
    
    return(
        
        <LoginDiv>
            <BackButton />
            <WelcomeTitle>
                Bem-vindo de volta!
            </WelcomeTitle>
            <LoginParagraph>
            Acesse sua conta de administrador
            </LoginParagraph>  
              <Label>Email</Label><MailLogin placeholder="Digite seu email"/>
               <Label>Senha</Label><PasswordLogin placeholder="Infome sua senhas"/>           
            <LoginButton onClick={props.botaoLogar}>
             Entrar
            </LoginButton>          
        </LoginDiv>
    )
}