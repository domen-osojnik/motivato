import React from "react";
import "./App.css";
import Content from "./components/areas/Content";
import Nav from "./components/areas/Nav";
import Wrapper from "./components/areas/Wrapper";
import { GlobalStyle } from "./styles/globalStyles";

// This will be home page in the future, for now just add login and register button
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Nav />
        <Content />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
