import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaylistsPage from "../pages/PlaylistsPage";
import MúsicasdaPlaylist from "../pages/Musicas";
import ErrorPage from "../pages/ErrorPage"
import Header from "../components/Header";


const Router =() => {

    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<PlaylistsPage/>}/>
            <Route path='/playlists/musics/:id' element={<MúsicasdaPlaylist/>} />
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router