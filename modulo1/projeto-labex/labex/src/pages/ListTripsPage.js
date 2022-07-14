import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToForm, goToLastPage } from "../routes/coordinator";
import Header from '../components/Header'
import { useRequestData } from "../hooks/useRequestData";
import { TripsCard } from "../components/TripsCard";

const ListTripsContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #f1b891;
min-height: 100vh;

`
const Inscrever = styled.button`
align-self: center;
width: 60%;
margin: 1vh;
border-radius: 2vh;
font-size: 4vh;
color: #f98882;
border: 5px solid #f98882;
&:hover{        
    background-color: #f98882;
    color: #ffffff;
    cursor: pointer;
}
`
const CardArea = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`
const Destinos = styled.h2`
color: orange   ;
font-size: 6vh;
background-color: #231e3e;
width: 70%;
border-radius: 5vh;
align-self: center;
`
const P = styled.p`
color: blue;
font-weight: bold;
font-size: 20px;
`
const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, error, isLoading] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/trips')
    return (
        <ListTripsContainer>
            <Header  onClick={() => goToLastPage(navigate)} name='Voltar'/>
                <Inscrever onClick={() => goToForm(navigate)}>Inscrever-se para viajar</Inscrever>
            <Div>
                <Destinos>Destinos disponíveis</Destinos>
                <P>As viagens mais marcantes e utopicas são realizadas aqui. Conheça os melhores destinos  interplanetários disponíveis no momento:</P>
            </Div>
            <CardArea>

                {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
                    return (
                        <TripsCard
                            name={trip.name}
                            description={trip.description}
                            planet={trip.planet}
                            duration={trip.durationInDays}
                            date={trip.date}
                        />
                    )
                })}
            </CardArea>
        </ListTripsContainer>
    )
}