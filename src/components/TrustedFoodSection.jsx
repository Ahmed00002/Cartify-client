import React from "react";
import img1 from "../assets/image.png";
import img2 from "../assets/image1.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
// leaf icon
import leaf5 from "../assets/leaf/leaf5.svg";
import bluredLeaf from "../assets/leaf/bluredLeaf.svg";

const TrustedFoodSection = () => {
  const features = [
    {
      id: 1,
      //   icon: "FaCheckCircle",
      title: "Healthy & natural food for lovers of healthy food.",
      description:
        "Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.",
    },
    {
      id: 2,
      //   icon: "FaCheckCircle",
      title: "Every day fresh and quality products for you.",
      description:
        "Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.",
    },
  ];

  return (
    <>
      <section className="center py-20 grid grid-cols-12 gap-6">
        <div className="col-span-3  h-[400px] relative ">
          <img src={img1} alt="" className="h-full object-cover rounded-sm" />
          <img
            src={leaf5}
            alt="Image of leaf"
            className="absolute -bottom-10 -left-16"
          />
          <img
            src={bluredLeaf}
            alt="Image of leaf"
            className="absolute -top-14 right-0 -z-10"
          />
        </div>
        <div className="col-span-4 h-[457px]">
          <img src={img2} alt="" className="h-full object-cover rounded-sm" />
        </div>
        <div className="col-span-5 flex flex-col gap-6">
          <h1 className="text-[40px] font-semibold text-gray-900">
            100% Trusted <br /> Organic Food Store
          </h1>
          {/* OPtions */}
          {features.map((feature) => (
            <div className="flex gap-3">
              <div>
                <IoCheckmarkCircle size={24} className="text-Primary" />
              </div>

              <div key={feature.id}>
                <h1 className="text-lg text-gray-900 font-medium mb-[10px]">
                  {feature.title}
                </h1>
                <h2 className="text-sm text-gray-500">{feature.description}</h2>
              </div>
            </div>
          ))}

          {/* Sop Now Button */}
          <div>
            <Button
              size={"xl"}
              className={
                "rounded-full border-none bg-Primary text-white cursor-pointer hover:bg-hardPrimary px-10 py-4"
              }
            >
              Shop Now
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedFoodSection;
