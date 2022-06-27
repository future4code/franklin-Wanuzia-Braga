import React from 'react';
import styled from 'styled-components'

const PlaylistHeader = styled.div`
 background-color: #f98882; 
 display: flex ;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 font-size: 3vh;
`
const Title = styled.h1`
color: whi;
`
const Header = () => { 
    return(
        <PlaylistHeader>
        <Title>Labefy</Title>  
     </PlaylistHeader> 
    )

}

export default Header