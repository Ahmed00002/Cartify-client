import DealsSection from "./DealsSection";
import DealingProductsCard from "./cards/DealingProductsCard";
import ProductCard from "./cards/ProductCard";
import SectionTitle from "./shared/SectionTitle";
// Important images
import advertisement from "../assets/Advertisement.png";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const BestSaleSection = () => {
  return (
    <>
      <section className="center pb-20">
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
          <div className=" rounded-md overflow-hidden relative">
            <img
              src={advertisement}
              alt="Best sale offer advertisement"
              className="h-full w-full absolute top-0 left-0 object-cover -z-50"
            />
            {/* Text Content */}
            <div className="flex flex-col items-center gap-3 mt-9">
              <p className="uppercase text-sm">Hot Sale</p>
              <h2 className="text-3xl">
                <span className="font-semibold">Save 37%</span> on <br />
                Every Order
              </h2>
              <Button
                size={"xl"}
                className={
                  "bg-white text-black rounded-full hover:bg-gray-50 cursor-pointer"
                }
              >
                Shop Now <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSaleSection;
