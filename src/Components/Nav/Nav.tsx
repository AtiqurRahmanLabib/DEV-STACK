import Logo from "../../assets/logo-text.png";
const Nav = () => {
  return (
    <div className="bg-[#F1F5F9] h-20.25 content-center">
      <nav className="container mx-auto ">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <img src={Logo} alt="" />
          </div>
          {/* nav items */}
          <ul className="flex gap-5">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          {/* log & reg div */}
          <div className="flex gap-5">
            <button>Sign in</button>
            <button className="bg-[#D91B7E] w-23 h-9.75 rounded-4xl text-amber-100">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
