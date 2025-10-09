import { Button } from "../ui/button";
import { SlHandbag } from "react-icons/sl";
// Rating Star Icon
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Badge } from "../ui/badge";

const ProductCard = () => {
  return (
    <>
      <div className="drop-shadow-md border bg-white hover:drop-shadow-lg hover:border-Primary hover:border rounded-[8px] overflow-hidden transition-all duration-300 relative group">
        <div className="">
          <img
            src="https://img.freepik.com/free-photo/bananas-white-background_1187-1671.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Product image"
            className="aspect-square object-contain"
          />
        </div>
        <div className="p-4">
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
            {/* Shopping Button With Icon */}
            <Button
              variant={"icon"}
              className={
                "rounded-full size-10 bg-btnSecondary cursor-pointer hover:bg-Primary hover:text-white transition-all duration-300"
              }
            >
              <SlHandbag />
            </Button>
          </div>
          {/* Product Rating */}
          <div>
            <Rating
              readonly
              fullSymbol={<FaStar size={18} className="text-warning" />}
              emptySymbol={<FaStar size={18} className="text-gray-200" />}
              initialRating={3}
            />
          </div>
        </div>
        {/* Discount Tag */}
        <Badge className={"bg-error rounded-sm absolute top-4 left-4"}>
          Sale 50%
        </Badge>
      </div>
    </>
  );
};

export default ProductCard;
