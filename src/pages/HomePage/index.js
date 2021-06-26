import React from "react";
import "./HomePage.css";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import catList from "../../images/cat-list.png";
import products from "../../products";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="Container">
      <Navbar />
      <Slider />
      <div className="category-list">
        <div>
          <img src={catList} alt="" />
        </div>
        <div>
          <img src={catList} alt="" />
        </div>
        <div>
          <img src={catList} alt="" />
        </div>
        <div>
          <img src={catList} alt="" />
        </div>
      </div>
      <div className="products">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
