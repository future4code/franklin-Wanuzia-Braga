import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import Planets from "../constants/Planets";
// import DateInput from "../constants/DateInput";

export const CreateTripPage = () => {
    useProtectedPage();
    const navigate = useNavigate()
    const [inputName, setInputName] = useState('');
    const [inputDate, setInputDate] = useState({
        tripDate: new Date()
    })
    const [inputDescription, setInputDescription] = useState('');
    const [inputDuration, setInputDuration] = useState('');
    const [inputPlanet, setInputPlanet] = useState('');

    const body = {
        name: inputName,
        planet: inputPlanet,
        date: inputDate,
        description: inputDescription,
        durationInDays: inputDuration

    };
    const token = localStorage.getItem('token')
    const createTrip = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wanuzia-braga-franklin/trips", body, {
            headers: {
               ContentType: 'application/json; charset=utf-8',
               auth: token
               
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
                console.log(response.data)
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
        setInputDate(event);
        console.log(event)
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
        
        
    return (
        <div>
           <h1>Crie uma viagem</h1>
            <form>
                <label> Nome:
                    <input value={inputName} onChange={onChangeInputName} />
                </label>
                <Planets value={inputPlanet} onChange={onChangeInputPlanet}/>              
                <label>Data
                {/* <DateInput 
                value={inputDate} 
                startdate={inputDate}
               onChange={onChangeInputDate} 
                id="tripDate" 
                name="tripDate" 
                type="date"
                placeholder = 'dd/mm/aaaa'
            />             */}
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