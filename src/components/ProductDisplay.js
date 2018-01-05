import React, { Component } from "react";
import Products from "../containers/Products";
import ProductsPrice from "./presentation/ProductsPrice";

import { Container, Row, Col } from "reactstrap";

class ProductDisplay extends Component {
  render() {
    return (
      <div className="">
        <Products />
      </div>
    );
  }
}
export default ProductDisplay;
