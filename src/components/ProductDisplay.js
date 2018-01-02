import React, { Component } from "react";
import Products from "../containers/Products";
import ProductsPrice from "./presentation/ProductsPrice";

class ProductDisplay extends Component {
  render() {
    return (
      <div className="container">
        <div className="">
          <Products />
        </div>
      </div>
    );
  }
}

export default ProductDisplay;
