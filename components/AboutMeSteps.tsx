"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const dist = ["top-2", "top-1/2 -translate-y-1/2", "bottom-2"];
export default function AboutMeSteps() {
  const [active, setActive] = useState(0);

  return (
    <div className="text-xl relative h-60">
      <div className="absolute top-0 bottom-0 left-0 h-full w-[3px] rounded-xl bg-gray-800" />
      <motion.div
        animate={{ height: `calc(${active * 50}% - ${0.5 * active}rem)` }}
        initial={{ height: 0 }}
        className="absolute top-2   w-[3px] bg-violet-600"
      />
      <ul>
        {Array.from({ length: 3 }, (_, ind: number) => (
          <motion.div
            layout
            transformTemplate={(_, generated) =>
              `translateX(-35%) ${generated}`
            }
            onClick={() => setActive(ind)}
            transition={{ type: "tween", duration: 0.2 }}
            key={ind === active ? "active" : ind}
            className={`absolute w-3 h-3 rounded-full ${
              dist[ind]
            } -translate-x-[35%] left-0 ${
              ind <= active ? "bg-violet-600" : "border-2 border-gray-600"
            } cursor-pointer`}
          />
        ))}
      </ul>
    </div>
  );
}

//   <p className="leading-normal">
//     I am a self-taught developer with a mission to expand my skills
//     constantly and approach each challenge with enthusiasm, dedication, and
//     a desire to learn.
//   </p>
//   <p>
//     When I&apos;m not immersed in code, I refresh myself with a favorite
//     playlist, intense workouts, and meaningful moments with loved ones. Life
//     is all about balance, after all.
//   </p>
//   <p>
//     My commitment to teamwork and community sets me apart. Seeing others
//     grow and succeed brings me immense joy.
//   </p>
