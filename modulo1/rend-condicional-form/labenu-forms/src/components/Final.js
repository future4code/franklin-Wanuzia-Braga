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
const ParágrafoFinal = styled.p`
font-weight: 500;
font-size: 25px;
`


function Final() {

    return (
        <EtapaContainer>
         <SectionTitle> O FORMULÁRIO ACABOU</SectionTitle>
        <ParágrafoFinal>Muito obrigado por participar! Entraremos em contato!</ParágrafoFinal>
        </EtapaContainer>
     )
  }
  
  export default Final;
  