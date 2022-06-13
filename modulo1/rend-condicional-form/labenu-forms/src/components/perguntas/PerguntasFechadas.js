import React from "react";
import styled from 'styled-components';


const Label = styled.p`
font-weight: 500;
font-size: 25px;
`
const Select = styled.select`
align-self: center;
padding: 10px;
width: 250px; 
display: flex;
flex-direction: column;
`
const Options = styled.option`
font-size: 40px;
padding: 10px;
flex-direction: column;
`

function PerguntaFechada(props) {
    const opções = props.opções
    const listaOpções = opções.map((opção) => {
        return <Options>{opção}</Options>
    })
      return (
        <>
            <Label>{props.pergunta}</Label>
            <Select>
                {listaOpções}
            </Select>
        </>
    )
}
export default PerguntaFechada