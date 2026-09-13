import { use, useState } from "react";
import type { TechnologiesType } from "../../Type/Type";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";
import { toast } from "react-toastify";

interface PropType {
  technologiesPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ technologiesPromise }: PropType) => {
  const technologiesData = use(technologiesPromise);

  const [stack, setStack] = useState<TechnologiesType[]>([]);

  const handleAddToStack = (technology: TechnologiesType) => {
    setStack((prevStack) => [...prevStack, technology]);
    toast.success("Stack Was Added");
  };

  const handleRemoveOne = (id: number) => {
    setStack((prevStack) => prevStack.filter((item) => item.id !== id));
    toast.warning("Remove Stack");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.warning("Remove All Stack");
  };

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="font-extrabold text-[28px] sm:text-[32px] lg:text-[36px] text-[#0F172A] text-center md:text-left">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="text-[16px] sm:text-[18px] text-[#64748B] text-center md:text-left">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-9 mt-10 justify-items-stretch">
          {technologiesData.map((technologyData) => (
            <div key={technologyData.id} className="w-full">
              <TechnologyCard
                technologyData={technologyData}
                onAdd={handleAddToStack}
                isAdded={stack.some((item) => item.id === technologyData.id)}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 w-full lg:w-auto">
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