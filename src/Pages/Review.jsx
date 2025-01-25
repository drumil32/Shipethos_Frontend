import React from "react";
import HeroFrame from "../Components/HeroFrame";
import VideoGallery from "../Components/VideoCard";

const Review = () => {
    const videoData = [
      
        { id: 9, title: "Suvarnabhumi Client Feedback", url: "https://www.youtube.com/embed/s6R0fcs1xgM?feature=oembed" },
        { id: 10, title: "Sattva Exotica Client Feedback", url: "https://www.youtube.com/embed/M8uThVs95og?feature=oembed" },
        { id: 11, title: "Aditya Residency Client Feedback", url: "https://www.youtube.com/embed/AWb5iViHFoo?feature=oembed" },
        { id: 12, title: "Pradyuman Aspire Client Feedback", url: "https://www.youtube.com/embed/4vd__9BxwvI?feature=oembed" },
        { id: 13, title: "Suvarna Bhumi Client Feedback", url: "https://www.youtube.com/embed/t5IN2I6nOjc?feature=oembed" },
        { id: 14, title: "Captown Enhance Client Feedback | Montdor Interior", url: "https://www.youtube.com/embed/ryEW0I1tgjQ?feature=oembed" },
        { id: 15, title: "Shilp Shaligram Client Feedback", url: "https://www.youtube.com/embed/D6GhuFOfvDQ?list=PLSzElRC6-zM_MTMrQnfdCL_3sRlM2zZV9" },
        { id: 16, title: "Raghuvir Spectra Client Feedback", url: "https://www.youtube.com/embed/455are7Qzm4?feature=oembed" },
        { id: 17, title: "Nand Prime Client Feedback | Montdor Interior", url: "https://www.youtube.com/embed/EfORyeS3R1g?feature=oembed" },
        { id: 18, title: "Daisy Amrakunj Client Feedback", url: "https://www.youtube.com/embed/Fb2itnoUmzg?list=PLSzElRC6-zM_MTMrQnfdCL_3sRlM2zZV9" },
        { id: 19, title: "Godrej Green Glades Client Feedback", url: "https://www.youtube.com/embed/vkQOBRjfias?list=PLSzElRC6-zM_MTMrQnfdCL_3sRlM2zZV9" },
        { id: 20, title: "Indraprastha Greens Client Feedback", url: "https://www.youtube.com/embed/4-oazhMTEeA?list=PLSzElRC6-zM_MTMrQnfdCL_3sRlM2zZV9" }
      ];
      
  return (
    <>
      <HeroFrame
        heading={"Review"}
        secondHeading={"Home / Review"}
        fromStatus={false}
      />

      <section className="h-fit w-full bg-[#FBF8EF]">
        <div className="container lg:p-8 p-2 h-full w-full flex justify-center flex-col m-auto">
        <h2 className="font-bold text-[1.7rem] md:text-4xl text-[#333333] w-4/5">What our Client say</h2>
          <div className="showcase m-auto flex justify-center">
            <div className="allCards ">
              <VideoGallery anyOther={videoData}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
