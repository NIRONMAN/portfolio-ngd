"use client";
import { Button } from "./ui/button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

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

  return (
    <div className="flex flex-col items-start justify-center h-[40rem]">
      <h2 className="text-4xl font-semibold">Hello, I am</h2>
      <TypewriterEffectSmooth words={word2} />
      <p className="text-neutral-600 dark:text-neutral-200 text-lg sm:text-lg font-semibold mb-4">
        Passionate Developer from India.
      </p>
      <Button><a href="/Resume.pdf" download="Niranjan.pdf">
        Download Resume
      </a></Button>

    </div>
  );
}