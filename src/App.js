import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./Styles/globalStyle";
import Root from "./Router/Root";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <Root />
      </>
    </BrowserRouter>
  );
};

export default App;
