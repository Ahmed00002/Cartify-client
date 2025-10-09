import React from "react";

const CategoryCard = ({ category }) => {
  console.log(category);
  const { name, products, image } = category;
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center pt-8 pb-6 rounded-[6px] border border-btnSecondary hover:border-Primary cursor-pointer group transition-all duration-300 bg-white">
        <img src={image} className="size-20" />
        <div className="space-y-[6px] text-center">
          <h1 className="text-lg font-medium group-hover:text-hardPrimary transition-all duration-300">
            {name}
          </h1>
          <h1 className="text-sm text-gray-500">{products} Products</h1>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
