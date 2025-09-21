import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

const SectionTitle = ({ title, buttonText }) => {
  return (
    <>
      <section className="pt-20 pb-10 center flex justify-between items-center">
        <h1 className="text-[60px] font-semibold">{title}</h1>
        <Button
          variant={"ghost"}
          className={
            "hover:bg-transparent hover:shadow-none text-base text-Primary cursor-pointer"
          }
        >
          {buttonText} <IoIosArrowRoundForward />
        </Button>
      </section>
    </>
  );
};

export default SectionTitle;
