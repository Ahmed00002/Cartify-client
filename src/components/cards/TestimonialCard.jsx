import Rating from "react-rating";
import quotes from "../../assets/icons/Quoute.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
const TestimonialCard = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4 p-6 rounded-[8px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.01)] bg-white ">
        <img src={quotes} alt="Svg image for quotes" />
        <p>
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
          sodales. Donec sed neque eget
        </p>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-base font-medium">Robert Fox</h1>
              <p className="text-sm  text-gray-400">Customer</p>
            </div>
          </div>
          {/* Customer Rating */}
          <div>
            <Rating
              readonly
              fullSymbol={<FaStar size={15} className="text-warning" />}
              emptySymbol={<FaStar size={15} className="text-gray-200" />}
              initialRating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
