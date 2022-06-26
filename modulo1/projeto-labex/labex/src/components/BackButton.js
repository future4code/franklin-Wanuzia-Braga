import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLastPage } from "../routes/coordinator";

const BackButtonStyled = styled.button`
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


export const BackButton = () => {
    const navigate = useNavigate()
    return(
        <BackButtonStyled onClick={() => goToLastPage(navigate)}>Voltar</BackButtonStyled>
    )
}