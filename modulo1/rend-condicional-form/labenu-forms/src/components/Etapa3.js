import React from "react";
import styled from 'styled-components';
import PerguntaFechada from "./perguntas/PerguntasFechadas";
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

function Etapa3() {

    return (
        <SectionContainer>
         <SectionTitle> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </SectionTitle>
         <PerguntaAberta pergunta={'5. Por que você não terminou um curso de graduação?'} />
         <PerguntaAberta pergunta={'6. Você fez algum curso complementar?'}/>
        <PerguntaFechada
        opções={[
               'Nenhum',               
               'Curso técnico',
               'Curso de inglês'
        ]}
        />
       
        </SectionContainer>
     );
  }
  
  export default Etapa3;
  