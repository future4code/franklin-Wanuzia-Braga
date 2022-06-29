import React from "react";
import { BackButton } from "../components/BackButton";
import styled from "styled-components";
import axios from "axios";
import { goToLastPage } from "../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import useForm from '../hooks/useForm'


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
    const navigate = useNavigate()
    const params = useParams()

    const{ form, onChange, clear } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
        trip: `${params.id}`

    })
 
    const criaCandidato = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}trips/${params.id}   /apply`, form
        )
            .then((response) => {
                alert(`Candidato ${form.name} inscrito com sucesso`, response.message);
                clear()
            })
            .catch((erro) => {
                alert('Erro ao se inscrever' + erro.message);
                console.log(erro)
            });
    };
    
    return (
        <FormContainer>
            <BackButton onClick={() => goToLastPage(navigate)} name='Voltar' />
            <h1>Formulário de inscrição</h1>
            <Formulário onSubmit={criaCandidato}>
                <label> Nome:
                    <input  name={'name'} value={form.name} onChange={onChange} required pattern={'^.{3,}'} title={'O nome deve ter no mínimo 3 letras'} />
                </label>
                <label>Idade:
                    <input name={'age'} value={form.age} onChange={onChange} type={'number'} min={18} title={'A idade mínima é 18 anos'}/>
                </label>
                <label>Texto de candidatura:
                    <input name={'applicationText'} value={form.applicationText} onChange={onChange} required pattern={'^.{30,}'} title={'Insira no mínimo 30 caracteres.'}/>
                </label>
                <label>Profissão:
                    <input name={'profession'} value={form.profession} onChange={onChange} required pattern={'^.{10,}'} title={'Insira no mínimo 10 caracteres.'}/>
                </label>
                <label>Escolha um país:
                    <input name={'country'} value={form.country} onChange={onChange} />
                </label>
                <label> Escolha uma viagem
                <select>
                <option defaultValue>Escolha uma viagem</option>
                <option name={'trip'}></option>
                </select>
                </label>
                <button >Enviar</button>
            </Formulário>
            
        </FormContainer>
    )
}