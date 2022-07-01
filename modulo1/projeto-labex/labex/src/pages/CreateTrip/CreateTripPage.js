import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import Planets from "../../constants/Planets";
import useForm from '../../hooks/useForm';
import Header from '../../components/Header';
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { FormCard, FormContainer, FormTitle, Form, Label, Input, ButtonCreate } from './style'


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

    const createTrip = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}trips`, form, {
            headers: {
                ContentType: 'application/json',
                auth: localStorage.getItem('token')
            }
        }
        ).then((response) => {
            alert(`Viagem ${form.name} cadastrada com sucesso`);
            console.log(response)
            clear()
        }).catch((erro) => {
            alert('Erro ao cadastrar');
            console.log(erro)
        })
    }



    return (
        <FormContainer>
            <Header onClick={() => goToLastPage(navigate)} name='Voltar' />
            <FormCard>
                <FormTitle>Crie uma viagem</FormTitle>
                <Form onSubmit={createTrip}>
                    <Label> Nome:
                        <Input name={'name'} value={form.name} onChange={onChange} required pattern={'^.{5,}'} title={'O nome deve ter no mínimo 5 letras'} />
                    </Label>
                    <Label> Planetas:
                        <Planets
                            nameSelect='planet' onChangeSelect={onChange} valueSelect={form.planet}
                            required
                            onChange={onChange}
                        />
                    </Label>
                    <Label>Data
                        <Input name={'date'} value={form.date} onChange={onChange} required type={'date'} />
                    </Label>
                    <Label>Descrição:
                        <Input name={'description'} value={form.description} onChange={onChange} required pattern={'^.{30,}'} title={'Insira no mínimo 30 caracteres na descrição.'} />
                    </Label>
                    <Label>Duração em dias:
                        <Input name={'durationInDays'} value={form.durationInDays} onChange={onChange} required type={'number'} min={50} title={'A duração deve ser de no mínimo 50 dias'} />
                    </Label>
                    <ButtonCreate type="submit" >Criar</ButtonCreate>
                </Form>
            </FormCard>
        </FormContainer>
    )
}