import type { TechnologiesType } from "../../Type/Type";

interface PropType {
  stack: TechnologiesType[];
  onRemoveOne: (id: number) => void;
  onRemoveAll: () => void;
}

const Stack = ({ stack, onRemoveOne, onRemoveAll }: PropType) => {
  return (
    <div className="w-70 rounded-2xl border border-[#F1F5F9] p-5 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-[16px] font-bold text-[#0F172A]">Your Stack</h1>
      </div>

      {stack.length === 0 ? (
        <p className="text-[12px] text-[#94A3BB] mt-1">No technologies selected yet.</p>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h1 className="text-[#94A3B8] text-[12px]">{stack.length} Technology Selected</h1>
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-[#F1F5F9] rounded-lg p-2"
            >
              <div className="flex items-center gap-2">
                <img src={item.icon} alt="" className="w-6 h-6" />
                <div>
                  <p className="text-[12px] font-semibold text-[#0F172A]">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-[#64748B]">{item.tags}</p>
                </div>
              </div>

              <button
                onClick={() => onRemoveOne(item.id)}
                className="text-[#94A3BB] hover:text-[#EF4444] text-[14px] font-bold"
              >
                ✕
              </button>
            </div>
          ))}
          {stack.length > 0 && (
            <button
              onClick={onRemoveAll}
              className="text-[14px] text-[#D82C20] font-semibold rounded-lg w-57.75 h-7.5 border border-[#ED8C85]"
            >
              Remove All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Stack;
