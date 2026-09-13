import type { TechnologiesType } from "../../Type/Type";

interface PropType {
  technologyData: TechnologiesType;
}
const TechnologyCard = ({ technologyData }: PropType) => {
  return (
    <div>
      <div className="border border-[#F1F5F9] w-[288px] h-71.25 rounded-2xl p-5">
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 border">
            <img src={technologyData.icon} alt="" />
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
            <h1 className="text-[#475569] text-[11px] font-medium">{technologyData.tags}</h1>
          </div>
          <h1 className="text-[#64748B] font-medium text-[11px]">{technologyData.badgeVariant}</h1>
          <p className="text-[#334155] text-[11px] font-semibold">{technologyData.rating}</p>
        
        </div>
        <button className="bg-[#0A0F1D] text-white w-61.5 h-9 rounded-xl mt-7">Add to Stack</button>
      </div>
    </div>
  );
};

export default TechnologyCard;
