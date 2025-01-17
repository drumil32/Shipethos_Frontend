import React, { useState } from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      title: "3D Home Visualisation",
      description:
        "Our 3D Visualisation services help you see how your space will look before we proceed to do a makeover.",
    },
    {
      title: "One Stop Solution",
      description:
        "We provide solutions for all of your interior design demands, from conceptualisation to modelling and implementation.",
    },
    {
      title: "Affordable Prices",
      description:
        "We give low-cost interior decoration services that are tailored to your specific tastes and represent you uniquely and improve your quality of life.",
    },
    {
      title: "Design Experts",
      description:
        "We’ll provide you with more than just style, substance, and sass! Let us create a space for you that truly embodies your style and individuality.",
    },
    {
      title: "Customise Designs",
      description:
        "Say goodbye to generic designs and say hello to a place that genuinely shows your personality.",
    },
    {
      title: "Home Interior Expert",
      description:
        "Allow us to turn your house from simple to stunning, improving its aesthetic value and practicality while assisting you in living the life of your desires.",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  const handleSpeakToUsBTN = () => {};
  return (
    <>
      <section className="banner h-[800px] flex justify-evenly items-center">
        <div className="subHeading flex flex-col gap-2">
          <p className="text-4xl bg-zinc-700 text-white font-bold w-fit p-1 uppercase">
            Best Interior Designer
          </p>
          <p className="text-4xl bg-[#FD0000] text-white font-bold w-fit p-1 uppercase">
            In Ahmedabad
          </p>
        </div>
        <div className="form flex justify-center flex-col w-96 gap-4 bg-white rounded-md p-12">
          <h3 className="font-bold text-4xl text-center">
            Talk to our Design Expert
          </h3>
          <form action="" className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none "
            />
            <input
              type="email"
              placeholder="Email"
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none "
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none "
            />
            <input
              type="text"
              placeholder="City"
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none "
            />
            <textarea
              placeholder="Your Requirement"
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none  resize-none"
            ></textarea>
          </form>
          <div className="frombtn flex justify-center">
            <Button content={"SPEAK TO US"} onClick={handleSpeakToUsBTN} />
          </div>
        </div>
      </section>

      <section className="home-second p-[60px] h-full">
        <div className="flex justify-evenly gap-32 flex-row items-center">
          <div className="flex flex-col w-[580px] leading-7">
            <p className="font-bold text-4xl text-[#333333] mb-3">
              Elegant Functional Interiors
            </p>
            <p className="text-[15px] text-[#333333]">
              Montdor Interior combines style and functionality to craft spaces
              tailored to your needs. As one of the{" "}
              <strong>best interior designers in Ahmedabad</strong>, we deliver{" "}
              <strong>luxury interiors Ahmedabad</strong> with seamless beauty
              and practicality. Whether you need{" "}
              <strong>turnkey interior designers in Ahmedabad</strong> or
              customized designs, we turn your vision into reality. With{" "}
              <strong>global vendor partnerships</strong>,{" "}
              <strong>affordable packages</strong>, and a{" "}
              <strong>pan-India presence</strong>, Montdor Interior stands out
              for elegance, functionality, and customization. Let us create
              inspiring spaces that reflect your style and fit your budget.
            </p>
          </div>

          <div className="">
            <Button content={"Talk to our designer"} style={"p-4"} />
          </div>
        </div>
      </section>

      <section className="home-three h-full">
      <div className="px-[160px] py-[60px]">
        <div>
          <article>
            <h2 className="font-bold text-4xl text-[#333333] mb-3 w-[52%]">
              Why Choose Montdor Interior Designer in Ahmedabad?
            </h2>
            <p className="text-xl text-[#333333] mb-3">
              Here are some of the reasons our clients say they continue to
              work with us.
            </p>
          </article>
        </div>
      </div>
      <div className="bg-[#f7f7f7] p-[8%]">
        <div className="w-full">
          <div className="relative">
            <div className="flex overflow-hidden gap-12">
              {/* Display only 3 items at a time */}
              {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md w-[20%] p-8  text-center gap-4 flex flex-col mx-2"
                >
                  <h3 className="text-[#333] text-[20px] font-bold">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#333333] ">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Left and Right Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
