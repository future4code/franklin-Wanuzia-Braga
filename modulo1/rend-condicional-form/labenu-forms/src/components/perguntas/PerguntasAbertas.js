import React from "react";
import styled from 'styled-components';


const Label = styled.p`
font-weight: 500;
font-size: 25px;
`
const InputSpace = styled.input`
width: 250px;
align-self: center;
padding: 10px;
`
function PerguntaAberta(props) {
    return ( 
<>
 <Label>{props.pergunta}</Label><InputSpace />

</>
 )
}

export default PerguntaAberta;
