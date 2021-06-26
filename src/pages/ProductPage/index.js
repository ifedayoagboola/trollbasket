import React from "react";
import products from "../../products";
import "./ProductPage.css";
import { Link } from "react-router-dom";

const ProductPage = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div className="Container">
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="desc">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="price">{product.price}</div>
      <div className="details ptop-20 color1">Product Description</div>
      <div className="details flex">
        <p>Review and Ratings</p>
        <p>
          <a href="">View all</a>
        </p>
      </div>
      <div className="details color2">
        <p>Ratings 3.0</p>
        <p>
          This is the best product I have used in a long while and the size fits
          perfectly and I love the colors!!!!!
        </p>
        <p>Segun Arinze</p>
      </div>
      <div className="comment"></div>
      <div className="btn-section btn-flex">
        <Link to="/checkout">
          <button className="pry">Add to Cart</button>
        </Link>
        <Link to="/checkout">
          <button className="sec">Wishlist</button>
        </Link>
        {/* <button className="sec">Wishlist</button> */}
      </div>
    </div>
  );
};

export default ProductPage;
