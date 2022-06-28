import React from "react";
import styled from "styled-components";


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


export const BackButton = (props) => {
    return(
        <BackButtonStyled onClick={props.onClick}>{props.name}</BackButtonStyled>
    )
}