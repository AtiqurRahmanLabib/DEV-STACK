import { use, useState } from "react";
import type { TechnologiesType } from "../../Type/Type";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

interface PropType {
  technologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ technologiesPromise }: PropType) => {
  const technologiesData = use(technologiesPromise);

  const [stack, setStack] = useState<TechnologiesType[]>([]);

  const handleAddToStack = (technology: TechnologiesType) => {
    setStack((prevStack) => [...prevStack, technology]);
  };

  const handleRemoveOne = (id: number) => {
    setStack((prevStack) => prevStack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

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
            <TechnologyCard
              key={technologyData.id}
              technologyData={technologyData}
              onAdd={handleAddToStack}
              isAdded={stack.some((item) => item.id === technologyData.id)}
            />
          ))}
        </div>

        <div className="mt-10">
          <Stack
            stack={stack}
            onRemoveOne={handleRemoveOne}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
