import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import headerImg from "../../assets/headerImg.png";
import img1 from "../../assets/leaf/leaf (1).png";
import img2 from "../../assets/leaf/leaf (2).png";
import img3 from "../../assets/leaf/leaf (3).png";
import img4 from "../../assets/leaf/leaf (4).png";

const Header = () => {
  return (
    <>
      <section>
        <div className="center h-[630px] bg-gray-50 relative -z-2">
          <div className="grid grid-cols-2  items-center h-full">
            <div className="flex justify-center items-center h-full">
              <img src={headerImg} alt="Image of a bucket of fruits" />
            </div>
            {/* header texts */}
            <div>
              <p className="font-base text-Primary uppercase mb-2">
                Welcome to cartify
              </p>
              <h1 className="text-7xl capitalize font-bold">
                fresh & healthy organic food
              </h1>
              <h2 className="mt-8 text-3xl font-semibold">
                Sale up to <span className="text-[#FF8A00]">30% OFF</span>
              </h2>
              <p className="mt-3 text-base text-gray-500">
                Free shipping on all your order. we deliver, you enjoy
              </p>
              <button className={"btnPrimary flex items-center gap-2 mt-8"}>
                Shop Now <IoIosArrowRoundForward size={26} />
              </button>
            </div>
          </div>

          {/* images */}
          <img
            className="absolute -z-10 -top-8 left-5"
            src={img1}
            alt="leaf 1"
          />
          <img
            className="absolute -z-10 -top-4 - right-12 "
            src={img2}
            alt="leaf 1"
          />
          <img
            className="absolute -bottom-16  right-22"
            src={img3}
            alt="leaf 1"
          />
          <img
            className="absolute -z-10 bottom-6 left-22 "
            src={img4}
            alt="leaf 1"
          />
        </div>
      </section>
    </>
  );
};

export default Header;
