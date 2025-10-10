import React from "react";
import DealingProductsCard from "./shared/DealingProductsCard";

const DealsSection = ({ title }) => {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-4">{title}</h1>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <DealingProductsCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DealsSection;
