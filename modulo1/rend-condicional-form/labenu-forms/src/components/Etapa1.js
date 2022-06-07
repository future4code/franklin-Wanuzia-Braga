import React from "react";
import styled from 'styled-components';
import PerguntaAberta from "./perguntas/PerguntasAbertas";
import PerguntaFechada from "./perguntas/PerguntasFechadas";


const SectionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 50px;
`
const SectionTitle = styled.h2`
font-size:30px;
`
function Etapa1() {

    return (
        <SectionContainer>
            <SectionTitle> ETAPA 1 - DADOS GERAIS </SectionTitle>
            <PerguntaAberta pergunta={'1. Qual o seu nome?'} />
            <PerguntaAberta pergunta={'2. Qual sua idade?'} />
            <PerguntaAberta pergunta={'3. Qual seu email?'} />
           <PerguntaFechada
           pergunta={'4. Qual sua escolaridade?'}
    opções={[
            'Ensino Médio Incompleto',
            'Ensino Médio Completo',
            'Ensino Superior Incompleto',
            'Ensino Superior Completo'
           ]}
           />
        </SectionContainer>
    );
}

export default Etapa1;
