import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./Styles/Global";
import { Intro, View } from "./Pages";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/view" component={View} />
      </Switch>
    </>
  );
};

export default App;
