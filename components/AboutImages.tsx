"use client";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";

import courseImage from "@/public/course.jpg";
import gymImage from "@/public/gym70deg.jpg";
import musicImage from "@/public/music.jpg";
import laptopImage from "@/public/laptop.jpg";

export default function AboutImages() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <motion.div
      animate={{
        // filter: inView ? "grayscale(0%)" : "grayscale(100%)",
        opacity: inView ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="basis-[45%] w-full grid grid-cols-2 gap-4"
    >
      <motion.div
        animate={{ x: inView ? 0 : -200 }}
        transition={{ type: "tween" }}
        className="overflow-hidden rounded-xl"
      >
        <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image
            alt="Free course"
            sizes="(min-width:1280px) 25vw, 50vw"
            src={courseImage}
            className="object-cover w-full h-full grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-violet-800/40 " />
        </div>
      </motion.div>

      <motion.div
        transition={{ type: "tween" }}
        animate={{ x: inView ? 0 : -200 }}
        className="overflow-hidden rounded-xl"
      >
        <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image
            alt="Music playing"
            src={musicImage}
            sizes="(min-width:1280px) 25vw, 50vw"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        transition={{ type: "tween" }}
        animate={{ x: inView ? 0 : 200 }}
        className="overflow-hidden rounded-xl"
      >
        <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image
            alt="Work setup"
            src={laptopImage}
            sizes="(min-width:1280px) 25vw, 50vw"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        transition={{ type: "tween" }}
        animate={{ x: inView ? 0 : 200 }}
        className="overflow-hidden rounded-xl"
      >
        <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image
            alt="Gym"
            src={gymImage}
            quality={100}
            sizes="(min-width:1280px) 25vw, 50vw"
            className="object-cover w-full h-full"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-violet-800/40 " /> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
