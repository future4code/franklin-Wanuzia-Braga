import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import styled from "styled-components";
import { goToPlaylistTracks } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const PlaylistContainer = styled.div`
 display: flex ;
 flex-direction: column;
 align-items: center;
 border: 10px solid #f98882;
 width: 50vh;
 `
const ListaPlaylists = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding: 10px;
margin: 2vh;
border-bottom: 2px solid violet;
`
const NewPlaylist = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
`
const Container = styled.div`
display: flex;
justify-content: space-evenly;
padding: 10vh;
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
                <Typography key={playlist.id} variant={'h4'}>
                🎵{playlist.name}🎶
                </Typography>
                <Button color={'secondary'} fullWidth variant="outlined" onClick={() => goToPlaylistTracks(navigate, playlist.id)}>Ver playlist</Button>
                <Button color="warning" 
                onClick={() => { deletaPlaylist(playlist.id) }}
                variant="outlined" startIcon={<DeleteIcon />}></Button>
            </ListaPlaylists>
        )
    })
    useEffect(pegaPlaylist, []);
    return (
        <div>
            <Container>
                <PlaylistContainer>
                    <Typography variant="h3">Playlists</Typography><PlaylistPlayIcon/>
                    {listaDePlaylists}
                </PlaylistContainer>
                <NewPlaylist>
                    <Typography align={'center'} variant={'h5'} color={'secondary'}>Nova Playlist</Typography>
                    <TextField value={inputPlaylist} 
                    onChange={handleInputNome} 
                    placeholder='Insira o nome da Playlist' 
                    label={'Nome da playlist'}
                    variant={"outlined"}
                    fullWidth
                    margin={'normal'}
                    color={'secondary'}
                    required
                    />
                    <Button onClick={criaPlaylist}  color={'secondary'} variant={"outlined"} fullWidth>Criar Playlist</Button>
                </NewPlaylist>
            </Container>
        </div>

    )
}

export default PlaylistsPage;
