import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";


export const CreateTripPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <h1>Crie uma viagem</h1>
        </div>
    )
}