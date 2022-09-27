import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import HomePage from "../pages/HomePage/HomePage";

const Router =() => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/movie/:id' element={<DetailsPage/>}/>
            {/* <Route path='*' element={<ErrorPage/>}/> */}
            </Routes>
        </BrowserRouter>



    )

}




export default Router