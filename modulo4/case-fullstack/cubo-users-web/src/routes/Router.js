import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage";

const Router =() => {

    return(
        <BrowserRouter>
                <Header />
                <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='*' element={<p>Rota inexistente</p>}/>
            </Routes>
        </BrowserRouter>



    )

}

export default Router;

