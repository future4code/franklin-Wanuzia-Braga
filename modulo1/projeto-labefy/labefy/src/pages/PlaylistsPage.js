import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components";
import { goToPlaylistTracks } from "../routes/coordinator";
import {useNavigate} from 'react-router-dom'

const PlaylistHeader = styled.div`
 background-color: blueviolet; 
 display: flex ;
 justify-content: center;
 flex-direction: column;
`
const PlaylistContainer = styled.div`
 display: flex ;
 flex-direction: column;
 align-items: center;
 `

const ListaPlaylists = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`
const PlaylistItem = styled.p`
font-size: 30px;
font-weight: bold;
color: black;
margin-right: 10px;
`
const NewPlaylist = styled.div`

`
const Container = styled.div`
display: flex;
justify-content: space-evenly;
padding-top: 100px;
`
const PlaylistsPage = () => {
    const navigate = useNavigate()
    const [playlists, setPlaylists] = useState([]);
    const [inputPlaylist, setInputPlaylist] = useState('');

    const pegaPlaylist = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'wanuzia-braga-franklin'
            }
        }).then((response) => {
           setPlaylists(response.data.result.list)
        }).catch((error) => {
            console.log(error.code)
        })
    }
    const deletaPlaylist = (id) => {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
                headers: {
                    Authorization: 'wanuzia-braga-franklin'
                }
            }).then((response) => {
                alert('Playlist deletada com sucesso!')
                pegaPlaylist()
      
            }).catch((err) => {
                alert(err.message)
            })
        }
        const body = {
                name: inputPlaylist
            }
         
        const criaPlaylist = () => {
                axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
                    headers: {
                        Authorization: 'wanuzia-braga-franklin'
                    }
                }).then((response) => {
                    console.log(response)
                    pegaPlaylist()
                    setInputPlaylist('')
                    alert(`Playlist ${inputPlaylist} criada com sucesso`)
                }).catch((error) => {
                    alert('Não foi possível criar a playlist. Possíveis causas: o nome da playlist já existe ou não foi preenchido!')
                })
            }
            const handleInputNome = (e) => {
            setInputPlaylist(e.target.value)
        }
             
    const listaDePlaylists = playlists.map((playlist) => {
            return (
                <ListaPlaylists>
                    <PlaylistItem key={playlist.id}>{playlist.name}</PlaylistItem>
                    <button onClick={() => goToPlaylistTracks(navigate, playlist.id)}>Ver playlist</button>
                    <button onClick={() => { deletaPlaylist(playlist.id) }}>Deletar playlist</button>
                </ListaPlaylists>
       )
        })      
        useEffect(pegaPlaylist, []);
        return (
            <div>
                 <PlaylistHeader>
                  <h1>Labefy</h1>  
               </PlaylistHeader> 
               <Container>
               <PlaylistContainer>
               <h2>Playlists</h2>   
               {listaDePlaylists}
            </PlaylistContainer>
            <NewPlaylist>
            <label>Nova Playlist</label><input value={inputPlaylist} onChange={handleInputNome} placeholder='Insira o nome da Playlist'/>
            <button onClick={criaPlaylist}>Criar Playlist</button>
            </NewPlaylist>
            </Container>
          </div>

        )
     }
      
     export default PlaylistsPage;
     