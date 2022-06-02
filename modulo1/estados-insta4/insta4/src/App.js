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
`
const Botao = styled.button`
color: blueviolet;
padding: 5px;
font-weight: bold;
font-size: px;
margin: 5px;
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
      fotoPost: 'https://picsum.photos/200/170'
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
      <label>Usuario</label><input value={inputUsuario} onChange={handleInputUsuario}></input>
      <label>Foto Perfil</label><input value={inputFotoPerfil} onChange={handleInputFotoPerfil}></input>
      <label>Foto Post</label><input value={inputFotoPost} onChange={handleInputFotoPost}></input>

      <Botao onClick={inserirNovoPost}>Publicar</Botao>
      </NovaPublicacao>
      {listaPosts}
    </MainContainer>
  )
}

export default App;
