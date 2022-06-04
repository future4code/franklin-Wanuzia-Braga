import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
const InputBottonContainer = styled.div`
display: flex;
`
export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<div><p>{props.texto}</p></div>
			<InputBottonContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={props.value}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
			</InputBottonContainer>
		</CommentContainer>
	)
}

//pegar o valor do comentário e atualizar o estado --feito --falta criar componente que recebe o valor e imprime na tela
//falta definir regra para que só conte como comentário se input.length > 0
//