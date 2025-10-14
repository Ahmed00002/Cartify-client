// import iconBgSoft from "../../assets/icons/IconBgSoft.svg";
// import iconBgHard from "../../assets/icons/IconBgHard.svg";

const FeaturesCard = (feature) => {
  const { title, description, icon } = feature.feature;
  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center hover:border-b-4 border-b-4 border-b-white hover:border-b-Primary transition-all duration-500 cursor-pointer featuresContainer">
        <div className="text-white flex justify-center items-center mb-4">
          <div className={` iconBg size-16  flex justify-center items-center`}>
            <img className={`size-8 `} src={icon} alt="" />
          </div>
        </div>
        <h1 className="text-lg font-bold">{title}</h1>
        <h2 className="mt-2 text-gray-500 text-sm">{description}</h2>
      </div>
    </>
  );
};

export default FeaturesCard;
