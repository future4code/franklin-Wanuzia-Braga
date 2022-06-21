import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MúsicasdaPlaylist from './Musicas';

const ListaPlaylists = styled.div`
/* display: flex;
justify-content: center;
align-items: center;
padding: 10px; */
`
const PlaylistItem = styled.p`
font-size: 30px;
font-weight: bold;
color: aliceblue;
margin-right: 10px;
`
const Playlists = () => {

    const [playlists, setPlaylists] = useState([]);
    const [inputPlaylist, setInputPlaylist] = useState('');
    const [playlistSelecionada, setPlaylistSelecionada] = useState(true)
    const trocaPagina = () => {
        setPlaylistSelecionada(!playlistSelecionada)
    }

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
        }).catch((error) => {
            console.log(error);
            alert('Não foi possível criar a playlist. Verifique se não está usando um nome de playlist já existente.')
        })
    }
    const handleInputNome = (e) => {
        setInputPlaylist(e.target.value)
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
    const exibeMusicasDaPlaylist = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            {
                headers: {
                    Authorization: 'wanuzia-braga-franklin'
                }
            }).then((response) => {
                alert(response.result.tracks)
               }).catch((err) => {
                alert(err.message)
            })
    }

    const listaDePlaylists = playlists.map((playlist) => {
        return (
            <ListaPlaylists>
                <PlaylistItem key={playlist.id}>{playlist.name}</PlaylistItem>
                <button onClick={() => { exibeMusicasDaPlaylist(playlist.id); trocaPagina() }}>Ver playlist</button>
                <button onClick={() => { deletaPlaylist(playlist.id) }}>Deletar playlist</button>
            </ListaPlaylists>

        )
    })

    useEffect(pegaPlaylist, []);

    return (
        <div >
            <input value={inputPlaylist} onChange={handleInputNome}></input>
            <button onClick={criaPlaylist}>Criar Playlist</button>
            {playlistSelecionada === false ? { listaDePlaylists } : < MúsicasdaPlaylist aoClicar={trocaPagina()} />}


        </div>
    )
}

export default Playlists;
