import React from "react";
import Header from "../shared/Header";
import Features from "../shared/Features";
import FeaturesProducts from "../FeaturesProducts";
import Category from "../Category";
import TrustedFoodSection from "../TrustedFoodSection";
import StatisticsSection from "../StatisticsSection";

function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
        <Features></Features>
        <FeaturesProducts></FeaturesProducts>
        <Category></Category>
        <TrustedFoodSection></TrustedFoodSection>
        <StatisticsSection></StatisticsSection>
      </div>
    </div>
  );
}

export default HomePage;
