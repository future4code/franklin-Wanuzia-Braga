import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToForm } from "../routes/coordinator";
import { BackButton } from "../components/BackButton";
import { useRequestData } from "../hooks/useRequestData";
import { TripsCard } from "../components/TripsCard";

const ListTripsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/77782a80407805.5f58d09681607.jpg');
background-attachment: fixed;
text-align: center;
`
const Cabecalho = styled.div`
display: flex;
flex-direction: row;
background-color: black;
width: 100rem;
align-items: center;
justify-content: space-between;
padding-left: 10px;
`
const Logo = styled.button` 
color: #5062f0;
margin: 1%;
width: 300px;
height: 50px;
border: none;
background-color: black;
font-size: 400%;
font-weight: bold;
`
const Inscrever = styled.button`
align-self: center;
color: white;
margin-left: 20px;
width: 50%;
height: 50px;
border: 5px solid #5062f0;
font-size: 200%;
font-weight: bold;
margin-left: 5%;
background-color: black;
&:hover{
    background-color: #5062f0;
    color: #ffffff;
    cursor: pointer;
}
`
const CardArea = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Destinos = styled.h2`
color: orange   ;
font-size: 4rem;
align-self: center;
background-color: #231e3e;
border-radius: 30%;
`
const P = styled.p`
color: white;
font-weight: bold;
font-size: 20px;
`

export const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, error, isLoading] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')
    return (
        <ListTripsContainer>
            <Cabecalho>
                <div>
                    <BackButton />
                </div>
                <Inscrever onClick={() => goToForm(navigate)}>Inscrever-se para viajar</Inscrever>
                <Logo>LabeX</Logo>
            </Cabecalho>
            <div>
                <Destinos>Destinos disponíveis</Destinos>
                <P>As viagens mais marcantes e utopicas são realizadas aqui. Conheça os melhores destinos  interplanetários disponíveis no momento:</P>
            </div>
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