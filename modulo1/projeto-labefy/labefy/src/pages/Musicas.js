import styled from "styled-components";
import { goToPlaylists } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MediaControlCard from "../components/MediaControlCard";

const TracksContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding-top: 100px;
`

const CardAdiconarMúsica = styled.div`
display: flex;
flex-direction: column;
width: 200px;
`
const Tracks = styled.div`
`
const MúsicasdaPlaylist = () => {
    const navigate = useNavigate()
    const [tracks, setTracks] = useState([]);
    const [inputTitle, setInputTitle] = useState('')
    const [inputArtist, setInputArtist] = useState('')
    const [inputUrl, setInputUrl] = useState('')
    const params = useParams()
    const exibeMusicasDaPlaylist = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${params.id}/tracks`,
            {
                headers: {
                    Authorization: 'wanuzia-braga-franklin'
                }
            }).then((response) => {
                setTracks(response.data.result.tracks)
            }).catch((err) => {
                alert(err)
                console.log(err)
            })
    }
    const body = {
        name: inputTitle,
        artist: inputArtist,
        url: inputUrl
    }
    const insereMusica = () => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${params.id}/tracks`, body, {
            headers: {
                Authorization: 'wanuzia-braga-franklin'
            }
        }).then(() => {
            exibeMusicasDaPlaylist()
            alert(`Música adicionada com sucesso`)
            setInputTitle('')
            setInputArtist('')
            setInputUrl('')

        }).catch((e) => {
            alert('Não foi possível inserir a música na playlist')
            console.log(e)
        })
    }
    const handleInputTitle = (e) => {
        setInputTitle(e.target.value)
    }
    const handleInputArtist = (e) => {
        setInputArtist(e.target.value)
    }
    const handleInputUrl = (e) => {
        setInputUrl(e.target.value)
    }
    const deletaMusica = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${params.id}/tracks/${id}`, {
            headers: {
                Authorization: 'wanuzia-braga-franklin'
            }
        }).then((response) => {
            alert('Música deletada com sucesso!')
            exibeMusicasDaPlaylist()

        }).catch((err) => {
            alert(err)
        })
    }

    useEffect(exibeMusicasDaPlaylist, [params.id]);
    const tracksList = tracks.map((track) => {
        return (
            <div>
                <MediaControlCard 
                name={track.name}
                artist={track.artist}
                src={track.url}
                />
                <button onClick={() => { deletaMusica(track.id) }}>deletar música</button>
            </div>
        )
    })


    return (
        <div>
            <button onClick={() => goToPlaylists(navigate)}>Voltar para Playlists</button>
            <TracksContainer>
                <Tracks>
                    <h3>Músicas da Playlist</h3>
                    {/* {tracks && tracks.length > 0 ? {tracksList} : "Adicione múscas a playlist"} */}
                    {tracksList}
                </Tracks>
                <CardAdiconarMúsica>
                    <h2>Adicionar Música</h2>
                    <label>Título</label><input value={inputTitle} onChange={handleInputTitle} />
                    <label>Artista</label><input value={inputArtist} onChange={handleInputArtist} />
                    <label>URL</label><input value={inputUrl} onChange={handleInputUrl} placeholder='Insira a url do arquivo mp3' />
                    <button onClick={insereMusica}>Adicionar música</button>
                </CardAdiconarMúsica>
            </TracksContainer>
        </div>
    )
}
export default MúsicasdaPlaylist;