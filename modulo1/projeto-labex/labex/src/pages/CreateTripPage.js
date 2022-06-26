import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import axios from "axios";


export const CreateTripPage = () => {
    const navigate = useNavigate()
    const [inputName, setInputName] = useState('');
    const [inputDate, setInputDate] = useState()
    const [inputDescription, setInputDescription] = useState('');
    const [inputDuration, setInputDuration] = useState('');
    const [inputPlanet, setInputPlanet] = useState('');

    const body = {
        name: inputName,
        planet: inputPlanet,
        date: inputDate,
        description: inputDescription,
        duration: inputDuration

    };
    const createTrip = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", body, {
            headers: {
               auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdlSlFyaldwQ2lMSFJDSUhmZlh5IiwiZW1haWwiOiJ3YW51emlhQGdtYWlsLmNvbS5iciIsImlhdCI6MTY1NjE3MTcxMX0.bkgQQljAnyHglAAuDmY0EmPX7Y0hFuYmQy-xy2sKXYk'
               
            }
        }, {
            params: {
                aluno: 'wanuzia-braga-franklin'
            }
        }
        )
            .then((response) => {
                alert(`Viagem ${inputName} cadastrada com sucesso`);
                setInputName('')
                setInputDate('');
                setInputDescription('');
                setInputDuration('')
                setInputPlanet('')
            })
            .catch((erro) => {
                alert('Erro ao cadastrar');
                console.log(erro)
            });
    };
    const onChangeInputName = (event) => {
        setInputName(event.target.value);
    };
    const onChangeInputDate = (event) => {
        setInputDate(event.target.value);
    };
    const onChangeInputDescription = (event) => {
        setInputDescription(event.target.value);
    };
    const onChangeInputDuration = (event) => {
        setInputDuration(event.target.value);
    };
    const onChangeInputPlanet = (event) => {
        setInputPlanet(event.target.value);
        };
        const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno', 'Plutão']
        const listaPlanetas = planetas.map((planeta) => {
            return <option value={inputPlanet.value} onChange={onChangeInputPlanet}>{planeta}</option>
        })
        
    return (
        <div>
           <h1>Crie uma viagem</h1>
            <form>
                <label> Nome:
                    <input value={inputName} onChange={onChangeInputName} />
                </label>
                <select >Planeta:
                <option value disabled selected>Escolha um Planeta</option>
                {listaPlanetas}              
                </select>
                <label>Data
                    <input value={inputDate} onChange={onChangeInputDate} />
                </label>
                <label>Descrição:
                    <input value={inputDescription} onChange={onChangeInputDescription} />
                </label>
                <label>Duração em dias:
                    <input value={inputDuration} onChange={onChangeInputDuration} />
                </label>
            </form>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <button onClick={createTrip}>Criar viagem</button>


        </div>
    )
}