import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styles from "./Styles/styles";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      {/* <h1>The Store</h1> */}
      <Navbar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
