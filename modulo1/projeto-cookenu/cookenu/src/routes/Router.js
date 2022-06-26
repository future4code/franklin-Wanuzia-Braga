import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import AddRecipePage from '../pages/AddRecipesPage/AddRecipesPage';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage'


const Router =() => {

    return(
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<SignUpPage/>} />
            <Route path='/' element={<RecipesListPage/>}/>
            <Route path='/detalhe/:id' element={<RecipeDetailPage/>}/>
            <Route path='/adicionar-receita'element={<AddRecipePage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router