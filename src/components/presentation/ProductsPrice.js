import React from "react";

export default props => {
  const product = props;
  return <h4>{product.price}</h4>;
};

const style = {
  productPost: {
    padding: 16,
    background: "f9f9f9",
    border: "1px solid #ddd",
    marginBottom: 24
  }
};
