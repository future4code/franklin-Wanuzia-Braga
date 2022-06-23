import React from 'react';
import { BackgroundHome } from '../components/BackgroundHome';
import { Welcome } from '../components/Welcome';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { goToListTrips, goToLogin } from '../routes/coordinator';

const HomeContainer = styled.div`
display: flex;
/* width: screen;
height: 100%; */
`

export function HomePage () {
    const navigate = useNavigate()

    return (
        <HomeContainer>
            <BackgroundHome />
            <Welcome 
            botaoLogin={() => goToLogin(navigate)} 
            aoClicar={() => goToListTrips(navigate)}/>
        </HomeContainer>
    )
}