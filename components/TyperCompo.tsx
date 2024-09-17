"use client";
import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FlipWords } from "./ui/flip-words";

export default function TyperCompo() {
  const word2 = [
    {
      text: "Niranjan",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Dabhade",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const word = [
    "Beautiful",
    "Robust",
    "Responsive"
  ];

  return (
    <div className="flex flex-col items-start justify-center border border-white p-10 rounded-3xl bg-white  dark:bg-slate-800">
      <h2 className="text-4xl font-semibold">Hello, I am</h2>
      <TypewriterEffectSmooth words={word2} />
      <div className="text-neutral-600 dark:text-neutral-200 text-lg sm:text-lg font-semibold mb-4">
        I create <FlipWords words={word}></FlipWords> Websites and Applications.
      </div>
     

    </div>
  );
}