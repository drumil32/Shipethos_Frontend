import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(null); // Track which dropdown is open
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
      setIsMenuOpen(false); // Close the menu after navigation
    }, 200); // 200ms delay
  };

  return (
    <div className="h-[10%]">
      <nav className="h-full p-6 w-full bg-[#f2f5fc] flex lg:justify-evenly justify-between items-center flex-wrap z-40">
        
        <div className="logo-container border-b-2 border-r-2 border-[#2f44c9] rounded-lg p-1 ">
          {/* <img
            src="https://www.montdorinterior.com/wp-content/uploads/2023/07/montlogo.png"
            alt="Logo"
            title="Best Interior Designer in Ahmedabad"
          /> */}
          <p className="font-bold text-blue-500 text-4xl flex gap-0"><img src="https://img.favpng.com/9/25/10/blue-letter-s-png-png-favpng-vPiwErhFg5LWdKZer29244npE.jpg" alt="" className="w-10" /><span className="ml-[-4px]">hilpethos</span></p>
        </div>

        {/* Desktop View */}
        <div className="right hidden w-1/3 lg:flex justify-around items-center gap-4">
          <div className="options-container flex justify-evenly gap-8 h-full">
            {[
              { path: "/", label: "Home" },
              {
                path: "",
                label: "Work",
                dropdown: [
                  { path: "/projects", label: "Projects" },
                  { path: "/project-videos", label: "Project Videos" },
                  { path: "/review", label: "Happy Customers" },
                ],
              },
            ].map((link) => (
              <div key={link.path} className="relative group" onClick={()=>{console.log("he");
              }}>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.path !== "") {
                      handleDelayedNavigation(link.path);
                    }
                  }}
                  className={`text-[#333333] text-xl font-semibold cursor-pointer relative capitalize ${
                    link.label === "Work" ? "disabled" : "block"
                  }`}
                >
                  {link.label}
                  {/* Bottom Border Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2f44c9] transition-all duration-300 group-hover:w-full"></span>
                </span>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-10 shadow-md bg-[#bbd0f3] rounded-md w-44 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {link.dropdown.map((item) => (
                      <span
                        key={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelayedNavigation(item.path);
                        }}
                        className="block px-4 font-semibold hover:bg-[#ffffff] rounded-md py-2 text-[#333333] cursor-pointer"
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button
            content={"Book a Consultation"}
            style={"bg-[#e40606]"}
            onClick={handleBTN}
          />
        </div>


        {/* Mobile View */}
        <div className="lg:hidden flex flex-col items-center">
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
        <div className="lg:hidden flex flex-col h-full items-center bg-[#ffffff] mt-2 py-4">
          {[
            { path: "/", label: "Home" },
            {
              path: "/",
              label: "Work",
              dropdown: [
                { path: "/projects", label: "Projects" },
                { path: "/project-videos", label: "Project Videos" },
                { path: "/review", label: "Happy Customers" },
              ],
            },
          ].map((link) => (
            <div key={link.path} className="w-full">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  if (link.dropdown) {
                    setIsDropdownOpenMobile(
                      isDropdownOpenMobile === link.path ? null : link.path
                    );
                  } else {
                    handleDelayedNavigation(link.path);
                  }
                }}
                className={`text-[#333333] py-2 relative capitalize px-4 font-semibold ${
                  link.dropdown ? "flex" : "block"
                } justify-between items-center`}
              >
                {link.label}{" "}
                {link.dropdown ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#999999"
                  >
                    <path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" />
                  </svg>
                ) : (
                  ""
                )}
              </span>
              {link.dropdown &&
                isDropdownOpenMobile === link.path &&
                link.dropdown.map((item) => (
                  <span
                    key={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelayedNavigation(item.path);
                    }}
                    className="block px-6 mb-6 py-2 text-[#555555] font-semibold bg-[#FBF8EF]"
                  >
                    {item.label}
                  </span>
                ))}
            </div>
          ))}
          <Button content={"Book a Consultation"} onClick={handleBTN} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
