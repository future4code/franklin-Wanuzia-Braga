import React from "react";
import styled from "styled-components";

const Select =styled.select`
width: 100%;
padding: 1vh;
margin: 1vh;
font-size: 2.5vh;
font-weight: bold;
color: blue;
text-align: center;
`
const Option = styled.option`

`
const Planets = (props) => {
    const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']
        const listaPlanetas = planetas.map((planeta) => {
            return <Option name={props.name} value={props.value} onChange={props.onChange}>{planeta}</Option>
        })
       return(
        <Select value={props.valueSelect} onChange={props.onChangeSelect} name={props.nameSelect} required>Planeta:
        <Option defaultValue={'Escolha um Planeta'} 
        >Escolha um planeta</Option>
        {listaPlanetas}
        </Select>
       )
}
export default Planets