import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

const SectionTitle = ({ title, buttonText = "View all" }) => {
  return (
    <>
      <section className=" pb-10  flex justify-between items-center">
        <h1 className="text-[40px] font-semibold">{title}</h1>
        <Button
          variant={"ghost"}
          className={
            "hover:bg-transparent hover:shadow-none text-base text-Primary cursor-pointer "
          }
        >
          {buttonText} <IoIosArrowRoundForward size={20} />
        </Button>
      </section>
    </>
  );
};

export default SectionTitle;
