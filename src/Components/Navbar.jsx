import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // To track the current URL and determine the active link

  const handleBTN = () => {};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeLink, setActiveLink] = useState("/"); // Default active link is Home

  // UseEffect to handle changes in URL and active link
  useEffect(() => {
    setActiveLink(location.pathname); // Set the active link based on the current route
  }, [location]);

  return (
    <div className="h-[10%] bg-[#ffffff] p-6">
      <nav className="h-full w-full flex lg:justify-evenly justify-between items-center flex-wrap">
        <div className="logo-container">
          <img
            src="https://www.montdorinterior.com/wp-content/uploads/2023/07/montlogo.png"
            alt="Logo"
            title="Best Interior Designer in Ahmedabad"
          />
        </div>

        {/* Desktop View */}
        <div className="right hidden w-1/3 lg:flex justify-between items-center gap-4">
          <div className="options-container item-center flex justify-evenly gap-8 h-full">
            {[
              "/",
              "/projects",
            ].map((link) => (
              <Link
                key={link}
                to={link}
                className={`text-[#333333] relative group capitalize ${
                  activeLink === link ? "active-link" : ""
                }`}
              >
                {link === "/" ? "Home" : link.split("/")[1].replace("-", " ")}
                {/* Animated Bottom Border */}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                    activeLink === link ? "w-full left-0" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>
          <Button content={"Book a Consultation"} onClick={handleBTN} />
        </div>

        {/* Mobile View: Hamburger Menu */}
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

      {/* Hamburger Menu Links */}
      {isMenuOpen && (
        <div
          className={`lg:hidden flex flex-col items-center bg-[#ffffff] mt-2 py-4 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {[
            "/",
            "/projects",
          ].map((link) => (
            <Link
              key={link}
              to={link}
              className={`text-[#333333] py-2 relative capitalize group ${
                activeLink === link ? "active-link" : ""
              }`}
            >
              {link === "/" ? "Home" : link.split("/")[1].replace("-", " ")}
              {/* Animated Bottom Border */}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                  activeLink === link ? "w-full left-0" : ""
                }`}
              ></span>
            </Link>
          ))}
          <Button content={"Book a Consultation"} onClick={handleBTN} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
