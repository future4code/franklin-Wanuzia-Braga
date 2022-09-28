import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";
import Header from "../components/Header/Header";
import BannerHeader from "../components/BannerFilter/BannerFilter";

const Router =() => {

    return(
        <BrowserRouter>
            < Header /> 
            < BannerHeader />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movie/:id' element={<DetailsPage/>}/>
            {/* <Route path='*' element={<ErrorPage/>}/> */}
            </Routes>
        </BrowserRouter>



    )

}




export default Router