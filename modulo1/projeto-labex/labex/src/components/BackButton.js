import React from "react";
import styled from "styled-components";


const BackButtonStyled = styled.button`
width: 12vh;
padding: 2px;
border-radius: 3vh;
font-size: 3vh;
font-weight: bold;
color: #f98882;
border: 5px solid #f98882;
align-self: flex-start;
margin: 1vh;
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