import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "../components/BackButton";
import { goToCreatTrip, goToListTrips, goToTripDetails } from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";

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
    useProtectedPage();
    const navigate = useNavigate()
    const params = useParams()
    const [trips, error, isLoading] = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/trips')
   
        const deleteTrip = (id) => {
                const token = localStorage.getItem('token')
                const content = 'application/JSON'
                axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/trips/${params.id}`, {
                    headers: {
                        ContentType: content,
                        auth: token
                    }
                }).then((response) => {
                    alert('Viagem deletada com sucesso!')
                    console.log(response)
                }).catch((err) => {
                    console.log('erro', err)
                })
            }
               
      return (

        <ContainerPainel>

            <div>
                <h2>Painel Administrativo</h2>
                <BackButton onClick={() => goToListTrips(navigate)} name='Painel'/>
                <button onClick={() => goToCreatTrip(navigate)}>Criar Nova Viagem</button>
                <button>LogOut</button>

            </div>
            <TripsContainer>
                {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
                    return (
                        
                        <Trip>
                         
                            <button onClick={() => goToTripDetails(navigate, trip.id)}>{trip.name}</button>
                            <button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</button>
                        </Trip>
                        
                    )})}
            </TripsContainer>
        </ContainerPainel>
    )
}