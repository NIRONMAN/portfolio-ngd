"use client";

import Image from "next/image";
import React from "react";
import TyperCompo from "./TyperCompo";
import { Button } from "./ui/button";

type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <div className="h-[calc(100vh-76px)] flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center items-center p-4 md:p-10">
        <Image
          alt="Niranjan image"
          width={500}
          height={500}
          src="/programmer.png"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-10 text-white text-center md:text-left">
        <TyperCompo />
      </div>

    </div>
  );
};

export default Header;
