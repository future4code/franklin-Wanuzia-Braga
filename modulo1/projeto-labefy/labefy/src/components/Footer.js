import styled from "styled-components"

const Foot = styled.div`
display:flex;
justify-content: center;
padding: 5vh;
background-color: black;
color: white;
align-items: center;
margin-top: 10vh;

`

export const Footer = () => {

    return (
        <Foot>
           Feito com 💜 por Wanuzia Braga @ 2022
        </Foot>
    )
}
