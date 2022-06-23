import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";


export const TripDetailPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <h1>Detalhes da Viagem e candidatos</h1>

        </>

    )
}