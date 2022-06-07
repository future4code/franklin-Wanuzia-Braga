import React from "react";
import styled from 'styled-components';
import PerguntaAberta from "./perguntas/PerguntasAbertas";

const SectionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 50px;
`
const SectionTitle = styled.h2`
font-size:30px;
`

function Etapa2() {

    return (
        <SectionContainer>
         <SectionTitle> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </SectionTitle>
         <PerguntaAberta pergunta={'5. Qual curso?'} />
         <PerguntaAberta pergunta={'6. Qual a unidade de ensino'}/>
        </SectionContainer>
     );
  }
  
  export default Etapa2;
  