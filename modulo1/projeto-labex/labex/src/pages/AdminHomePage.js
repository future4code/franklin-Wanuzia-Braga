import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "../components/BackButton";
import { goToCreatTrip, goToListTrips, goToLogin, goToTripDetails } from "../routes/coordinator";
import { useRequestData } from "../hooks/useRequestData";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import {BASE_URL} from "../constants/urls"

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
    const [trips, error, isLoading] = useRequestData(`${BASE_URL}trips`)
   
        const deleteTrip = (id) => {
                const token = localStorage.getItem('token')
                const content = 'application/JSON'
                axios.delete(`${BASE_URL}trips/${id}`, {
                    headers: {
                        ContentType: content,
                        auth: token
                    }
                }).then((response) => {
                    alert('Viagem deletada com sucesso!')
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
            }
            const logout = () => {
                localStorage.removeItem('token')
                goToLogin(navigate)
            }
            console.log(error)
               
      return (

        <ContainerPainel>

            <div>
                <h2>Painel Administrativo</h2>
                <BackButton onClick={() => goToListTrips(navigate)} name='Painel'/>
                <button onClick={() => goToCreatTrip(navigate)}>Criar Nova Viagem</button>
                <button onClick={logout}>LogOut</button>

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