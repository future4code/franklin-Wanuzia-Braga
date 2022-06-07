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

function Etapa3() {

    return (
        <EtapaContainer>
         <SectionTitle> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </SectionTitle>
        <Label>5. Por que você não terminou um curso de graduação?</Label><InputSpace/>
        <Label>6. Você fez algum curso complementar?</Label><InputSpace/>
       
        </EtapaContainer>
     )
  }
  
  export default Etapa3;
  