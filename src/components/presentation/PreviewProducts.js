import React from "react";

export default props => {
  const product = props;
  return (
    <div style={style.productPost}>
      <h4>{product.type}</h4>
      <img src={product.image} alt="" height="65" width="65" />
      <p>{product.desc}</p>
    </div>
  );
};

const style = {
  productPost: {
    padding: 16,
    background: "f9f9f9",
    border: "1px solid #ddd",
    marginBottom: 24
  }
};
