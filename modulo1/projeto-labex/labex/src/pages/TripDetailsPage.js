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

    useEffect((detailsPage), [params.id]);
    const candidates = tripDetails.candidates && tripDetails.candidates.length > 0 && tripDetails.candidates.map((detail) => {
        return (
            <div>
                <p>Nome: {detail.name}</p>
                <p>Profissão: {detail.profession}</p>
                <p>Idade: {detail.age}</p>
                <p>País: {detail.country}</p>
                <p>Texto de Candidatura: {detail.applicationText}</p>
                <button>aprovar</button>
                <button>reprovar</button>

            </div>
        )
    })
    const approveds = tripDetails.approved && tripDetails.approved.length > 0 && tripDetails.approved.map((detail) => {
        return (
            <div>
                <li>{detail.name}</li>
            </div>
        )
    })
    console.log(tripDetails)
    return (
        <div>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <h1>{tripDetails.name}</h1>
            <p>Nome: {tripDetails.name}</p>
            <p>Descrição: {tripDetails.description}</p>
            <p>Planeta: {tripDetails.planet}</p>
            <p>Duração: {tripDetails.durationInDays}</p>
            <p>Data: {tripDetails.date}</p>
            <h2>Candidatos Pendentes:</h2>
            {tripDetails.candidates > 0 ? {candidates} : 'Nenhum candidato pendente'}
           {candidates}
            <h2>Candidatos aprovados:</h2>
            {tripDetails.approved > 0 ? {approveds} : 'Nenhum candidato aprovado'}
                   {approveds}
                   </div>

    )
}