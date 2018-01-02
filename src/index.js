import React, { Component } from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import styles from "./Styles/styles";

import App from "./Routes/Routes";

render(
  <div>
    <App />
  </div>,

  document.getElementById("app")
);
