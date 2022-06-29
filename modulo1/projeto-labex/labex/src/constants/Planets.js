import React from "react"

const Planets = (props) => {
    const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']
        const listaPlanetas = planetas.map((planeta) => {
            return <option name={props.name} value={props.value} onChange={props.onChange}>{planeta}</option>
        })
       return(
        <select value={props.valueSelect} onChange={props.onChangeSelect} name={props.nameSelect} required>Planeta:
        <option defaultValue={'Escolha um Planeta'} 
        >Escolha um planeta</option>
        {listaPlanetas}
        </select>
       )
}
export default Planets