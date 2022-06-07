import React from "react";
import styled from 'styled-components';


const EtapaContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 50px;
`
const SectionTitle = styled.h2`
font-size:30px;
`
const Label = styled.p`
font-weight: 500;
font-size: 25px;
`
const InputSpace = styled.input`
width: 250px;
align-self: center;
padding: 10px;
`
const Select = styled.select`
align-self: center;
padding: 10px;
width: 250px;
`
const Opções = styled.option`
font-size: 30px;
padding: 10px;

`

function Etapa1() {

    return (
        <EtapaContainer>
            <SectionTitle> ETAPA 1 - DADOS GERAIS </SectionTitle>
            <Label>1. Qual o seu nome?</Label><InputSpace />
            <Label>2. Qual sua idade?</Label><InputSpace />
            <Label>3. Qual seu email?</Label><InputSpace />
            <Label>4. Qual sua escolaridade?</Label>
            <Select>
                <Opções> Ensino Médio Incompleto </Opções>
                <Opções>  Ensino Médio Completo  </Opções>
                <Opções>  Ensino Superior Incompleto  </Opções>
                <Opções>  Ensino Superior Completo </Opções>

            </Select>
        </EtapaContainer>
    )
}

export default Etapa1;
