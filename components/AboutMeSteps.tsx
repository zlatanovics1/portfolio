"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aboutMe } from "@/static-data";

const dist = ["top-2", "top-1/2 -translate-y-1/2", "bottom-2"];

export default function AboutMeSteps() {
  const [active, setActive] = useState(0);

  return (
    <div className="text-xl relative h-60 ml-4">
      <div className="absolute top-0 bottom-0 left-0 h-full w-[3px] rounded-xl bg-gray-800" />
      <motion.div
        animate={{ height: `calc(${active * 50}% - ${0.5 * active}rem)` }}
        initial={{ height: 0 }}
        className="absolute top-2   w-[3px] bg-violet-600"
      />
      <ul>
        {Array.from({ length: 3 }, (_, ind: number) => (
          <motion.li
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

      <div className="ml-8 mt-4 text-lg relative">
        {aboutMe.map((about, i) => (
          <motion.p
            key={about}
            initial={{ opacity: 0 }}
            animate={{
              opacity: active === i ? 1 : 0,
            }}
            transition={{ type: "tween", duration: 0.5 }}
            className="absolute top-0 left-0"
          >
            {about}
            {active === i && active < aboutMe.length - 1 && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive((active) => active + 1)}
                className="outline-none focus:ring-1 focus:ring-violet-800 border-2 text-violet-700 float-right border-violet-700 px-5 py-1 rounded-tl-xl rounded-br-xl mt-8 hover:border-violet-800 hover:text-violet-800 transition-all duration-300"
              >
                Next &rarr;
              </motion.button>
            )}
          </motion.p>
        ))}
      </div>
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
