import React from 'react';
import styled from 'styled-components';
import NomeRemetenteInput from './NomeRemetenteInput';
import MensagemInput from './MensagemInput'
import EnviarButton from './EnviarButton';

const InputDiv= styled.div`
display: flex;
flex-direction: row;
`;

function InputArea() {
  return (
      <InputDiv>
        <NomeRemetenteInput />
        <MensagemInput />
        <EnviarButton />
      </InputDiv>
  );
}

export default InputArea;
