import React from "react";
import styled from 'styled-components';

const WelcomeDiv = styled.div`
background-color: #000000;
width: 50%;
padding: 30px;
text-align: center;
`
const TítuloWelcome = styled.h1`
color: #5062f0;
font-size: 8rem;
`
const ParagrafoWelcome = styled.p`
color: #e5ddd5;
font-size: 2rem;
`
const HomeButton = styled.button`
background-color: black;
color: #5062f0;
font-size: 3em;
font-weight: bold;
width: 30rem;
height: 10rem;
border-radius: 20%;
margin-top: 4rem;
border: 5px solid #5062f0;
&:hover{
    background-color: #5062f0;
    color: #ffffff;
}
`
const LoginButton= styled.button`
width: 8rem;
height: 3rem;
padding: 2px;
border-radius: 30%;
font-size: 1.5rem;
font-weight: bold;
margin-left: 35rem;
color: #f98882;
border: 5px solid #f98882;
background-color: black;
&:hover{
    background-color: #f98882;
    color: #ffffff;
}
`

export function Welcome() {
    
    return(
        
        <WelcomeDiv>
            <LoginButton>Login</LoginButton>
            <TítuloWelcome>
                Welcome to LabeX
            </TítuloWelcome>
            <ParagrafoWelcome>
            Encontre as melhores viagens espaciais!
            </ParagrafoWelcome>  
            <HomeButton>
                Comece sua Jornada
            </HomeButton>          
        </WelcomeDiv>
    )
}