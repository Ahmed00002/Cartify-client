import React from "react";
import Offer1 from "../../assets/Offer1.png";
import Offer2 from "../../assets/Offer2.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const OfferSection = () => {
  return (
    <>
      <section className="center py-20">
        {/* offer Container */}
        <div className="grid grid-cols-2 gap-6">
          {/* Offer 1 */}
          <div className="h-[360px] rounded-md overflow-hidden relative px-10 flex items-center">
            <img
              src={Offer2}
              alt="Image of offer 1"
              className="absolute top-0 left-0 w-full h-full -z-10"
            />
            {/* Offer 1 content */}
            <div className="">
              <p className="uppercase text-sm text-white">100% organic</p>
              <h1 className="uppercase text-4xl font-semibold text-white pt-2 pb-5">
                Fruit & Vegetable
              </h1>
              <p className="uppercase text-sm text-gray-400">
                Starting at:{"     "}
                <Button
                  className={
                    "bg-warning text-white rounded-sm hover:bg-warning text-sm"
                  }
                >
                  $11.99
                </Button>{" "}
              </p>
              {/* ShopNow Button */}
              <Button
                size={"xl"}
                className={
                  "bg-Primary text-sm rounded-full text-white hover:bg-hardPrimary cursor-pointer mt-6 flex gap-2 items-center"
                }
              >
                Shop Now <ArrowRight size={15} />
              </Button>
            </div>
          </div>
          {/* Offer 2 */}
          <div className="h-[360px] rounded-md overflow-hidden relative flex items-center pl-10">
            <img
              src={Offer1}
              alt="Image of offer 2"
              className="absolute top-0 left-0 w-full h-full -z-10"
            />
            {/* Offer 2 content */}
            <div className="">
              <p className="uppercase text-sm text-white">100% organic</p>
              <h1 className="uppercase text-4xl font-semibold text-white pt-2 pb-5">
                Fruit & Vegetable
              </h1>
              <p className="uppercase text-sm text-gray-400">
                Starting at:{"     "}
                <Button
                  className={
                    "bg-warning text-white rounded-sm hover:bg-warning text-sm"
                  }
                >
                  $11.99
                </Button>{" "}
              </p>
              {/* ShopNow Button */}
              <Button
                size={"xl"}
                className={
                  "bg-Primary text-sm rounded-full text-white hover:bg-hardPrimary cursor-pointer mt-6 flex gap-2 items-center"
                }
              >
                Shop Now <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferSection;
