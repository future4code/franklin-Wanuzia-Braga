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

function Etapa2() {

    return (
        <EtapaContainer>
         <SectionTitle> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </SectionTitle>
        <Label>5. Qual curso?</Label><InputSpace/>
        <Label>6. Qual a unidade de ensino?</Label><InputSpace/>
       
        </EtapaContainer>
     )
  }
  
  export default Etapa2;
  