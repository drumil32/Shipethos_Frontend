import React from "react";
import Button from "./Button";

const HeroFrame = ({
  func,
  heading,
  headingStyle,
  secondHeading,
  secondHeadingStyle,
  bgImage,
}) => {
  return (
    <section className="banner md:h-full lg:h-[800px] flex flex-col md:flex-row justify-center items-center lg:justify-center  md:p-[20px]">
      {/* Text Section with Background Image */}
      <div className="subHeading text-section flex flex-col gap-2 md:h-auto lg:h-[70%] lg:w-1/2 lg:items-center lg:justify-center ">
        <article>
          <h1 className="flex lg:gap-1 gap-1 flex-col">
            <span
              className={`mobh1 ${headingStyle} lg:text-4xl text-[25px] md:text-[40px] text-wrap text-white bg-[#333333] font-bold w-fit p-1 uppercase inline-block rounded-lg`}
            >
              {heading ? heading : "Best Interior Designer"}
            </span>
            <span
              className={`mobcen ${secondHeadingStyle} lg:text-4xl text-[20px] md:text-[30px] text-white bg-[#fd0000] font-bold rounded-lg w-fit p-1 uppercase inline-block `}
            >
              {secondHeading ? secondHeading : "in Ahmedabad"}
            </span>
          </h1>
        </article>
      </div>

      {/* Form Section */}
      <div className="form form-section flex flex-col sm:w-full md:w-1/2 gap-4 bg-[#F9F6E6] rounded-lg p-12 mt-6 lg:mt-0 lg:w-[30%] shadow-inner-black">
        <h3 className="font-bold text-4xl text-center">
          Talk to our Design Expert
        </h3>
        <form action="" className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="form_input text-black placeholder-black border border-black rounded-md px-4 py-2 focus:outline-none "
          />
          <input
            type="email"
            placeholder="Email"
            className="form_input text-black placeholder-black border border-black rounded-md px-4 py-2 focus:outline-none "
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="form_input text-black placeholder-black border border-black rounded-md px-4 py-2 focus:outline-none "
          />
          <input
            type="text"
            placeholder="City"
            className="form_input text-black placeholder-black border border-black rounded-md px-4 py-2 focus:outline-none "
          />
          <textarea
            placeholder="Your Requirement"
            className="form_input text-black placeholder-black border border-black rounded-md px-4 py-2 focus:outline-none resize-none"
          ></textarea>
        </form>
        <div className="frombtn flex justify-center">
          <Button
            content={"SPEAK TO US"}
            onClick={func}
            style={"bg-blue-500"}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroFrame;
