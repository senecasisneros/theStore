import React from "react";
import { Container, Row, Col } from "reactstrap";

export default props => {
  const product = props;
  return (
    <div className="card .mx-auto">
      <img
        className="card-img-top imgProduct"
        src={product.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.type}</h5>
        <p className="card-text">{product.desc}</p>
        <p className="card-text">{product.price}</p>
        <a href="#" className="btn btn-primary">
          More Details
        </a>
      </div>
    </div>
  );
};

const style = {
  productPost: {
    // padding: 16,
    // background: "f9f9f9",
    // border: "1px solid #ddd",
    // marginBottom: 24
    // width: 20 + "em"
  }
};
