import React, { useState } from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const AppContainer = styled.div`
  text-align: center;
`
const ButtonNext = styled.button`
font-size: 25px;
color: black;
border-radius: 5px;
border: black 3px solid;
background-color: orange;
`

function App() {
  const [etapa, setEtapa] = useState(1)

  const handleSetEtapa = () => {
    setEtapa(etapa + 1)
  }
  const renderEtapa = () => {
    switch (etapa) {
      case 1:
            return <Etapa1 />
            break;
      case 2:
            return <Etapa2/>              
         break;
      case 3:
         return <Etapa3/>              
      case 4:
        return <Final/>
        break;
        default:
          break;
           
      } }
     
  return (
    <AppContainer>
     {renderEtapa()}
     {etapa === 4 ? '' : 
     <ButtonNext onClick={handleSetEtapa}>Próxima etapa</ButtonNext>}
    </AppContainer>
  );
}

export default App;
