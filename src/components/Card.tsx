import React from "react";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ venueName, imgSrc }) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-lg bg-white m-1.5">
      <img 
        src={imgSrc} 
        alt={venueName} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-2">{venueName}</h2>
      </div>
    </div>
  );
};

export default Card;