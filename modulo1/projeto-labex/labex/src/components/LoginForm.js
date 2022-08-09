import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { goToHome } from "../routes/coordinator";

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
margin: 2%;
`
const Input = styled.input`
width: 90vh;
padding: 1vh;
margin: 1vh;
font-size: 2.5vh;
font-weight: bold;
color: blue;
text-align: center;
`
const LoginButton = styled.button`
width: 50vh;
margin: 1vh;
padding: 2vh;
border-radius: 2vh;
font-size: 4vh;
color: #5062f0;
font-weight: bold;
align-self: center;
&:hover{        
    background-color: #5062f0;
    color: #ffffff;
    cursor: pointer;
}
`
const GoHome = styled.button`
width: 8rem;
height: 3rem;
padding: 2px;
border-radius: 30%;
font-size: 1.5rem;
font-weight: bold;
color: #f98882;
border: 5px solid #f98882;
align-self: flex-start;
margin-top: 2%;
&:hover{        
    background-color: #f98882;
    color: #ffffff;
    cursor: pointer;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
padding: 5vh;
justify-content: flex-start;
text-align: start;
`

export function LoginForm(props) {
    const navigate = useNavigate()
        return(
        
        <LoginDiv>
            <GoHome onClick={() => goToHome(navigate)}> Home</GoHome>
            <WelcomeTitle>
                Bem-vindo de volta!
            </WelcomeTitle>
            <LoginParagraph>
            Acesse sua conta de administrador
            </LoginParagraph>  
            <Form onSubmit={props.onSubmit}>
             <Label>Email</Label><Input 
             type='email'
              placeholder="Digite seu email" 
              value={props.valueEmail} 
              onChange={props.onChangeEmail}
              required
              name={props.nameMail}
              />
               <Label>Senha</Label><Input 
               type='password'
               placeholder="Infome sua senha" 
               value={props.valuePassword} 
               onChange={props.onChangePassword}
               required
               name={props.namePass}
               pattern={'^.{3,}'}
               title={'Sua senha deve ter no mínimo 3 caracteres.'}
               />           
            <LoginButton onClick={props.botaoLogar} type='submit'>
             Entrar
            </LoginButton>    
            </Form>
                  
        </LoginDiv>
    )
}