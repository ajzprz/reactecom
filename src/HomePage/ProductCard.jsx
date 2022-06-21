import React from "react";
import { Link } from "react-router-dom";


const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/products/${props.product.id}`}>
        <div className="product-image">
          <img src={props.product.image} alt="img" />
        </div>
        <div className="product-info">
          <h5>{props.product.title}</h5>
          <h6>$ {props.product.price}</h6>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
