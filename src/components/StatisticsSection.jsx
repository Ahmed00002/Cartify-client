import React from "react";

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
      <section className="center py-40 bg-[#001009]">
        <div className="grid grid-cols-4 gap-6">
          {pageData.map((data, index) => (
            <div
              key={index}
              className="bg-white/5 text-center py-10 flex flex-col gap-6"
            >
              <h1 className="text-[56px] text-Primary font-extralight">
                {data.value}
              </h1>
              <h2 className="text-white text-lg">{data.label}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StatisticsSection;
