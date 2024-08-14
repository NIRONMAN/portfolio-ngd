import Image from "next/image";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className=" flex-1 h-[90vh] flex flex-row">
      <Image
        src="/black-smooth-textured-paper.jpg"
        alt="Background"
        fill
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      ></Image>
      <div className="w-1/2 flex justify-center items-center">
        <Image
          style={{
            objectFit: "cover",
          }}
          alt="Niranjan image"
          width={500}
          height={500}
          src="/model.jpg"
          className="shadow-white  shadow-md rounded-lg"
        ></Image>
      </div>
      <div className=" w-1/2 flex flex-col justify-center p-10 text-white">
        <h1 className=" text-5xl font-bold mb-10">
          Hello, I am <br></br> Niranjan Dabhade
        </h1>
        <p>
           Passionate Developer from India.
        </p>
      </div>
    </div>
  );
}

export default page;
