import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./Styles/globalStyle";
import Root from "./router/Root";

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
