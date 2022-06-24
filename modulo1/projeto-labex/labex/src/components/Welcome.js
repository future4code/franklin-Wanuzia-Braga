import React from "react";
import styled from 'styled-components';

const WelcomeDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #000000;
width: 50%;
text-align: center;
padding: 2rem;
`
const WelcomeTitle = styled.h1`
display: flex;
color: #5062f0;
font-size: 600%;
`
const WelcomeParagraph = styled.p`
color: #e5ddd5;
font-size: 200%;
`
const HomeButton = styled.button`
background-color: black;
color: #ffffff;
font-size: 300%;
font-weight: bold;
width: 30rem;
border-radius: 20%;
margin-top: 4%;
border: 5px solid #5062f0;
&:hover{
    background-color: #5062f0;
    cursor: pointer;
}
`
const LoginButton= styled.button`
width: 8rem;
height: 3rem;
padding: 2px;
border-radius: 30%;
font-size: 1.5rem;
font-weight: bold;
color: #f98882;
border: 5px solid #f98882;
background-color: black;
align-self: flex-end;
margin-top: 2%;
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