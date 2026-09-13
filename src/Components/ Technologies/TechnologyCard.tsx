import type { TechnologiesType } from "../../Type/Type";

interface PropType {
  technologyData: TechnologiesType;
}
const TechnologyCard = ({ technologyData }: PropType) => {
  return (
    <div>
      <div className="border  w-[288px] h-71.25 rounded-2xl"></div>
    </div>
  );
};

export default TechnologyCard;
