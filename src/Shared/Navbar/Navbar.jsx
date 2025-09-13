import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaDownload, FaTimes, FaBars } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import Loading from "../../Loading/Loading";
import { createPortal } from "react-dom";

const Navbar = () => {
  const { loading } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHoveringDesktop, setHoverDesktop] = useState(false);
  const [isHoveringMobile, setHoverMobile] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

useEffect(() => {
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  if (loading) return <Loading />;

  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1j5XNVjkNb8Rr1QfiSgb854W2WRfcXF9Z";

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "#skills", label: "SKILLS" },
    { to: "#certification", label: "CERTIFICATION" },
    { to: "#experience", label: "EXPERIENCE" },
    { to: "#projects", label: "PROJECTS" },
         { to: "#education", label: "EDUCATION" },
  { to: "#contact", label: "CONTACT" },
 
   
  ];

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-xl py-1"
            : "bg-gray-900/80 backdrop-blur-md shadow-lg py-2"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group"
              onClick={() => setMenuOpen(false)}
            >
              <div className="flex flex-col items-start leading-none transition-all duration-300 group-hover:scale-105">
                <h1 className="text-3xl md:text-4xl font-bold text-lime-500 relative">
                  M
                  <span className="text-xl md:text-2xl absolute -right-5 top-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ✦
                  </span>
                  <span className="text-xl md:text-2xl">ahtab</span>
                </h1>
                <span className="text-xs font-bold mt-[-5px] text-gray-300 group-hover:text-lime-400 transition-colors duration-300">
                  Full Stack & Shopify Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-1 bg-gray-800/50 p-1 rounded-full">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-lime-400 hover:bg-gray-700/50"
                    to={item.to}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop Resume Button */}
              <a
                href={resumeUrl}
                download="Mahtab_Resume.pdf"
                className={`relative flex items-center px-6 py-3 text-base font-bold rounded-full transition-all duration-500 overflow-hidden ${
                  isHoveringDesktop
                    ? "bg-lime-600 text-white shadow-lg shadow-lime-500/30"
                    : "text-lime-600 bg-lime-500/10 border border-lime-500/20"
                }`}
                onMouseEnter={() => setHoverDesktop(true)}
                onMouseLeave={() => setHoverDesktop(false)}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-lime-500 transition-opacity duration-500 ${
                    isHoveringDesktop ? "opacity-0" : "opacity-20 animate-pulse"
                  }`}
                ></span>
                <span
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 transition-all duration-500 ${
                    isHoveringDesktop ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
                <span className="relative flex items-center z-10 text-white">
                  <FaDownload
                    className={`mr-2 transition-transform duration-300 ${
                      isHoveringDesktop ? "scale-110" : ""
                    }`}
                  />
                  <span
                    className={`transition-all duration-300 ${
                      isHoveringDesktop ? "tracking-wider" : ""
                    }`}
                  >
                    Resume
                  </span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-lime-500"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation using Portal */}
      {isMenuOpen &&
        createPortal(
          <div className="fixed inset-0 top-[64px] z-[2000] bg-gray-900/95 transition-all duration-300 overflow-auto">
            <div className="p-4 max-w-md mx-auto bg-gray-900 rounded-xl shadow-xl">
              <ul className="space-y-3">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="block py-3 px-4 text-white font-medium rounded-lg bg-gray-800 hover:bg-lime-600/10 hover:text-lime-400 transition-all duration-300 border border-transparent hover:border-lime-500/30"
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  {/* Mobile Resume Button */}
                  <a
                    href={resumeUrl}
                    download="Mahtab_Resume.pdf"
                    className={`relative flex items-center justify-center py-3 px-4 font-bold rounded-lg transition-all duration-500 overflow-hidden ${
                      isHoveringMobile
                        ? "bg-lime-600 text-white shadow-lg shadow-lime-500/30"
                        : "text-lime-600 bg-lime-500/10 border border-lime-500/20"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={() => setHoverMobile(true)}
                    onMouseLeave={() => setHoverMobile(false)}
                  >
                    <span
                      className={`absolute inset-0 rounded-lg bg-lime-500 transition-opacity duration-500 ${
                        isHoveringMobile ? "opacity-0" : "opacity-20 animate-pulse"
                      }`}
                    ></span>
                    <span
                      className={`absolute inset-0 rounded-lg bg-gradient-to-r from-lime-500 to-lime-600 transition-all duration-500 ${
                        isHoveringMobile ? "opacity-100" : "opacity-0"
                      }`}
                    ></span>
                    <span className="relative flex items-center z-10 text-white">
                      <FaDownload
                        className={`mr-2 transition-transform duration-300 ${
                          isHoveringMobile ? "scale-110" : ""
                        }`}
                      />
                      <span
                        className={`transition-all duration-300 ${
                          isHoveringMobile ? "tracking-wider" : ""
                        }`}
                      >
                        Download Resume
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
