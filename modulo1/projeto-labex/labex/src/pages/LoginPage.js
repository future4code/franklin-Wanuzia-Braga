import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackgroundHome } from '../components/BackgroundHome';
import { LoginForm } from "../components/LoginForm";
import { goToLastPage } from "../routes/coordinator";

const LoginContainer = styled.div`
display: flex;
width: screen;
`

export const LoginPage = () =>{
    const navigate = useNavigate()
 
        return (
            <LoginContainer>
                <BackgroundHome />
                <LoginForm 
                botaoVoltar ={() => goToLastPage(navigate)}
                />
            </LoginContainer>
        )
    }
