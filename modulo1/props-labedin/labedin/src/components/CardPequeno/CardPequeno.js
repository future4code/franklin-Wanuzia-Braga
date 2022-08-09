import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 15px 30px;
  margin: 10px auto;`

const SmallCardImage = styled.img`
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;`
  
const SmallCardh4 = styled.h4`
  margin-bottom: 15px;`

const SmallCardText = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;`

function CardPequeno(props) {
    return (
        <SmallCardContainer> 
            <SmallCardImage src={ props.imagem } alt=""/>
            <SmallCardText>
                <SmallCardh4>{ props.campo }</SmallCardh4>
                <p>{ props.endereço }</p>
            </SmallCardText>
        </SmallCardContainer>
    )
}

export default CardPequeno;