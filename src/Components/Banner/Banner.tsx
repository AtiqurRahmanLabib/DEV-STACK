import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-15 md:mt-15 px-4">
      {/* banner section*/}
      <div className="mt-7 flex flex-col md:flex-row justify-between h-auto md:h-105 p-4 md:p-10 items-center gap-8 md:gap-0">
        {/* text content */}
        <div className="text-center md:text-left">
          <h1 className="text-[#0F172A] text-[32px] sm:text-[40px] md:text-[60px] font-extrabold leading-tight">
            Build Your Ideal <br className="hidden md:block" />{" "}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[#475569] text-[15px] md:text-[18px] mt-3">
            Explore frontend, backend, database, and
            <br className="hidden md:block" /> tooling options,
            compare them side by side, and put together
            <br className="hidden md:block" /> the stack that
            fits your next project.
          </p>
          {/* text contents buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-5 mt-5">
            <button className="w-full sm:w-[168px] h-[40px] rounded-[8px] text-[14px] bg-gradient-to-r from-[#F97316] to-[#EC4899] font-semibold text-white">
              Explore Technologies
            </button>
            <button className="w-full sm:w-42 h-10 border rounded-[8px] border-[#E5E7EB] text-[14px] text-[#374151]">
              Learn More
            </button>
          </div>
        </div>
        {/* banner img */}
        <div>
          <img
            className="w-full max-w-[280px] sm:max-w-[350px] md:w-135 md:max-w-none md:h-135 mx-auto"
            src={BannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;