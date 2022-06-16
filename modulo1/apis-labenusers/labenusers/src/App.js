import React , {useState} from 'react';
import './App.css';
import Cadastro  from './components/Cadastro';
import Lista from './components/Lista';

function App() {
  const [pagina, setPagina] = useState(true)
  const trocaPagina = () => {
    setPagina(!pagina)
  }
   const renderPagina = () => {
    // eslint-disable-next-line default-case
    switch(pagina) {
       case true:
        return <Cadastro />
       case false:
          return <Lista />
        }
    }
   
 
  return (
    <div className="App">
         <button onClick={trocaPagina}>Trocar de tela</button>
         {renderPagina()  }
  </div>
  );
}

export default App;
