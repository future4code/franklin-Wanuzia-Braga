import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { goToLastPage } from "../routes/coordinator";


export const TripDetailPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [tripDetails, error, isLoading] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/${params.id}`)

   
    return (
        <>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <h1>Detalhes da Viagem e candidatos</h1>

              {isLoading && <p>Carregando</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && tripDetails && tripDetails.length > 0 && tripDetails.map((trip) => {
                    return (
                        <div>
                            <p>{trip.name}</p>
                        </div>
                    )})}

        </>

    )
}