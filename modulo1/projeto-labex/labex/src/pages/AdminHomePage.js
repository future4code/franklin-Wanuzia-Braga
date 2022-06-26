import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "../components/BackButton";
import { goToCreatTrip } from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";

const ContainerPainel = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const TripsContainer= styled.div`
display: flex;
flex-direction: column;
`

const Trip = styled.div`
display: flex;
`

export const AdminHomePage = () => {
    const navigate = useNavigate()
    const [trips, error, isLoading] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')
    
    const goToTripDetails = (id) => {
        navigate(`/admin/trips/${id}`)
    }
      return (

        <ContainerPainel>

            <div>
                <h2>Painel Administrativo</h2>
                <BackButton />
                <button onClick={() => goToCreatTrip(navigate)}>Criar Nova Viagem</button>
                <button>LogOut</button>

            </div>
            <TripsContainer>
                {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
                    return (
                        
                        <Trip>
                         
                            <button onClick={() => goToTripDetails(trip.id)}>{trip.name} </button>
                            <button>Deletar Viagem</button>
                        </Trip>
                        
                    )})}
            </TripsContainer>
        </ContainerPainel>
    )
}