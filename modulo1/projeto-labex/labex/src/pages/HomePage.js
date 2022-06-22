import React from 'react';
import { BackgroundHome } from '../components/BackgroundHome';
import { Welcome } from '../components/Welcome';
import styled from 'styled-components';

const HomeContainer = styled.div`
display: inline-flex;
width: screen;
`

export function HomePage () {
    return (
        <HomeContainer>
            <BackgroundHome />
            <Welcome />
        </HomeContainer>
    )
}