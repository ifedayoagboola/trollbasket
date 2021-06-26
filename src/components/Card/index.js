import React from "react";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="card">
      <div className="img-container">
        <a href={`product/${product._id}`}>
          <img src={product.image} alt="alternative" />
        </a>
      </div>
      <div className="details">
        <div className="p-name">{product.name}</div>
        <div className="p-price">{product.price}</div>
        <div className="p-name">{product.stock}</div>
      </div>
    </div>
  );
};

export default Card;
