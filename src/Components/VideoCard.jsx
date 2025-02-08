import React from "react";

const videos = [
  {
    id: 4,
    title: "Pushkar Flora",
    url: "https://www.youtube.com/embed/DE3XZARtK6w",
  },
  {
    id: 5,
    title: "Kiara Opulent",
    url: "https://www.youtube.com/embed/l1mBO9RCz_8",
  },
  {
    id: 6,
    title: "Malabar Exotica",
    url: "https://www.youtube.com/embed/xowMauXAdqY",
  },
  {
    id: 7,
    title: "Saanvi Nirman Spectra",
    url: "https://www.youtube.com/embed/_FqKkCho3WY",
  },
  {
    id: 8,
    title: "Riviera Springs",
    url: "https://www.youtube.com/embed/hiDepoeH5W0",
  },
  {
    id: 9,
    title: "Turquoise Greenz",
    url: "https://www.youtube.com/embed/X7Ng_SyHMJA",
  },
  {
    id: 10,
    title: "Aavkar Avenue",
    url: "https://www.youtube.com/embed/3lCWMpoY0no",
  },
  {
    id: 11,
    title: "Suvarna Bhoomi",
    url: "https://www.youtube.com/embed/ZRz7qc7N2Es",
  },
  {
    id: 12,
    title: "Rajshree Elanza",
    url: "https://www.youtube.com/embed/cC9g0j9JFgc",
  },
  {
    id: 13,
    title: "Alexa",
    url: "https://www.youtube.com/embed/xHh8VAeumtE",
  },
  {
    id: 14,
    title: "Dwarkadhish Heights",
    url: "https://www.youtube.com/embed/QrfiiK29ZSU",
  },
  {
    id: 15,
    title: "Altosa Olivia",
    url: "https://www.youtube.com/embed/V7U7z6Jweyc",
  },
  {
    id: 16,
    title: "Cloud 9",
    url: "https://www.youtube.com/embed/PeuHm1nYHJU",
  },
  {
    id: 17,
    title: "Blue Water",
    url: "https://www.youtube.com/embed/zj7uKqG82Rc",
  },
  {
    id: 18,
    title: "Pearl Avenue",
    url: "https://www.youtube.com/embed/[YOUR_URL]",
  },
];

const VideoCard = ({ title, url }) => (
  <div className="video-card bg-[#2f8fc9] shadow-md rounded-lg p-4 w-full">
    <iframe
      className="w-full h-80 rounded-lg"
      src={url}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy" // Lazy load iframe
    ></iframe>
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
  </div>
);

const VideoGallery = ({ anyOther }) => {
  return (
    <>
      <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {(anyOther ? anyOther : videos).map((video) => (
          <VideoCard key={video.id} title={video.title} url={video.url} />
        ))}
      </div>
    </>
  );
};

export default VideoGallery;
