import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleBTN = () => {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleDelayedNavigation = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 1000); // 1 second delay
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 2 seconds
    setDropdownTimeout(timeout);
  };

  return (
    <div className="h-[10%] bg-[#FBF8EF] p-6">
      <nav className="h-full w-full flex lg:justify-evenly justify-between items-center flex-wrap">
        <div className="logo-container">
          <img
            src="https://www.montdorinterior.com/wp-content/uploads/2023/07/montlogo.png"
            alt="Logo"
            title="Best Interior Designer in Ahmedabad"
          />
        </div>

        {/* Desktop View */}
        <div className="right hidden w-1/3 lg:flex justify-around items-center gap-4">
          <div className="options-container flex justify-evenly gap-8 h-full">
            {[
              { path: "/", label: "Home" },
              {
                path: "/work",
                label: "Work",
                dropdown: [{ path: "/projects", label: "Projects" }],
              },
            ].map((link) => (
              <div
                key={link.path}
                className="relative group"
                onMouseEnter={link.dropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              
              >
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelayedNavigation(link.path);
                  }}
                  className={`text-[#333333] text-xl font-semibold cursor-pointer relative capitalize`}
                >
                  {link.label}
                  {/* Bottom Border Animation */}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full`}
                  ></span>
                </span>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute left-0 mt-10 bg-[#FBF8EF] shadow-md hover:bg-red-100 rounded-md w-40 transition-all duration-300 ${
                      isDropdownOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <span
                        key={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelayedNavigation(item.path);
                        }}
                        className="block px-4 py-2 text-[#333333] cursor-pointer "
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button content={"Book a Consultation"} onClick={handleBTN} />
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#333333] flex flex-col items-center justify-center space-y-1"
          >
            <div
              className={`w-6 h-1 bg-[#333333] transition-all duration-300 transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-[#333333] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-[#333333] transition-all duration-300 transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
