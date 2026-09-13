import { use } from "react";
import type { TechnologiesType } from "../../Type/Type";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

interface PropType {
  technologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ technologiesPromise }: PropType) => {
  const technologiesData = use(technologiesPromise);
  console.log(technologiesData);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-extrabold text-[36px] text-[#0F172A]">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="text-[18px] text-[#64748B]">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex gap-5">
        <div className="grid grid-cols-3 gap-9 mt-10">
          {technologiesData.map((technologyData) => (
            <TechnologyCard technologyData={technologyData}></TechnologyCard>
          ))}
        </div>

        <div className="mt-10">
          <Stack></Stack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
