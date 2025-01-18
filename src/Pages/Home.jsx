import React, { useEffect, useRef, useState } from "react";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = (e) => {
    e.preventDefault();
    setIsReadMore(!isReadMore);
  };
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

  const clientImages = [
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/adani-santigram.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/ami-elegance.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/arjun-skylife.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/binori-mable.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/godrej-picrest.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/harmony.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/indraprasth-greens.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/iscon-platinum.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/mahalaxmi-royal.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/maple-tree.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/maruti-amrakunj.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/nand-prime.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/olive-greens.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/one-world.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/orchid-heaven.jpg",
    "https://www.montdorinterior.com/wp-content/uploads/2024/02/orchid-legacy.jpg",
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

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return; // Ensure slider exists

    let scrollAmount = 0;

    // Function to update maxScroll dynamically
    const updateMaxScroll = () => {
      return slider.scrollWidth - slider.clientWidth;
    };

    // Initial maxScroll value
    let maxScroll = updateMaxScroll();
    const scrollStep = maxScroll / 100; // Adjust scroll step for smoother scrolling

    const scrollSlider = () => {
      // Recalculate maxScroll in case the container size changes
      maxScroll = updateMaxScroll();

      if (scrollAmount < maxScroll) {
        scrollAmount += scrollStep; // Increase scroll to the right
        slider.scrollLeft = scrollAmount;
        // console.log("Current ScrollLeft:", slider.scrollLeft); // For debugging
      }
    };

    // Start scrolling
    const interval = setInterval(scrollSlider, 100); // Adjust speed for smoother scrolling

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // The effect runs only once after the component mounts

  return (
    <>
      <section className="banner h-[800px] flex flex-col md:flex-row justify-center items-center md:justify-center item-center lg:p-8 ">
        {/* Text Section with Background Image */}
        <div className="subHeading flex flex-col gap-2 w-full lg:w-1/2 p-8">
          <p className="text-4xl text-white bg-slate-600 font-bold w-fit p-1 uppercase">
            Best Interior Designer
          </p>
          <p className="text-4xl text-white bg-red-600 font-bold w-fit p-1 uppercase">
            In Ahmedabad
          </p>
        </div>

        {/* Form Section */}
        <div className="form flex flex-col sm:w-full md:w-1/2 gap-4 bg-white rounded-md p-12 mt-6 lg:mt-0 lg:w-1/3">
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
              className="form_input text-black placeholder-black border border-zinc-400 rounded-md px-4 py-2 focus:outline-none resize-none"
            ></textarea>
          </form>
          <div className="frombtn flex justify-center">
            <Button content={"SPEAK TO US"} onClick={handleSpeakToUsBTN} />
          </div>
        </div>
      </section>

      <section className="home-second md:p-[60px] px-4 py-[70px] h-full">
        <div className="flex justify-evenly lg:gap-32 gap-6 lg:flex-row flex-col md:items-center items-start">
          <div className="flex flex-col lg:w-[580px] leading-7 sm:w-full sm:text-center">
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

          <div className="sm:mt-6">
            <Button content={"Talk to our designer"} style={"p-4"} />
          </div>
        </div>
      </section>

      <section className="home-three h-full">
        <div className="lg:px-[160px] md:p-[60px] px-4 py-[70px] lg:py-[60px]">
          <div>
            <article>
              <h2 className="font-bold text-4xl text-[#333333] mb-3 lg:w-[52%]">
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
                {items
                  .slice(currentIndex, currentIndex + 4)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-md md:p-4 lg:w-[20%] lg:p-8  text-center gap-4 flex flex-col mx-2"
                    >
                      <h3 className="text-[#333] text-[20px] font-bold">
                        {item.title}
                      </h3>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-white px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="interior_sec page_sec md:p-[40px] px-4 py-[70px] lg:p-[60px] ">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between lg:flex-row items-center justify-between mb-12">
          <div className="lg:w-9/12">
            <h2 className="font-bold text-[1.7rem] md:text-4xl text-[#333333] mb-3 w-full lg:w-[52%]">
              A little preview of Montdor Interior
            </h2>
            <p className="text-lg text-gray-700">
              Take a tour of the homes we’ve designed for our customers
            </p>
          </div>
          <div className="lg:w-3/12 w-full mt-4 lg:mt-0">
            <Button content="View all Projects" style={"p-2 w-full"} />
          </div>
        </div>
        <div className="container  lg:px-4">
          {/* Project Cards */}
          <div className="grid grid-cols-1  justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Project */}
            <div className="col-span-1 w-[300px] h-[300px] lg:h-[500px]">
              <div
                className="padd_in bg-cover bg-center w-full h-full  rounded-lg relative"
                style={{
                  backgroundImage:
                    "url('https://www.montdorinterior.com/wp-content/uploads/2024/04/sky-city-vernis-luxury-bungalow-home-banner.webp')",
                }}
              >
                <article className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="https://www.montdorinterior.com/sky-city-vernis-luxury-bungalow-interior-ahmedabad/">
                      Sky City Luxury Bungalow
                    </a>
                  </h3>
                  <p>
                    <span className="city_blk">Ahmedabad</span>
                  </p>
                </article>
              </div>
            </div>

            {/* Second Project */}
            <div className="col-span-1 w-[300px] h-[300px] lg:h-[500px]">
              <div
                className="padd_in bg-cover bg-center w-full h-full  rounded-lg relative"
                style={{
                  backgroundImage:
                    "url('https://www.montdorinterior.com/wp-content/uploads/2024/04/aarya-bhumi-4bhk-standard-turnkey-interior-design-project-in-ahmedabad-banner.webp')",
                }}
              >
                <article className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="https://www.montdorinterior.com/aarya-bhumi-4bhk-standard-turnkey-interior-design-project-in-ahmedabad/">
                      Aarya Bhumi – 4BHK Standard Turnkey Interior
                    </a>
                  </h3>
                  <p>
                    <span className="city_blk">Ahmedabad</span>
                  </p>
                </article>
              </div>
            </div>

            {/* Third Project */}
            <div className="col-span-1 w-[300px] h-[300px] lg:h-[500px]">
              <div
                className="padd_in bg-cover bg-center w-full h-full  rounded-lg relative"
                style={{
                  backgroundImage:
                    "url('https://www.montdorinterior.com/wp-content/uploads/2024/04/daisy-amrakunj-4bhk-premium-turnkey-interior-design-project-in-ahmedabad-banner.webp')",
                }}
              >
                <article className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="https://www.montdorinterior.com/daisy-amrakunj-4bhk-premium-turnkey-interior-design-project-in-ahmedabad/">
                      Daisy Amrakunj – 4BHK Premium Turnkey Interior
                    </a>
                  </h3>
                  <p>
                    <span className="city_blk">Ahmedabad</span>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banrow px-4 ">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between border-[3px] border-[#fd0000] rounded-[20px] overflow-hidden relative">
            {/* Image Column */}
            <div className="banimgcol w-full md:w-1/2">
              <img
                src="https://www.montdorinterior.com/wp-content/uploads/2023/09/home-banner.jpg"
                alt="Modular kitchen in Ahmedabad"
                className="w-full h-auto"
              />
            </div>

            {/* Content Column */}
            <div className="bancontcol w-full md:w-1/2 mt-6 md:mt-0 flex justify-center flex-col text-left px-[4%] py-[2%] leading-relaxed">
              <h3 className="banh3 text-[30px] font-bold mb-4">
                Elegant Designs on a Budget
              </h3>
              <p className="banp text-[17px] font-normal text-[#000] mb-4">
                Calculate Your Modular Kitchen Cost
              </p>
              <p>
                <a
                  href="https://www.montdorinterior.com/kitchen-cost-calculator/"
                  className="banspan text-[#fd0000] underline decoration-black hover:no-underline"
                >
                  Find one close to you &gt;
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="following_projects page_sec md:p-[60px] px-6 py-[70px] lg:p-[60px]">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <article>
                <h2 className="font-bold text-4xl text-[#333333] mb-3 md:w-[60%] lg:w-[52%]">
                  Our Clients from Following Projects
                </h2>
              </article>
            </div>
          </div>
        </div>
        <div className="following-projects-row">
          <div className="container">
            <div className="following_client_slider" ref={sliderRef}>
              {[...clientImages, ...clientImages].map((imageSrc, index) => (
                <div key={index} className="item">
                  <div className="padd_in">
                    <span className="img_blk">
                      <img
                        className="client-img"
                        width="280"
                        height="160"
                        src={imageSrc}
                        alt={`Client ${index + 1}`}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vendors_sec page_sec px-4   lg:p-[80px]">
        <div className="row a-item mb-8 md:px-[6%]">
          <div className="col-md-9">
            <h2 className="font-bold  text-4xl text-[#333333] mb-3 w-[52%]">
              Our Global Vendors
            </h2>
            <p className="text-lg mt-2 lg:w-[52%]">
              With our global network of vendors, we are able to bring you the
              latest and greatest in design trends.
            </p>
          </div>
        </div>
        <div className="lg:container md:px-[12%] lg:mx-auto w-full">
          <div className="row vendors_img w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col2">
              <span className="img_blk">
                <img
                  width="164"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo1.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="102"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo2.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="186"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo3.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="184"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo4.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="162"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo5.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="148"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo6.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="153"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo7.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="156"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo8.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="192"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo9.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="176"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2022/06/nc-logo10.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="186"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2023/10/hettich.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="186"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2023/10/olive.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="148"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2023/10/repose-1.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="186"
                  height="99"
                  src="https://www.montdorinterior.com/wp-content/uploads/2023/10/inox.png"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
            <div className="col2">
              <span className="img_blk">
                <img
                  width="123"
                  height="80"
                  src="https://www.montdorinterior.com/wp-content/uploads/2024/08/Havells-Logo.webp"
                  alt="interior designer in Ahmedabad"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="cal_to_action md:p-[70px] px-4 py-[60px] lg:p-[80px]">
        <div className=" bg-white ">
          <h2 className="font-bold text-[25px] md:text-[35px] text-[#333333] mb-[18px] ">
            Unlock Doors to Your Dream Home with #1 Interior Designers in
            Ahmedabad!
          </h2>
          <p className="mb-4 text-[15px] font-normal">
            We understand that your home is more than just a place; it’s a
            direct reflection of your style and personality. We are your trusted
            partner for creating dream homes.
          </p>
          <p className="mb-4 text-[15px] font-normal">
            We start by knowing your preferences &amp; vision, then go on to
            create a customized design plan that fits your budget and timeline.
            We serve every home as a unique dwelling place &amp; should be ideal
            to cater to its owner’s needs perfectly.
          </p>

          <div
            className={`moretext mb-4 ${
              isReadMore ? "h-auto" : "h-0 overflow-hidden"
            }`}
          >
            <p className="mb-4 text-[15px]">
              We always opt for tailored interior designing services for our
              clients. We are a hub to expert interior architects from
              Ahmedabad. Our dedicated design team will work closely with you,
              every step of the way, to bring your vision to life. Whether you
              prefer a modern, sleek look or a cozy, classic feel, we’ve got you
              covered.
            </p>
            <p className="mb-4 text-[15px]">
              We efficiently handle the start to end of your project giving
              wings to your imagination and crafting you the dream home everyone
              admires. Your dream home is just a step away; hire a{" "}
              <strong>
                top home interior designing services company in Ahmedabad
              </strong>
              . Let’s turn your space into something truly unique together!
            </p>

            <h2 className="font-bold text-[25px] md:text-[35px] text-[#333333] mb-[18px] ">
              Unique Interior Designer in Ahmedabad for Unique Homes
            </h2>
            <p className="mb-4 text-[15px] font-normal">
              Montdor Interior stands for its dedication to craft designs for
              exceptional homes. We also offer a wide range of home furnishing
              products for both residential & office spaces. We strive to
              deliver exceptional interior design solutions tailored to the
              individual needs. We bring a pre-defined vision to life as per the
              taste of each client. Our team comprises highly skilled and
              seasoned interior designers in Ahmedabad, along with top-notch
              tradespeople in fields such as plumbing, electrical work, and
              contracting.
            </p>
            <p className="mb-4 text-[15px] font-normal">
              If you’re seeking a 1bhk, 2bhk, 3bhk interior designer in
              Ahmedabad with a mesmerizing artistic style, the search ends here.
            </p>
            <h2 className="font-bold text-[25px] md:text-[35px] text-[#333333] mb-[18px] ">
              Why pick our interior design firm?
            </h2>
            <p className="mb-4 text-[15px] font-normal">
              In case you’re wondering why you should choose the best interior
              design company from Ahmedabad. Let’s make it easier for you, with
              Montdor Interior the journey to your dream home is pre-planned &
              delivered on-time. The homes we design are not only visually
              appealing but also highly functional. We bring advanced techniques
              to the table that craft the most appealing aesthetics for your
              various property types. We keep you well-informed about the
              project’s progress, and we always strive to align our 3D models
              with your vision. Let’s craft something beautiful!
            </p>
          </div>

          <Button onClick={toggleReadMore} content={"Read More"}>
            {isReadMore ? "Read Less" : "Read More"}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
