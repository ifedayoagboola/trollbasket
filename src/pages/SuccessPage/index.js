import React from "react";
import "./Success.css";
import success from "../../images/success.png";

const Success = () => {
  return (
    <div className="bg">
      <div className="icon">
        <img src={success} alt="" />
      </div>
      <h2>Checkout Successful</h2>
      <p>Your checkout is now successful</p>
    </div>
  );
};

export default Success;
