import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";

export const Product = (props) => {
  return (
    <Link to="/product-detail" className="product col-lg-3 col-sm-4 col-12">
      <div className="product-image">
        <img src={props.image} />
      </div>
      <div className="product-price d-flex">
        <p className="price">
          {props.price}
          <span className="del"> vnđ</span>
        </p>
      </div>
      <h2 className="product-title">{props.title}</h2>
      <div className="price-status">{props.status}</div>
    </Link>
  );
};
