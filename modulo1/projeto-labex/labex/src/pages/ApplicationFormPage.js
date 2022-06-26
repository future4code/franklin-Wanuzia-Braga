import React from "react";
import {BackButton} from "../components/BackButton";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";


const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Formulário = styled.form`
display: flex;
flex-direction: column;
`

export const ApplicationFormPage = () => {
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputText, setInputText] = useState('');
    const [inputLabor, setInputLabor] = useState('');
    const [inputCountry, setInputCountry] = useState('');

    const body = {
            name: inputName,
            age: inputAge,
            applicationText: inputText,
            profession: inputLabor,
            country: inputCountry

    };

    const criaCandidato = () => {
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply", body
)
    .then((response) => {
        alert(`Candidato ${inputName} inscrito com sucesso`, response.message);
        setInputName('')
        setInputAge('');
        setInputLabor('');
        setInputText('')
    })
    .catch((erro) => {
        alert('Erro ao se inscrever', erro.message);
        console.log(erro)
    });
};
const onChangeInputName = (event) => {
    setInputName(event.target.value);
};
const onChangeInputAge = (event) => {
    setInputAge(event.target.value);
};
const onChangeInputText = (event) => {
    setInputText(event.target.value);
};
const onChangeInputLabor = (event) => {
    setInputLabor(event.target.value);
};
const onChangeInputCountry = (event) => {
    setInputCountry(event.target.value);
};
    return (
        <FormContainer>
            <BackButton />
            <h1>Formulário de inscrição</h1>
            <Formulário>
                <label> Nome: 
                    <input value={inputName} onChange={onChangeInputName}/>
                </label>
                <label>Idade:
                    <input value={inputAge} onChange={onChangeInputAge}/>
                </label> 
                <label>Texto de candidatura:
                    <input value={inputText} onChange={onChangeInputText}/>
                </label>
                <label>Profissão:
                    <input value={inputLabor} onChange={onChangeInputLabor}/>
                </label>
                <label>Escolha um país:
                    <input value={inputCountry} onChange={onChangeInputCountry}/>
                </label>
            </Formulário>
            <button onClick={criaCandidato}>Enviar</button>
        </FormContainer>
    )
}