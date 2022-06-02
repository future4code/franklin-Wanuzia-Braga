import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<p>{props.texto}</p>
			<InputComentario
				placeholder={'Comentário'}
				value={props.value}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}

//pegar o valor do comentário e atualizar o estado --feito --falta criar componente que recebe o valor e imprime na tela
//falta definir regra para que só conte como comentário se input.length > 0
//