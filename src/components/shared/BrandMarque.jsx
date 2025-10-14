import Marquee from "react-fast-marquee";
// import images
import brand1 from "../../assets/brands/bookoff-corporation-logo.svg";
import brand2 from "../../assets/brands/food.svg";
import brand3 from "../../assets/brands/Group-1.svg";
import brand4 from "../../assets/brands/Group.svg";
import brand5 from "../../assets/brands/mango-1.svg";
import NewslaterContact from "./NewslaterContact";
// import brand6 from "../../assets/brands/Vector.svg";

const BrandMarque = () => {
  return (
    <>
      <section className="center py-20">
        <Marquee autoFill>
          <div className="grid grid-cols-5 justify-center items-center">
            <img
              src={brand1}
              className="fill-Primary"
              alt="Bookoff-corporation logo"
            />
            <img
              src={brand2}
              className="fill-Primary"
              alt="Bookoff-corporation logo"
            />
            <img src={brand3} alt="Bookoff-corporation logo" />
            <img src={brand4} alt="Bookoff-corporation logo" />
            <img src={brand5} alt="Bookoff-corporation logo" />
            {/* <img src={brand6} alt="Bookoff-corporation logo" /> */}
          </div>
        </Marquee>
        <NewslaterContact></NewslaterContact>
      </section>
    </>
  );
};

export default BrandMarque;
