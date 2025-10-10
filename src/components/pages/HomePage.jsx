import React from "react";
import Header from "../shared/Header";
import Features from "../shared/Features";
import ProductSection from "../ProductsSection";
import Category from "../Category";
import TrustedFoodSection from "../TrustedFoodSection";
import StatisticsSection from "../StatisticsSection";
import OfferSection from "../shared/OfferSection";
import BestSaleSection from "../BestSaleSection";

function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
        <Features></Features>
        {/* Featured Products Section */}
        <ProductSection sectionTitle={"Featured Products"}></ProductSection>
        <Category></Category>
        <TrustedFoodSection></TrustedFoodSection>
        <StatisticsSection></StatisticsSection>
        <OfferSection></OfferSection>
        {/* Best Seller Products Section */}
        <BestSaleSection></BestSaleSection>
      </div>
    </div>
  );
}

export default HomePage;
