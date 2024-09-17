"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import TyperCompo from "./TyperCompo";
import { Button } from "./ui/button";
import axios from "axios";
import { UserCircle, MapPin, GitFork, Briefcase } from "lucide-react";
import { BackgroundGradient } from "./ui/background-gradient";

type GithubUserProps = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
};

const Header: React.FC = () => {
  const [data, setData] = useState<GithubUserProps>();

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.github.com/users/NIRONMAN");
      setData(res.data);
    })();
  }, []);

  return (
    <div className="min-h-[calc(100vh-76px)] flex flex-col md:flex-row text-gray-800 dark:text-white">
      <div className="md:w-1/2 flex justify-center items-center p-4 md:p-10">
        <BackgroundGradient>
          <Image
            alt="Niranjan image"
            width={500}
            height={500}
            src="/mody.png"
            className="rounded-3xl object-cover bg-white dark:bg-slate-950"
          />
        </BackgroundGradient>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-8 space-y-6">
        <BackgroundGradient>
          <TyperCompo />
        </BackgroundGradient>
        <BackgroundGradient>
          <div className="grid grid-cols-2 gap-4 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
            <div className="flex items-center space-x-3">
              <UserCircle className="text-blue-600 dark:text-blue-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Username</div>
                <div className="font-semibold">{data ? data.login : "Loading"}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-green-600 dark:text-green-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Location</div>
                <div className="font-semibold">{data ? data.location : "Loading"}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <GitFork className="text-yellow-600 dark:text-yellow-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Total repos</div>
                <div className="font-semibold">{data ? data.public_repos : "Loading"}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Briefcase className="text-purple-600 dark:text-purple-400" />
              <div>
                <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
                <div className="font-semibold">5+</div>
              </div>
            </div>
          </div>
        </BackgroundGradient>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105">
          <a href="/Resume.pdf" download="Niranjan.pdf" className="flex items-center justify-center">
            Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Header;