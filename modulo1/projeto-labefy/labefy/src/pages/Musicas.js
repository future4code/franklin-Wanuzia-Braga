import styled from "styled-components";
import { goToPlaylists } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

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
    useEffect(exibeMusicasDaPlaylist, [params.id]);
    const tracksList = tracks.map((track) => {
        return (
            <div>
                <p key={track.id}>{track.name} - {track.artist}</p>
                <button>Play</button>
                <button>Pause</button>
                <button>deletar música</button>
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
                <label>Título</label><input />
                <label>Artista</label><input />
                <label>URL</label><input />
                <button>Adicionar música</button>
            </CardAdiconarMúsica>
        </TracksContainer>
        </div>
    )
}
export default MúsicasdaPlaylist;