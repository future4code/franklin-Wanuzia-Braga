import React, {useState} from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvoAdicionado from '../../img/salva.svg'
import iconeSalvoDesmarcado from '../../img/naosalva.svg'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
const NovaDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

`
//o que o state está fazendo aqui? Quando ele é atualizado e quem chama seu valor atualizado?
function Post(props){
  const [state, setState] = useState({
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  })

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [input, setInput] = useState('')
  const [salvo, setSalvo] = useState(false)
  const [comentário, setComentário] = useState([])
  

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if(!curtido){
    setnumeroCurtidas(numeroCurtidas + 1)}
    else{
      setnumeroCurtidas(numeroCurtidas - 1)
    }
  }
  const onClickSalvo = () => {
    setSalvo(!salvo)
  }
  const handleInput = (event) => {
    setInput(event.target.value)
  }
  const inserirComentário = () => {
    const novoComentário = [input];
       const novaListaDeComentários = [novoComentário,...comentário]
    setComentário(novaListaDeComentários);
   setInput('');
  }

  const listaComentários = comentário.map((comment) =>{
    return(
     <p>{comment}</p>
    );  
  });

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInput('')
    inserirComentário(listaComentários)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario value = {input} texto={listaComentários}onChangeComentario= {handleInput} aoEnviar={aoEnviarComentario}/>
    }
    let iconeMarcacao
    if(salvo) {
      iconeMarcacao = iconeSalvoAdicionado
    }else{
      iconeMarcacao = iconeSalvoDesmarcado
    } 

  return(
      <PostContainer>
        <PostHeader>
          <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />
      <NovaDiv>
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

         <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={onClickSalvo}
        />
        </NovaDiv>
      </PostFooter>
      {componenteComentario}
      
    </PostContainer>
  )
}


export default Post