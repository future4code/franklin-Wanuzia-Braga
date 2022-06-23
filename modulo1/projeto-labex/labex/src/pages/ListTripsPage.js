import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToForm } from "../routes/coordinator";
import { BackButton } from "../components/BackButton";
import { useRequestData } from "../hooks/useRequestData";
import { TripsCard } from "../components/TripsCard";

const ListTripsContainer = styled.div`
display: flex;
background-image: url=('https://mir-s3-cdn-cf.behance.net/project_modules/fs/77782a80407805.5f58d09681607.jpg');
`

export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, error, isLoading ]= useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')
      return(
        <ListTripsContainer>
        <header>
            <button>LabeX</button>
            <BackButton />
            <button onClick={() => goToForm(navigate)}>Inscrever-se para viajar</button>
          </header>
        <main>
            <h2>Destinos disponíveis</h2>
            <p>As viagens mais marcantes e utopicas são realizadas aqui. Conheça os melhores destinos  interplanetários disponíveis no momento:</p>
           {isLoading && <p>Carregando</p>}
           {!isLoading && error && <p>Ocorreu um erro</p>}
           {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
               return(
                <TripsCard
                 name={trip.name}
                 description={trip.description}
                 planet={trip.planet}
                 duration={trip.durationInDays}
                 date={trip.date}
                 />
             )
           }) }
        </main>
        </ListTripsContainer>
    )
}