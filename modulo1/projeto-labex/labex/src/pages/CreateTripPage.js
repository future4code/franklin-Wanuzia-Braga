import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";
import Planets from "../constants/Planets";
import useForm from '../hooks/useForm';
import {BASE_URL} from "../constants/urls"

export const CreateTripPage = () => {
    useProtectedPage();
    const navigate = useNavigate()
    const { form, onChange, clear } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
        })
    const token = localStorage.getItem('token')
    const createTrip = (e) => {
        e.preventDefaul()
        axios.post(`${BASE_URL}trips`, form, {
            headers: {
                ContentTyp: 'application/json', 
                auth: token
            }
        }
        ).then((response) => {
                alert(`Viagem ${form.name} cadastrada com sucesso`);
               console.log(response.data.trip.id)
               clear()
            }).catch((erro) => {
                alert('Erro ao cadastrar');
                console.log(erro)
            });
    };
   
    return (
        <div>
            <button onClick={() => goToLastPage(navigate)}>Voltar</button>
            <h1>Crie uma viagem</h1>
            <form onSubmit={createTrip}>
                <label> Nome:
                    <input name={'name'} value={form.name} onChange={onChange} required pattern={'^.{5,}'} title={'O nome deve ter no mínimo 5 letras'}/>
                </label>
                <Planets name={'planet'} value={form.planet} onChange={onChange}/>
                <label>Data
                    <input name={'date'} value={form.date} onChange={onChange} required type={'date'}/>
                </label>
                <label>Descrição:
                    <input name={'description'} value={form.description} onChange={onChange} required pattern={'^.{30,}'} title={'Insira no mínimo 30 caracteres na descrição.'}/>
                </label>
                <label>Duração em dias:
                    <input name={'durationInDays'} value={form.durationInDays} onChange={onChange} required type={'number'} min={50} title={'A duração deve ser de no mínimo 50 dias'}/>
                </label>
                    <button >Criar viagem</button>
            </form>
        </div>
    )
}