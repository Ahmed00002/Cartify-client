import React from "react";
// leaf image
import statisticsLeaf from "../assets/leaf/statisticsLeaf.svg";
import Mashroom from "../assets/leaf/Mashroom.svg";
import Papaya from "../assets/leaf/Papaya.svg";

const StatisticsSection = () => {
  const pageData = [
    {
      value: "37+",
      label: "Years of Hard Work",
    },
    {
      value: "500k+",
      label: "Happy Customer",
    },
    {
      value: "28",
      label: "Qualified Team Member",
    },
    {
      value: "750k+",
      label: "Monthly Orders",
    },
  ];
  return (
    <>
      <section className="center py-40 bg-[#001009] relative overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 relative z-10">
          {pageData.map((data, index) => (
            <div
              key={index}
              className="bg-white/10 text-center py-10 flex flex-col rounded-md"
            >
              <h1 className="text-[56px] text-Primary font-light">
                {data.value}
              </h1>
              <h2 className="text-white text-lg">{data.label}</h2>
            </div>
          ))}
        </div>
        {/* floating img */}
        <img
          src={statisticsLeaf}
          alt="Leaf for statistics section"
          className="absolute -left-5 top-6  z-0"
        />
        {/* Mashroom Img */}
        <img
          src={Mashroom}
          alt="Leaf for statistics section"
          className="absolute right-20 -bottom-5 opacity-15 z-0"
        />
        {/* Papaya Img */}
        <img
          src={Papaya}
          alt="Leaf for statistics section"
          className="absolute right-0 top-5 opacity-40 z-0"
        />
      </section>
    </>
  );
};

export default StatisticsSection;
