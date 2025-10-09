import CategoryCard from "./shared/CategoryCard";
import ProductCard from "./shared/ProductCard";
import SectionTitle from "./shared/SectionTitle";
import vegetable from "../assets/categories/Vegetable.svg";
import fruit from "../assets/categories/fruits 1.svg";
import fish from "../assets/categories/fish 1.svg";
import meat from "../assets/categories/meat 1.svg";
import drinks from "../assets/categories/soft-drink 1.svg";
import snacks from "../assets/categories/snacks 1.svg";

const Category = () => {
  const categories = [
    {
      name: "Vegetables",
      products: 165,
      image: vegetable,
    },
    {
      name: "Fresh Fruit",
      products: 137,
      image: fruit,
    },
    {
      name: "Fish",
      products: 34,
      image: fish,
    },
    {
      name: "Meat",
      products: 165,
      image: meat,
    },
    {
      name: "Water and Drinks",
      products: 48,
      image: drinks,
    },
    {
      name: "Snacks",
      products: 165,
      image: snacks,
    },
  ];
  return (
    <>
      <section className="center py-20 bg-gradient-to-r from-20% from-[#F2F5F3] to-100% to-[#FFFFFF]">
        <SectionTitle title={"Shop by Top Categories"} />
        <div className="grid grid-cols-6 gap-6">
          {categories.map((category, i) => (
            <CategoryCard category={category} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
