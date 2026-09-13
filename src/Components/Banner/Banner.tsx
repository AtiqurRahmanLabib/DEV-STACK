import BannerImg from "../../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="container mx-auto mt-15">
      {/* banner section*/}
      <div className="mt-7 flex justify-between h-105 p-10 items-center">
        {/* text content */}
        <div>
          <h1 className="text-[#0F172A] text-[60px] font-extrabold">
            Build Your Ideal <br />{" "}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[#475569] text-[18px]">
            Explore frontend, backend, database, and <br /> tooling options,
            compare them side by side, and put together <br /> the stack that
            fits your next project.
          </p>
          {/* text contents buttons */}
          <div className="flex gap-5 mt-5">
            <button className="w-[168px] h-[40px] rounded-[8px] text-[14px] bg-gradient-to-r from-[#F97316] to-[#EC4899] font-semibold text-white">
              Explore Technologies
            </button>
            <button className="w-42 h-10 border rounded-[8px] border-[#E5E7EB] text-[14px] text-[#374151]">
              Learn More
            </button>
          </div>
        </div>
        {/* banner img */}
        <div className="">
          <img className="w-135 h-135" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
