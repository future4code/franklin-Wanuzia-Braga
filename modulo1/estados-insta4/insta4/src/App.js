import React, {useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovaPublicacao = styled.div`
display: flex;
margin: 10px;
padding: 10px;
justify-content: space-between;
align-items: center;
color: green;
font-weight: bold;
background-color: lightcyan;
`
const Botao = styled.button`
color: black;
padding: 10px;
font-weight: bold;
font-size: 18px;
margin: 5px;
border: 1px solid black;
background-color: orange;
width: 100px;
border-radius: 5px;
`
const CampoInput = styled.input`
width: 200px;
margin: 10px;
`

function App() {
  const [inputUsuario, setInputUsuario] = useState('')
  const [inputFotoPerfil, setInputFotoPerfil] = useState('')
  const [inputFotoPost, setInputFotoPost] = useState('')

  const [state, setState] = useState( 
    [{
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'biel',
      fotoUsuario: 'https://picsum.photos/200/300',
      fotoPost: 'https://picsum.photos/200/190'
    },
    {
      nomeUsuario: 'carlota',
      fotoUsuario: 'https://picsum.photos/100/200',
      fotoPost: 'https://picsum.photos/200/160'
    }]
  );
  const handleInputUsuario = (event) => {
    setInputUsuario(event.target.value)
  }

  const handleInputFotoPerfil = (event) => {
    setInputFotoPerfil(event.target.value)
  }

  const handleInputFotoPost = (event) => {
    setInputFotoPost(event.target.value)
  }

  const inserirNovoPost = () => {
    const novoPost = {nomeUsuario: inputUsuario, fotoUsuario: inputFotoPerfil,  fotoPost: inputFotoPost};
       const novaListaDePosts = [novoPost,...state]
    setState(novaListaDePosts);
    setInputFotoPerfil('');
    setInputFotoPost('');
    setInputUsuario('');
  }

  const listaPosts = state.map((post) =>{
    return(
      <Post
       fotoUsuario={post.fotoUsuario}
       nomeUsuario={post.nomeUsuario}
       fotoPost={post.fotoPost}
      /> 
    );  
  });
  return (
    <MainContainer>
      <NovaPublicacao>
      <label>Usuário: </label><CampoInput value={inputUsuario} onChange={handleInputUsuario}></CampoInput>
      <label>Foto Perfil: </label><CampoInput value={inputFotoPerfil} onChange={handleInputFotoPerfil}></CampoInput>
      <label>Foto do Post: </label><CampoInput value={inputFotoPost} onChange={handleInputFotoPost}></CampoInput>

      <Botao onClick={inserirNovoPost}>Publicar</Botao>
      </NovaPublicacao>
      {listaPosts}
    </MainContainer>
  )
}

export default App;
