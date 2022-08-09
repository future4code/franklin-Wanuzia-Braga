import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goToListTrips, goToLogin, goToTripDetails } from "../../routes/coordinator";
import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/urls"
import { ContainerPainel, TripsContainer, TripsContent, Trip, ButtonsAdmin, Título, TripButton, DeleteButton } from './styled'
import { deleteTrip } from "../../services/trip";
import Header from "../../components/Header";

export const AdminHomePage = () => {
    useProtectedPage();
    const navigate = useNavigate()
    const [trips, error, isLoading] = useRequestData(`${BASE_URL}trips`)
    const logout = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }
    return (

        <ContainerPainel>
            <Header onClick={() => goToListTrips(navigate)} name='Painel' />
            <TripsContainer>
                <Título>Painel Administrativo</Título>
                <ButtonsAdmin onClick={logout}>Logout</ButtonsAdmin>
                <ButtonsAdmin onClick={() => goToCreatTrip(navigate)}>Criar Nova Viagem</ButtonsAdmin>          
            </TripsContainer>
            <TripsContent>
                {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && trips && trips.length > 0 && trips.map((trip) => {
                    return (
                        <Trip>
                            <TripButton onClick={() => goToTripDetails(navigate, trip.id)}>{trip.name}</TripButton>
                            <DeleteButton onClick={() => deleteTrip(trip.id)}>Deletar</DeleteButton>
                        </Trip>
                    )
                })}
            </TripsContent>
        </ContainerPainel>
    )
}