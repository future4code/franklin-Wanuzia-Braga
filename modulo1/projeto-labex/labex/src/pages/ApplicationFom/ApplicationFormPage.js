import React from "react";
import Header from "../../components/Header";
import { goToLastPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useForm from '../../hooks/useForm'
import { useRequestData } from "../../hooks/useRequestData";
import { submitCandidate } from "../../services/user";
import { FormContainer, Form, Label, FormCard, FormTitle, Input, ApplyButton, Select} from "./style";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [trips] = useRequestData(`${BASE_URL}trips`)
    const { form, onChange, clear } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
        trip: ''

    })
    const criaCandidato = (e, id) => {
        e.preventDefault()
        submitCandidate(form, clear, id ) 
    }
    const tripsOptions = trips && trips.length > 0 && trips.map((trip) => {
        return (
            <option name='id'
                value={trip.id}
                key={trip.id}>{trip.name} - {trip.planet}</option>
        )
    })
    console.log(form.trip)
    return (
        <FormContainer>
            <Header onClick={() => goToLastPage(navigate)} name='Voltar'/>
            <FormCard>
            <FormTitle>Formulário de inscrição</FormTitle>
            <Form onSubmit={criaCandidato}>
                <Label> Nome:
                    <Input name={'name'} value={form.name} onChange={onChange} required pattern={'^.{3,}'} title={'O nome deve ter no mínimo 3 letras'} />
                </Label>
                <Label>Idade:
                    <Input name={'age'} value={form.age} onChange={onChange} type={'number'} min={18} title={'A idade mínima é 18 anos'} />
                </Label>
                <Label>Texto de candidatura:
                    <Input name={'applicationText'} value={form.applicationText} onChange={onChange} required pattern={'^.{30,}'} title={'Insira no mínimo 30 caracteres.'} />
                </Label>
                <Label>Profissão:
                    <Input name={'profession'} value={form.profession} onChange={onChange} required pattern={'^.{10,}'} title={'Insira no mínimo 10 caracteres.'} />
                </Label>
                <Label>Escolha um país:
                <Input name={'country'} value={form.country} onChange={onChange}></Input>
                {/* <select name='country' id="paises" onChange={onChange} >
                    <option>País</option>
                    <option name={'country'} value={form.country}></option>
                    </select> */}
                </Label>
                <Label> Escolha uma viagem
                    <Select name='trip' onChange={onChange} required value={form.trip}>
                        <option >Escolha uma viagem</option>
                        {tripsOptions}
                    </Select>
                </Label>
                <ApplyButton type='submit' >Enviar</ApplyButton>
            </Form>
            </FormCard>
        </FormContainer>
    )
}