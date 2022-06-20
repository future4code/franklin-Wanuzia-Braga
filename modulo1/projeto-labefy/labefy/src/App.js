import { useState } from "react";
import styled from "styled-components";
import Playlists from "./components/ListaPlaylists";
import Músicas from './components/Musicas'

const PlaylistContainer = styled.div`
background-color: blueviolet;
display: flex ;
justify-content: center;
`

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
  //         return <Músicas />
  //       }
  //   }
return(
  <PlaylistContainer>
    <Playlists />
  </PlaylistContainer>
)  
}
export default App;