import React from "react";
import Category from "../components/Category";
import Home from "./Home";

function Pages() {
  return (
    <div className="container">
      <h1>Welcome to TopFoody!</h1>
      <Category />
      <Home />
    </div>
  );
}

export default Pages;
