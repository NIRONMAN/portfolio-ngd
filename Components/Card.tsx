import React from "react";
import Image from "next/image";

type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  onClick:any
};

function Card({ title, description, imageUrl,onClick}: CardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative group">
      <Image

        src={imageUrl!}
        alt={title!}
        width={400}
        height={300}
        className="w-full h-48 object-contain bg-slate-900"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={onClick} className="bg-white text-black font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;