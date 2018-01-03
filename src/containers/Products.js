import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import PreviewProducts from "../components/presentation/PreviewProducts";

import _ from "lodash";
// import ProductsPrice from "../components/presentation/ProductsPrice";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      showComponent1: true,
      products: [
        {
          type: "Coffee Cup",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a coffee",
          price: "$1.00"
        },
        {
          type: "Jar",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a jar",
          price: "$3.00"
        },
        {
          type: "Plate",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a plate",
          price: "$2.00"
        },
        {
          type: "Glass Cup",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a glass cup",
          price: "$1.00"
        },
        {
          type: "Fork",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a Fork",
          price: "$.50"
        },
        {
          type: "Spoon",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a Spoon",
          price: "$.50"
        },
        {
          type: "Spoon",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a Spoon",
          price: "$.50"
        },
        {
          type: "Spoon",
          image: "https://dummyimage.com/mediumrectangle/222222/eeeeee",
          desc: "This is a Spoon",
          price: "$.50"
        }
      ]
    };
  }

  render() {
    let items = [];

    this.state.products.forEach((data, i) => {
      items.push(<PreviewProducts key={i} {...data} />);
    });

    const rows = _.chunk(items, 4);

    let pageBody = [];
    if (items.length > 0) {
      rows.forEach((row, idx) => {
        pageBody.push(
          <div key={idx} className="row">
            {row}
          </div>
        );
      });
    }

    return (
      <div>
        <div className="header" />
        {pageBody}
      </div>
    );
  }
}
export default Products;
