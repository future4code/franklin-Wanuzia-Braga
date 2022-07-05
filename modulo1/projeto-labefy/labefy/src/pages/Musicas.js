import styled from "styled-components";
import { goToPlaylists } from "../routes/coordinator";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MediaControlCard from "../components/MediaControlCard";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';



const TracksContainer = styled.div`
display: flex;
justify-content: space-evenly;
padding-top: 100px;
`

const CardAdiconarMúsica = styled.div`
display: flex;
flex-direction: column;
width: 400px;
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
                <Button onClick={() => { deletaMusica(track.id) }}
                color="warning" variant="outlined" startIcon={<DeleteIcon />}
                >deletar música</Button>
            </div>
        )
    })


    return (
        <div>
            <Button onClick={() => goToPlaylists(navigate)}
            color={'secondary'} fullWidth variant="outlined" 
            >Voltar para Playlists</Button>
            <TracksContainer>
                <Tracks>
                    <Typography variant={'h4'} color={'blue'}>Músicas da Playlist</Typography>
                    {/* {tracks && tracks.length > 0 ? {tracksList} : "Adicione múscas a playlist"} */}
                    {tracksList}
                </Tracks>
                <CardAdiconarMúsica>
                <Typography align={'center'} variant={'h5'} color={'secondary'}>Adicionar Música</Typography>
                <TextField value={inputTitle} 
                    onChange={handleInputTitle} 
                    placeholder='Nome da música' 
                    label={'Título'}
                    variant={"outlined"}
                    fullWidth
                    margin={'normal'}
                    color={'secondary'}
                    required
                    />
                      <TextField value={inputArtist} 
                    onChange={handleInputArtist} 
                    placeholder='Nome do artista' 
                    label={'Artista'}
                    variant={"outlined"}
                    fullWidth
                    margin={'normal'}
                    color={'secondary'}
                    required
                    />
                     <TextField value={inputUrl} 
                    onChange={handleInputUrl} 
                    placeholder='Link formato mp3' 
                    label={'Link da música'}
                    variant={"outlined"}
                    fullWidth
                    margin={'normal'}
                    color={'secondary'}
                    required
                    />
                   
                    <Button onClick={insereMusica}
                    color={'secondary'} fullWidth variant="outlined" 
                    >Adicionar música</Button>
                </CardAdiconarMúsica>
            </TracksContainer>
        </div>
    )
}
export default MúsicasdaPlaylist;