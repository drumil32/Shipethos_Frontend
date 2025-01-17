import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const handleBTN = ()=>{}
  return (
    <div className="h-[10%]  bg-[#ffffff] p-6 ">
      <nav className="h-full w-full flex justify-around flex-row items-center flex-wrap">
        <div className="logo-container">
          <img
            src="	https://www.montdorinterior.com/wp-content/uploads/2023/07/montlogo.png"
            alt="Logo"
            title="Best Interior Designer in Ahmedabad"
          />
        </div>
        <div className="right flex justify-center items-center gap-4">
          <div className="options-container item-center flex justify-evenly gap-8 h-full">
            <Link to="/" className="text-[#333333]">
              Home
            </Link>
            <Link to="/about-us" className="text-[#333333]">
              About
            </Link>
            <Link to="/work" className="text-[#333333]">
              Work
            </Link>
            <Link to="products" className="text-[#333333]">
              Products
            </Link>
            <Link to="/services" className="text-[#333333]">
              Services
            </Link>
            <Link to="/franchise" className="text-[#333333]">
              Franchise
            </Link>
            <Link to="/pricing" className="text-[#333333]">
              Pricing
            </Link>
          </div>
          <Button content={"Book a Consultation"} onClick={handleBTN}/>
          {/* <Link className="bg-[#FD0000] rounded-md font-bold p-2 text-white">
            
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
