import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components";
import { goToPlaylistTracks } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const PlaylistContainer = styled.div`
 display: flex ;
 flex-direction: column;
 align-items: center;
 border: 10px solid #f98882;
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
display: flex;
flex-direction: column;
align-items: center;
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
                <Button onClick={() => goToPlaylistTracks(navigate, playlist.id)}>Ver playlist</Button>
                <Button onClick={() => { deletaPlaylist(playlist.id) }}
                    variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </ListaPlaylists>
        )
    })
    useEffect(pegaPlaylist, []);
    return (
        <div>
            <Container>
                <PlaylistContainer>
                    <h2>Playlists</h2>
                    {listaDePlaylists}
                </PlaylistContainer>
                <NewPlaylist>
                    <label>Nova Playlist</label><input value={inputPlaylist} onChange={handleInputNome} placeholder='Insira o nome da Playlist' />
                    <Button onClick={criaPlaylist}>Criar Playlist</Button>
                </NewPlaylist>
            </Container>
        </div>

    )
}

export default PlaylistsPage;
