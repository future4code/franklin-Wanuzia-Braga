import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

const App = () => {
  const [playlists, setPlaylists] = useState([])
  const [inputPlaylist, setInputPlaylist] = useState('')

    const pegaPlaylist = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
        headers: {
          Authorization: 'wanuzia-braga-franklin'
        }
      }).then((response) => {
        console.log(response.data.result.list)
        setPlaylists(response.data.result.list)
      }).catch((error) => {
        console.log(error.code)
      })}
const body = {
  name: inputPlaylist
}
      const criaPlaylist = () =>{
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
          headers: {
            Authorization: 'wanuzia-braga-franklin'  
          }
        }).then((response) =>{
          console.log(response)
          pegaPlaylist()
        }).catch((error) =>{console.log(error)})
      }
      const handleInputNome = (e) =>{
        setInputPlaylist(e.target.value)
      }

useEffect(pegaPlaylist, []);

  return (
    <div className="App">
      <input value={inputPlaylist} onChange={handleInputNome}></input>
      <button onClick={criaPlaylist}>Criar Playlist</button>
       {playlists.map((playlist) => {
         return (
           <p key={playlist.id}>{playlist.name}</p>
         )
       })}
       
    </div>
  );
}

export default App;
