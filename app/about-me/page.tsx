import Image from "next/image";
import React from "react";

type Props = {};

function Page({}: Props) {
  return (
    <div className="h-full flex flex-row">
      <Image
        src="/black-smooth-textured-paper.jpg"
        alt="Background"
        fill
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="w-1/2 flex justify-center items-center">
        <Image
          style={{
            objectFit: "cover",
          }}
          alt="Niranjan image"
          width={500}
          height={500}
          src="/model.jpg"
          className="shadow-white shadow-md rounded-lg"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-10 text-white">
        <p>
          Hi there! I&#39;m Niranjan Gopinath Dabhade, a student based in
          Maharashtra, India, currently in third year, pursuing a Bachelor&#39;s
          degree in Computer Science and Engineering. My expertise lies in
          full-stack development. I love coding and exploring new technologies.
          <br />
          <span className="font-bold">Education :</span>
          <br />
          Bachelor&#39;s Degree in Computer Science and Engineering
          (Ongoing), Maharashtra Institute of Technology. <br />
          <span className="font-bold">Skills :</span>
          <br /> Programming
          Languages: Python, JavaScript Frameworks & Technologies: React,
          Node.js, Next.js, MERN Stack, Data Science Databases: PostgreSQL,
          Prisma, Mongodb 🌱 I&#39;m currently learning the depths of FullStack
          and dabbling with AI and DS <br />
          <span className="font-bold">Contact :</span>
          <br /> Feel free to connect with me on
          LinkedIn. I&#39;m always open to interesting discussions and
          collaboration opportunities!
        </p>
      </div>
    </div>
  );
}

export default Page;
