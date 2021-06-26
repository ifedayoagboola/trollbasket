import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/checkout" exact component={CheckoutPage} />
        <Route path="/success" exact component={SuccessPage} />
      </Switch>
    </div>
  );
}

export default App;
