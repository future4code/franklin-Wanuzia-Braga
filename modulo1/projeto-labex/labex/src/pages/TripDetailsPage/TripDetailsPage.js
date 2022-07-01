import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header";
import { DetailsContainer, TripCard, TripTitle, Element, CandidatesCard } from "./styled";

export const TripDetailPage = () => {
    useProtectedPage();
    const [state, setState] = useState(true)
    const navigate = useNavigate()
    const [tripDetails, setTripDetails] = useState([])
    const params = useParams()


    const detailsPage = () => {
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}trip/${params.id}
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
    const body = {
        approve: state
    }
    const decideCandidate = (id, candidateId) => {
        axios.put(`${BASE_URL}trips/${id}/candidates/${candidateId}/decide`, body, {
                headers: {
                    ContentType: 'application/json',
                    auth: localStorage.getItem('token')
                }
        }).then((res) => {
            console.log(res)
            detailsPage()
            setState(true)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect((detailsPage), [params.id]);
    const candidates = tripDetails.candidates && tripDetails.candidates.length > 0 && tripDetails.candidates.map((detail) => {
        return (
            <div>
                <p>Nome: {detail.name}</p>
                <p>Profissão: {detail.profession}</p>
                <p>Idade: {detail.age}</p>
                <p>País: {detail.country}</p>
                <p>Texto de Candidatura: {detail.applicationText}</p>
                <button onClick={() => decideCandidate(tripDetails.id, detail.id)}>aprovar</button>
                <button onClick={() => setState(false)}>reprovar</button>

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

    return (
        <DetailsContainer>
            <Header onClick={() => goToLastPage(navigate)} name='Voltar' />
            <TripCard >
                <TripTitle>{tripDetails.name}</TripTitle>
                <Element>Nome: {tripDetails.name}</Element>
                <Element>Descrição: {tripDetails.description}</Element>
                <Element>Planeta: {tripDetails.planet}</Element>
                <Element>Duração: {tripDetails.durationInDays}</Element>
                <Element>Data: {tripDetails.date}</Element>
            </TripCard>
            <CandidatesCard>
                <h2>Candidatos Pendentes:</h2>
                {/* {tripDetails.candidates > 0 ? { candidates } : 'Nenhum candidato pendente'} */}
                {candidates}
            </CandidatesCard>
            <CandidatesCard>
                <h2>Candidatos aprovados:</h2>
                {/* {tripDetails.approved > 0 ? { approveds } : 'Nenhum candidato aprovado'} */}
                {approveds}
            </CandidatesCard>
        </DetailsContainer>

    )
}