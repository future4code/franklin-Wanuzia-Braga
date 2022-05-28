import React from 'react-dom';
import styled from 'styled-components';

const UsuarioInput = styled.input`
width: 100px;
`;

function NomeRemetenteInput() {
    return (
        <UsuarioInput 
        placeholder="Usuário" 
        type="text"
        />
    )

}

export default NomeRemetenteInput;