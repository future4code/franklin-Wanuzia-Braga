import { useState } from "react";
import styled from "styled-components";

const CardAdiconarMúsica = styled.div`
display: flex;
flex-direction: column;
width: 200px;
`
const MúsicasdaPlaylist = (props) => {


    return(
        <CardAdiconarMúsica>
            <h2>Adicionar Música</h2>
            <label>Título</label><input />
            <label>Artista</label><input />
            <label>URL</label><input />
            <button>Adicionar</button>
            <button onClick={props.aoClicar}>Voltar para a lista</button>
            
        </CardAdiconarMúsica>
    )
}
export default MúsicasdaPlaylist;