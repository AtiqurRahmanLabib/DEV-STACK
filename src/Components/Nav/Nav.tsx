import Logo from "../../assets/logo-text.png";

const Nav = () => {
  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <div className="bg-[#F1F5F9] min-h-16 md:h-20.25 content-center fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between py-3 md:py-0">
          {/* বাম: Logo */}
          <div className="flex items-center justify-start">
            <img src={Logo} alt="Logo" className="h-8 md:h-10" />
          </div>

          {/* মাঝ: শুধু ডেস্কটপে nav links */}
          <div className="hidden md:flex justify-center">
            <ul className="flex gap-5">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className={link === "Home" ? "text-[#DB2777]" : ""}
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* ডান: Sign in / Sign up */}
          <div className="flex justify-end items-center gap-2 md:gap-5">
            <button className="text-sm md:text-base">Sign in</button>
            <button className="bg-[#D91B7E] w-16 h-8 md:w-23 md:h-9.75 rounded-4xl text-amber-100 text-sm md:text-base">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;