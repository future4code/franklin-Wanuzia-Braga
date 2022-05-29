import React, { useState } from 'react';
import styled from 'styled-components';
import MensagemInput from './MensagemInput'

const InputDiv = styled.div`
display: flex;
flex-direction: row;
`;
const NomeRemetenteInput = styled.input`
width: 100px;
`;

const ButtonEnviar = styled.button`
color: green;
font-weight: bold;
border-radius: 2xp;
`;

export default function InputArea() {
  const [nameValue, setNameValue] = useState('');
  const onChangeName = (event) => {
    setNameValue(event.target.value)
  }

  const onClickButtonEnviar = () => {
    alert(nameValue)
  }
  return (
    <InputDiv>
      <NomeRemetenteInput
        placeholder="Usuário"
        type="text"
        value={nameValue}
        onChange={onChangeName}
      />
      <MensagemInput />
      <ButtonEnviar onClick={onClickButtonEnviar}>Enviar</ButtonEnviar>
    </InputDiv>
  )
};