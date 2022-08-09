import React from 'react';
import styled from 'styled-components'
import { BackButton } from './BackButton';

const LabexHeader = styled.div`
 background-color: #f1b891; 
 display: flex ;
 justify-content: space-between;
 flex-direction: row;
 align-items: center;
 padding: 2vh;

`
const Logo = styled.button` 
color: #5062f0;
width: 100vh;
border: none;
font-size: 5vh;
font-weight: bold;
background-color: #f1b891; 
align-self: flex-end;

`
const Header = (props) => { 
    return(
        <LabexHeader>
            <BackButton onClick={props.onClick} name={props.name}/>
           <Logo>LabeX</Logo>
     </LabexHeader> 
    )

}

export default Header