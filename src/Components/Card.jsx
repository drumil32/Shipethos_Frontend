import React from "react";

const Card = ({ image, description }) => {
  return (
    <div className="card w-full border-solid border-4 bg-blue-400 border-blue-300 rounded-lg">
      <div className="img ">
        <img
          src={`${image}`}
          alt=""
          className="rounded-b-lg"
          height={"480px"}
          width={"480px"}
        />
      </div>
      <div className="description p-2 ">
        <p className="text-2xl font-bold bg-white rounded-lg p-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
