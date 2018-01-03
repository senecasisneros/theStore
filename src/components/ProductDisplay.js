import React, { Component } from "react";
import Products from "../containers/Products";
import ProductsPrice from "./presentation/ProductsPrice";

import { Container, Row, Col } from "reactstrap";

class ProductDisplay extends Component {
  render() {
    return (
      <div className="">
        <h2>This is the ProductDisplay Component!</h2>
        <Products />
      </div>
    );
  }
}
export default ProductDisplay;
