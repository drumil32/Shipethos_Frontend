import React from "react";
import HeroFrame from "../Components/HeroFrame";
import Card from "../Components/Card";

const Projects = () => {
  const data = [
    {
      title: "Arjun Skylife – A 4 BHK Residential Project, Ahmedabad",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/06/creation-img2.jpg",
      link: "https://www.montdorinterior.com/arjun-skylife-4bhk-residential-project/",
    },
    {
      title: "Maruti Amrakunj-2: A 4 BHK Residential Project, Gandhinagar",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/06/creation-img1.jpg",
      link: "https://www.montdorinterior.com/maruti-amrakunj/",
    },
    {
      title: "5 BHK Bungalow Adani Shantigram, Ahmedabad",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/07/5bhk-bungalow-adani-shantigram-banner.png",
      link: "https://www.montdorinterior.com/5bhk-bungalow-adani-shantigram/",
    },
    {
      title:
        "4 BHK Bungalow Interior Design at Poonam Pride, Shela – Ahmedabad",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/11/4bhk-interior-design-shela.png",
      link: "https://www.montdorinterior.com/4-bhk-bungalow-interior-design-poonam-pride/",
    },
    {
      title: "5 BHK Turnkey Home Interior Surya Emerald Ahmedabad",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/12/Surya-Emerald-Ahmedabad-5-BHK-Home-Interior-Design.webp",
      link: "https://www.montdorinterior.com/5-bhk-home-interior-design-surya-emerald-ahmedabad/",
    },
    {
      title: "Arjun Sky Life, Ahmedabad – A 3bhk Residential Design",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/12/arjun-sky-life-3bhk-interior-design.png",
      link: "https://www.montdorinterior.com/arjun-sky-life-3bhk-interior-design/",
    },
    {
      title: "3 BHK Apartment Design at Bopal",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/03/3-bhk-apartment-design-at-bopal.png",
      link: "https://www.montdorinterior.com/3-bhk-apartment-design-at-bopal/",
    },
    {
      title: "Sanidhya Sky 3 BHK Apartment Design",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/03/sanidhya-sky-3-bhk-interior-design-banner.png",
      link: "https://www.montdorinterior.com/sanidhya-sky-3-bhk-apartment-design/",
    },
    {
      title: "Orchid Heaven 3 BHK Apartment Design",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/03/orchid-3-bhk-interior-design-banner.png",
      link: "https://www.montdorinterior.com/orchid-heaven-3-bhk-apartment-design/",
    },
    {
      title: "Shyam Sanvi 3 BHK Apartment Design",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/03/shyam-sanvi-3-bhk-interior-design-banner.png",
      link: "https://www.montdorinterior.com/shyam-sanvi-3-bhk-apartment-interior-design/",
    },
    {
      title: "Orchid Legacy: Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/10/Orchid-Legacy-D3.jpg",
      link: "https://www.montdorinterior.com/orchid-legacy-d3/",
    },
    {
      title: "Shreemleela: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/10/Shreemleela-banner.jpg",
      link: "https://www.montdorinterior.com/shreemleela-3bhk-standard-turnkey-interior-design-in-ahmedabad/",
    },
    {
      title: "Anand IIyf: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/10/Anand-banner.jpg",
      link: "https://www.montdorinterior.com/anand-iiyf/",
    },
    {
      title: "Aristo Courtyard: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/10/Aristo-banner.jpg",
      link: "https://www.montdorinterior.com/arista-courtyard/",
    },
    {
      title: "Tanishq Enclave: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/10/Tanishq-banner.jpg",
      link: "https://www.montdorinterior.com/tanishq-enclave/",
    },
    {
      title: "Belvedere : 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/09/Belveder-banner1.jpg",
      link: "https://www.montdorinterior.com/belvedere-3bhk-standard-turnkey-interior-design-in-ahmedabad/",
    },
    {
      title: "Olive Greens: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/09/Olive-green-banner2.jpg",
      link: "https://www.montdorinterior.com/olive-greens-2/",
    },
    {
      title: "Olive Greens – 3BHK Standard Interior Design",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/06/olive-greens.png",
      link: "https://www.montdorinterior.com/olive-greens-3bhk-standard-interior-design/",
    },
    {
      title: "Silicon Valley – 4BHK Turnkey Interior Design",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/06/silicon-valley.png",
      link: "https://www.montdorinterior.com/silicon-valley-4bhk-turnkey-interior-design/",
    },
    {
      title: "Orchid Heaven: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/06/creation-img12.jpg",
      link: "https://www.montdorinterior.com/orchid-heaven-3bhk-turnkey-project-ahmedabad/",
    },
    {
      title: "Maple Tree: 3bhk Turnkey Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2022/06/creation-img11.jpg",
      link: "https://www.montdorinterior.com/new-maple-tree-3bhk-premium-turnkey-project/",
    },
    {
      title: "Satyam Skyline 2 – 3BHK Standard Turnkey Interior Design Project",
      imageUrl:
        "https://www.montdorinterior.com/wp-content/uploads/2023/08/16.jpg",
      link: "https://www.montdorinterior.com/new-maple-tree-3bhk-premium-turnkey-project/",
    },
  ];

  return (
    <>
      <HeroFrame
        heading={"Projects"}
        secondHeading={"Home / Projects"}
        headingStyle={"bg-[#fd0000]"}
        secondHeadingStyle={"bg-transparent capitalize"}
      />

      <section className="h-fit w-full bg-[#FBF8EF]">
        <div className="container p-8 h-full w-full flex justify-center flex-col m-auto">
          <div className="heading m-3">
            <p className="font-bold text-[1.7rem] md:text-4xl text-[#333333] m-auto w-4/5">
              Interior Design Projects Completed by Montdor Interior
            </p>
          </div>
          <div className="showcase w-3/4 m-auto flex justify-center">
            <div className="allCards  gap-5 grid sm:grid-cols-3 grid-cols-1">
              {data?.map((i) => (
                <Card image={i.imageUrl} description={i.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
