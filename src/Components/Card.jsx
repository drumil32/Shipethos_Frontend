import React from "react";

const Card = ({ image, description }) => {
  return (
    <div className="card w-full flex justify-between flex-col items-center border-solid border-4 bg-[#2f8fc9] border-blue-400 rounded-lg">
      <div className="img ">
        <img
          src={`${image}`}
          alt=""
          className="rounded-b-lg"
          height={"480px"}
          width={"480px"}
        />
      </div>
      <div className="description p-2  ">
        <p className="text-2xl font-bold bg-white rounded-lg p-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
