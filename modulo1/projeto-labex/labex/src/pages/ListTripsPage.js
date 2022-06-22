import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToLastPage, goToForm } from "../routes/coordinator";

const ListTripsContainer = styled.div`
display: flex;
background-image: (url='https://mir-s3-cdn-cf.behance.net/project_modules/fs/77782a80407805.5f58d09681607.jpg');
`

export const ListTripsPage = () => {
    const navigate = useNavigate()
    return(
        <ListTripsContainer>
        <header>
            <button>LabeX</button>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <button onClick={() => goToForm(navigate)}>Inscrever-se para viajar</button>
          </header>
        <main>
            <h2>Destinos disponíveis</h2>
            <p>As viagens mais marcantes e utopicas são realizadas aqui. Conheça os melhores destinos  interplanetários disponíveis no momento:</p>
        </main>
        </ListTripsContainer>
    )
}