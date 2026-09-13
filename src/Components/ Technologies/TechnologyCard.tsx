import type { TechnologiesType } from "../../Type/Type";

interface PropType {
  technologyData: TechnologiesType;
  onAdd: (technology: TechnologiesType) => void;
  isAdded: boolean;
}

const TechnologyCard = ({ technologyData, onAdd, isAdded }: PropType) => {
  const cardBorderClass = isAdded
    ? "border-2 border-[#FF073A] shadow-[0_0_15px_3px_rgba(255,7,58,0.7)]"
    : "border border-[#F1F5F9]";

  const handleClick = () => {
    onAdd(technologyData);
  };

  return (
    <div className="">
      <div
        className={`${cardBorderClass} w-[288px] h-71.25 rounded-2xl p-5 transition-all duration-300 mx-auto`}
      >
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 overflow-hidden rounded">
            <img
              src={technologyData.icon}
              alt={technologyData.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-[71.11px] h-7 bg-[#D1FAE5] border-[#D1FAE5] text-[#059669] rounded-full border text-center">
            <p>{technologyData.badgeText}</p>
          </div>
        </div>
        <h1 className="font-bold text-[18px] text-[#0F172A] mt-2">
          {technologyData.name}
        </h1>
        <p className="text-[12px] text-[#64748B] mt-2">
          {technologyData.description}
        </p>
        <div className="flex justify-between mt-4">
          <div className="bg-[#F1F5F9] w-16.25 h-5.25 rounded-sm text-center content-center">
            <h1 className="text-[#475569] text-[11px] font-medium">
              {technologyData.tags}
            </h1>
          </div>
          <h1 className="text-[#64748B] font-medium text-[11px]">
            {technologyData.badgeVariant}
          </h1>
          <p className="text-[#334155] text-[11px] font-semibold">
            {technologyData.rating}
          </p>
        </div>
        <button
          onClick={handleClick}
          disabled={isAdded}
          className="bg-[#0A0F1D] text-white w-61.5 h-9 rounded-xl mt-7 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
