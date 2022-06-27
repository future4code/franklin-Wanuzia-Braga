import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaylistsPage from "../pages/PlaylistsPage";
import MúsicasdaPlaylist from "../pages/Musicas";
import ErrorPage from "../pages/ErrorPage"


const Router =() => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlaylistsPage/>}/>
            <Route path='/playlists/musics/:id' element={<MúsicasdaPlaylist/>} />
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router