import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";


export const TripDetailPage = () => {
    useProtectedPage();
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState([])
    const params = useParams()


    const detailsPage = () => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/trip/${params.id}
        `, {
            headers: {
                auth: token
            }
        }).then((response) => {
            setTripDetails(response.data.trip)
        })
            .catch((error) => {
                console.log(error);
            })
    };

    console.log(tripDetails)

    useEffect((detailsPage), [params.id]);

    // const candidates = tripDetails.candidates.map((detail) => {
    //     return (
    //         <div>
    //             <p>{detail.name}</p>
    //         </div>
    //     )
    // })

    return (
        <div>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <h1>Detalhes da Viagem e candidatos</h1>
                <p>{tripDetails.name}</p>
                {/* {candidates} */}
        </div>

    )
}