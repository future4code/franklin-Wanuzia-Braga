import React from "react"

const Planets = (props) => {
    const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']
        const listaPlanetas = planetas.map((planeta) => {
            return <option value={props.value} onChange={props.onChange}>{planeta}</option>
        })
       return(
        <select >Planeta:
        <option defaultValue={'Escolha um Planeta'} 
        name={props.name} 
        value={props.value} 
        onChange={props.onChange}
        required
        >Escolha um planeta</option>
        {listaPlanetas}
        </select>
       )
}
export default Planets