import React from "react";
import Header from "../shared/Header";
import Features from "../shared/Features";
import FeaturesProducts from "../shared/FeaturesProducts";

function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
        <Features></Features>
        <FeaturesProducts></FeaturesProducts>
      </div>
    </div>
  );
}

export default HomePage;
