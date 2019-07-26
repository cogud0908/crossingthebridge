import React from "react";
import { Route } from "react-router-dom";
import { Intro, View } from "./Pages";

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Intro} />
      <Route path="/view" component={View} />
    </React.Fragment>
  );
};

export default App;
