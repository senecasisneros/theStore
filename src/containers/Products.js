import React, { Component } from "react";
import PreviewProducts from "../components/presentation/PreviewProducts";
// import ProductsPrice from "../components/presentation/ProductsPrice";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          type: "Coffee Cup",
          image:
            "http://www.districtdispatch.org/wp-content/uploads/2016/10/Coffee-cup-1.jpg",
          desc: "This is a coffee",
          price: "$1.00"
        },
        {
          type: "Jar",
          image:
            "http://www.districtdispatch.org/wp-content/uploads/2016/10/Coffee-cup-1.jpg",
          desc: "This is a jar",
          price: "$1.00"
        },
        {
          type: "Plate",
          image:
            "http://www.districtdispatch.org/wp-content/uploads/2016/10/Coffee-cup-1.jpg",
          desc: "This is a plate",
          price: "$1.00"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h3>Products</h3>
        <ol>
          {this.state.products.map((product, i) => {
            return (
              <li key={i}>
                <PreviewProducts {...product} />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Products;
