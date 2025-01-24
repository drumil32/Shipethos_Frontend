import React, { useEffect, useState } from "react";
import Button from "./Button";

const HeroFrame = ({
  func,
  heading,
  headingStyle,
  secondHeading,
  secondHeadingStyle,
  bgImage,
}) => {
  // let [Count, setCount] = useState(0)
  // const backImage = [
  //   "https://imgs.search.brave.com/IJ9_ZPxUkQwuCSWY7wz-VeOhuIMnSm5LZ936rkbE2kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzE1LzUxLzU4/LzM2MF9GXzUxNTUx/NTgwMF9EdDEwSDhK/QllrdGZkeENvNTJw/ZlF6R28yN1h6TVBy/Ni5qcGc",
  //   "https://imgs.search.brave.com/kt48mZl2lkUqDY-LRj1EPkPrwp1PydQknIiuVAOLpCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzY0LzgyLzQx/LzM2MF9GXzE2NDgy/NDE3OV9IZ1hPTVpO/Qm5Zc09NelJtM1VV/bFNmOThjSUlma2ZK/ci5qcGc"
  // ]
  // let [backgroundImage, setBackgroundImage] = useState(
  //   "url('https://imgs.search.brave.com/IJ9_ZPxUkQwuCSWY7wz-VeOhuIMnSm5LZ936rkbE2kA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzE1LzUxLzU4/LzM2MF9GXzUxNTUx/NTgwMF9EdDEwSDhK/QllrdGZkeENvNTJw/ZlF6R28yN1h6TVBy/Ni5qcGc')"
  // );

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setBackgroundImage(
  //       `url(${backImage[Count]})`
  //     );

  //     console.log(backgroundImage);
      
  //     if(Count === backImage.length){
  //       setCount(0)
  //     }else{
  //       setCount(Count++)
  //     }
  //     }, 2000); // 2000ms delay (2 seconds)

  //   return () => clearTimeout(timer); // Clean up the timeout when the component unmounts
  // });
  return (
    <section className="banner md:h-full lg:h-[800px] flex flex-col md:flex-row justify-center items-center lg:justify-center  md:p-[20px] ">
      {/* Text Section with Background Image */}
      <div className="subHeading text-section flex flex-col gap-2 md:h-auto lg:h-[70%] lg:w-1/2 lg:items-center lg:justify-center ">
        <article>
          <h1 className="flex lg:gap-1 gap-1 flex-col">
            <span
              className={`mobh1 ${headingStyle} lg:text-4xl text-[25px] md:text-[40px] text-wrap text-white bg-[#B82132] font-bold w-fit p-2 uppercase inline-block rounded-lg`}
            >
              {heading ? heading : "Best Interior Designer"}
            </span>
            <span
              className={`mobcen ${secondHeadingStyle} lg:text-4xl text-[20px] md:text-[30px] text-white bg-[#212121] font-bold rounded-lg w-fit p-2 uppercase inline-block `}
            >
              {secondHeading ? secondHeading : "in Ahmedabad"}
            </span>
          </h1>
        </article>
      </div>

      {/* Form Section */}
      <div className="form form-section flex flex-col sm:w-full md:w-1/2 gap-4 bg-[#F9F6E6] rounded-lg p-12 mt-6 lg:mt-0 lg:w-[30%] shadow-inner-black">
        <h3 className="font-bold text-4xl text-[#212121] text-center">
          Talk to our Design Expert
        </h3>
        <form action="" className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="form_input text-black placeholder-black border border-[#B82132] rounded-md px-4 py-2 focus:outline-none "
          />
          <input
            type="email"
            placeholder="Email"
            className="form_input text-black placeholder-black border border-[#B82132] rounded-md px-4 py-2 focus:outline-none "
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="form_input text-black placeholder-black border border-[#B82132] rounded-md px-4 py-2 focus:outline-none "
          />
          <input
            type="text"
            placeholder="City"
            className="form_input text-black placeholder-black border border-[#B82132] rounded-md px-4 py-2 focus:outline-none "
          />
          <textarea
            placeholder="Your Requirement"
            className="form_input text-black placeholder-black border border-[#B82132] rounded-md px-4 py-2 focus:outline-none resize-none"
          ></textarea>
        </form>
        <div className="frombtn flex justify-center">
          <Button
            content={"SPEAK TO US"}
            onClick={func}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroFrame;
