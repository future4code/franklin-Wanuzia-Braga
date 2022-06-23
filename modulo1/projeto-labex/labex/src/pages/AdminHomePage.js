import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goToTripDetails } from "../routes/coordinator";


export const AdminHomePage = () => {
    const navigate = useNavigate()
    return(
    <div>  <button onClick={() => goToCreatTrip(navigate)}>Criar Nova Viagem</button>
    <div>
        <button >Deletar Viagem</button>
        <button  onClick={() => goToTripDetails(navigate)}>Detalhes da Viagem</button>
    </div>
        
      
    </div>
    )
}