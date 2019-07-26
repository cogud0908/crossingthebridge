import React from "react";
import { Route } from "react-router-dom";
import { Intro, View } from "../Pages";

const Root = () => {
  return (
    <>
      <Route exact path="/" component={Intro} />
      <Route path="/view" component={View} />
    </>
  );
};

export default Root;
