import React from "react";
import styled from 'styled-components';

const WelcomeDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #000000;
width: 50%;
text-align: center;
padding: 1vh;
`
const WelcomeTitle = styled.h1`
display: flex;
color: #5062f0;
font-size: 10vh;
`
const WelcomeParagraph = styled.p`
color: #e5ddd5;
font-size: 4vh;
`
const HomeButton = styled.button`
background-color: black;
color: #ffffff;
font-size: 6vh;
font-weight: bold;
width: 70vh;
border-radius: 5vh;
margin-top: 2vh;
padding: 2vh;
border: 5px solid #5062f0;
&:hover{
    background-color: #5062f0;
    cursor: pointer;
}
`
const LoginButton= styled.button`
width: 20vh;
padding: 2px;
border-radius: 5vh;
font-size: 1.5rem;
font-weight: bold;
color: #f98882;
border: 5px solid #f98882;
background-color: black;
align-self: flex-end;
margin-top: 1vh;
&:hover{
    background-color: #f98882;
    color: #ffffff;
    cursor: pointer;
}
`

export function Welcome(props) {
    
    return(
        
        <WelcomeDiv>
            <LoginButton onClick={props.botaoLogin}>Login</LoginButton>
            <WelcomeTitle>
                Welcome <br/>to <br/>LabeX
            </WelcomeTitle>
            <WelcomeParagraph>
            Encontre as melhores viagens espaciais!
            </WelcomeParagraph>  
            <HomeButton onClick={props.aoClicar}>
                Comece sua Jornada
            </HomeButton>          
        </WelcomeDiv>
    )
}