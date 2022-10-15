import { GlobalState } from "./context/global/GlobalState";
import Router from "./routes/Router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div> 
      <GlobalStyle />    
      <GlobalState > 
        <Router />
     </GlobalState > 
    </div>
  );
}

export default App;
