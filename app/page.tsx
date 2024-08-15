"use client"
import Image from "next/image";
import React from "react";
import ParticlesBack from "../Components/Particles"
type Props = {};

function page({}: Props) {

  return (
    <div className=" flex-1 h-[90vh] flex flex-row">
      <ParticlesBack></ParticlesBack>
      
      <div className="w-1/2 flex justify-center items-center">
        <Image
          style={{
            objectFit: "cover",
          }}
          alt="Niranjan image"
          width={500}
          height={500}
          src="/mody.png"
          className=" rounded-lg"
        ></Image>
      </div>
      <div className=" w-1/2 flex flex-col justify-center p-10 text-white">
        <h1 className=" text-6xl font-bold mb-10">
          Hello, I am <br></br> Niranjan Dabhade
        </h1>
        <p className=" text-2xl font-semibold">
           Passionate Developer from India.
        </p>
      </div>
    </div>
  );
}

export default page;
