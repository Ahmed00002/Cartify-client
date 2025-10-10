import React from "react";
import SectionTitle from "./shared/SectionTitle";
import ProductCard from "./shared/ProductCard";

const ProductSection = ({ sectionTitle, Products }) => {
  return (
    <>
      <section className="center py-20">
        <SectionTitle title={sectionTitle} buttonText={"View All"} />
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductSection;
