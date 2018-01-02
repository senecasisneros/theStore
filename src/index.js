import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styles from "./Styles/styles";

import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductDisplay";
// import Products from "./containers/Products";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <ProductDisplay />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
