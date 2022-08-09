import React, { useState } from 'react';
import styled from 'styled-components';

const SeçãoChat = styled.div`
overflow: scroll;
height: 90vh;
::-webkit-scrollbar {
  display: none;
  }
  width: 100%;
`;
const MessagesChatArea = styled.div`
padding: 30px;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4ZrnIHfccbKKDG0z199z6IB9qYuMXfmsRQ&usqp=CAU');
min-height: 80vh;
`;

const MessageElement = styled.p`
width: fit-content;
padding: 15px;
border-radius: 8px;
margin: 10px;
min-width: 60px;
padding-bottom: 26px;
position: relative;
text-align: right;
letter-spacing: 0.1em;
font-size: 20px;
`;

const InputDiv = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin: 2px;
position: sticky;

`;
const NomeRemetenteInput = styled.input`
width: 20%;
border-radius:10px;
padding: 2px;
font-size: 1.5em;
background: linear-gradient(21deg, #10abff, #1beabd);
border-radius: 9999em;
`;
const MensagemInput = styled.input`
width: 50%;
border-radius:10px;
padding: 2px;
font-size: 1.5em;
background: linear-gradient(21deg, #10abff, #1beabd);
border-radius: 9999em;
`;
const ButtonEnviar = styled.button`
width: 18%;
border-radius:10px;
padding: 3px;
font-size: 1.5em;
background: linear-gradient(21deg, #10abff, #1beabd);
border-radius: 9999em;
`;
const Sender = styled(MessageElement)`
margin-left: auto;
background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
background-color: whitesmoke;
text-align: left;
`;

export default function InputArea() {
  const [inputName, setInputName] = useState('');
  const [inputMensagem, setInputMensagem] = useState('');
  const [novaMensagemUsuario, setNovaMensagemUsuario] = useState([]);

  const onChangeInputName = (event) => {
    setInputName(event.target.value)
  }
  const onChangeInputMensagem = (event) => {
    setInputMensagem(event.target.value)
  }
  const adicionaMensagem = () => {
    const novaMensagem = { nome: inputName, mensagem: inputMensagem };
    const novasMensagens = [...novaMensagemUsuario, novaMensagem]
    setNovaMensagemUsuario(novasMensagens);
    setInputName('');
    setInputMensagem('');
  };
  const listaMensagens = novaMensagemUsuario.map((dados) => {
    if(dados.nome === "eu"){
    return (
      <Sender key={novaMensagemUsuario}>{dados.mensagem}</Sender>
    )}else{
      return (
        <Receiver key={novaMensagemUsuario}>{dados.nome}:
      {dados.mensagem}</Receiver> 
      )
    };
  });
  return (
    <SeçãoChat>
      <MessagesChatArea>
        {listaMensagens}
      </MessagesChatArea>
      <InputDiv>
        <NomeRemetenteInput
          placeholder="Usuário"
          type="text"
          value={inputName}
          onChange={onChangeInputName}
        />
        <MensagemInput
          value={inputMensagem}
          onChange={onChangeInputMensagem}
          placeholder="Mensagem"
          type="text"
        />
        <ButtonEnviar onClick={adicionaMensagem}>Enviar</ButtonEnviar>
      </InputDiv>
    </SeçãoChat>

  )
};