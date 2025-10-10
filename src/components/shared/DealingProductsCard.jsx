import { SlHandbag } from "react-icons/sl";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const DealingProductsCard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-1 p-1 border rounded-sm">
        <div className="col-span-5">
          <img
            src="https://img.freepik.com/free-photo/bananas-white-background_1187-1671.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Product image"
            className="aspect-square object-contain"
          />
        </div>
        <div className="p-3 col-span-7 flex flex-col justify-center">
          {/* Product Name Here */}
          <h1 className="text-sm text-gray-700 group-hover:text-hardPrimary">
            Green Apple
          </h1>
          {/* Product price and shopping button */}
          <div className="flex justify-between items-center font-medium">
            <div className="flex gap-1">
              <h2>$14.99</h2>
              <h2 className="line-through text text-[#999999]">$20.99</h2>
            </div>
          </div>
          {/* Product Rating */}
          <div>
            <Rating
              readonly
              fullSymbol={<FaStar size={12} className="text-warning" />}
              emptySymbol={<FaStar size={12} className="text-gray-200" />}
              initialRating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DealingProductsCard;
