// import { useState } from "react";
import styled from "styled-components";
import Playlists from "./components/ListaPlaylists";
// import MúsicasdaPlaylist from './components/Musicas'

const PlaylistContainer = styled.div`
background-color: blueviolet;
display: flex ;
justify-content: center;
`
// const ButtonChange = styled.button`
// font-size: 25px;
// color: black;
// border-radius: 5px;
// border: black 3px solid;
// background-color: orange;
// `


const App = () => {

  // const [pagina, setPagina] = useState(true)

  // const trocaPagina = () => {
  //   setPagina(!pagina)
  // }
  //  const renderPagina = () => {
  //   // eslint-disable-next-line default-case
  //   switch(pagina) {
  //      case true:
  //       return <Playlists />
  //      case false:
  //         return <MúsicasdaPlaylist />
  //       }
  //   }
  return (
    <PlaylistContainer>
      <Playlists />
      {/* {pagina === true ? < Playlists togglePagina={trocaPagina}/> :
        < MúsicasdaPlaylist togglePagina={trocaPagina}/>} */}
    </PlaylistContainer>
  )
}
export default App;