import FooterLogo from "../../assets/logo-text.png";
export default function Footer() {
  const productLinks = ["Home", "Technologies", "Projects"];
  const companyLinks = ["About", "Contact", "Careers"];
  const legalLinks = ["Privacy Policy", "Terms of Service"];

  return (
    <footer className="w-full border-t border-gray-200 bg-white px-6 py-16 md:px-16 mt-10">
      <div className="w-full container mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
              {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-fuchsia-600 text-sm font-bold text-white">
                DS
              </div> */}
              <div>
                <img src={FooterLogo} alt="" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-6 flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">
              PRODUCT
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">
              LEGAL
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
