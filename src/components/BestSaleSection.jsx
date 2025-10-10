import DealsSection from "./DealsSection";
import DealingProductsCard from "./shared/DealingProductsCard";
import ProductCard from "./shared/ProductCard";
import SectionTitle from "./shared/SectionTitle";
// Important images
import advertisement from "../assets/Advertisement.png";

const BestSaleSection = () => {
  return (
    <>
      <section className="center pb-40">
        <SectionTitle title={"Best Seller Products"}></SectionTitle>
        {/* Few Products */}
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        {/* Some Best Sale Products in 3 section and one product advertisement in one section */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          <DealsSection title={"Hot Deals"} />
          <DealsSection title={"Best Seller"} />
          <DealsSection title={"Top Rated"} />
          {/* Advertisement Section */}
          <div className="bg-Primary rounded-md overflow-hidden">
            <img
              src={advertisement}
              alt="Best sale offer advertisement"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSaleSection;
