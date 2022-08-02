import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import Requirements from "./components/Requirements/Requirements";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Requirements />
    </GlobalState>
  );
};

export default App;
