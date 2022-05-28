import React from 'react-dom';
import styled from 'styled-components';

const AreaMensagem = styled.input`
width: 500px;

`;

function MensagemInput() {
    return (
        <AreaMensagem 
        placeholder="Mensagem" 
        type="text"
        />
    )
}

export default MensagemInput;