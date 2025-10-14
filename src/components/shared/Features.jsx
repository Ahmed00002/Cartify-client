import { useEffect } from "react";
import FeaturesCard from "../cards/FeaturesCard";
import icon1 from "../../assets/icons/icon (1).svg";
import icon2 from "../../assets/icons/icon (2).svg";
import icon3 from "../../assets/icons/icon (3).svg";
import icon4 from "../../assets/icons/icon (4).svg";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Free shipping with discount",
      icon: icon1, // তুমি react-icon বা image দিয়ে map করতে পারো
    },
    {
      id: 2,
      title: "Great Support 24/7",
      description: "Instant access to Contact",
      icon: icon2,
    },
    {
      id: 3,
      title: "100% Secure Payment",
      description: "We ensure your money is safe",
      icon: icon3,
    },
    {
      id: 4,
      title: "Money-Back Guarantee",
      description: "30 days money-back",
      icon: icon4,
    },
  ];

  return (
    <>
      <section className="center">
        <div className="grid grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeaturesCard key={feature.id} feature={feature} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
