import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import products from "../../products";

import Card from "../../components/Card";

const CheckoutPage = ({ product }) => {
  return (
    <div className="Container">
      <div className="cart">
        <div className="flex">
          <div className="image-holder">
            <img src="" alt="" />
          </div>
          <div>
            <p className="font4">Product Name</p>
            <p className="font7">Product Price</p>
          </div>
        </div>
        <div className="flex">
          <p>DELETE</p>
          <p>COUNT</p>
        </div>
      </div>

      <div className="checkout">
        <div className="font4">
          <p>Subtotal</p>
        </div>
        <div className="font7">
          <p>Total</p>
        </div>
        <div>
          <Link to="/success">
            <button className="btn">Checkout</button>
          </Link>
        </div>
        <div className="recent flex pt-20">
          <p>Recently viewed</p>
          <p>
            <a href="">View all</a>
          </p>
        </div>
        {/* <div className="flex">
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
        </div> */}
      </div>
    </div>
  );
};

export default CheckoutPage;
