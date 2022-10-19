import AppProvider from "./context/AppContext";
import Router from "./routes/Router";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div> 
      <GlobalStyle />    
      <AppProvider > 
        <Router />
     </AppProvider > 
    </div>
  );
}

export default App;
