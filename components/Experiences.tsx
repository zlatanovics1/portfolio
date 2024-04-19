"use client";

import { useIntervalCount } from "@/hooks/useIntervalCount";
import { motion, useInView } from "framer-motion";
import { MutableRefObject, useRef } from "react";
export default function Experiences() {
  const ref = useRef() as MutableRefObject<HTMLUListElement>;
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const projects = useIntervalCount(50, 10, inView, 300);
  const years = useIntervalCount(6, 10, inView, 300);
  const courses = useIntervalCount(5, 10, inView, 300);
  return (
    <motion.ul
      ref={ref}
      initial={{ opacity: 0, transform: "translateY(100%)" }}
      animate={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(100%)",
      }}
      transition={{ type: "tween", duration: 0.5 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-20 "
    >
      <li className="flex items-center justify-center">
        <div className="rounded-full p-5 w-44 h-44 sm:w-56 sm:h-56 flex flex-col justify-center items-center text-2xl border-indigo-700 border-2">
          <span className="sm:text-sm text-[7px] text-gray-500 -mt-4 mb-2">
            Web App of the year
          </span>
          <span className="sm:text-4xl text-3xl text-viol font-semibold text-gray-300">
            1<sup>st</sup>
          </span>
          <span className="">place</span>
        </div>
      </li>

      <li className="flex items-center justify-center">
        <div className="rounded-full p-5 w-44 h-44 sm:w-56 sm:h-56 flex flex-col justify-center items-center text-2xl border-violet-700 border-2">
          <span className="text-gray-300 sm:text-4xl text-3xl  font-semibold">
            {projects}+
          </span>
          <span className="">projects</span>
        </div>
      </li>
      <li className="flex items-center justify-center">
        <div className="rounded-full p-5 w-44 h-44 sm:w-56 sm:h-56 flex flex-col justify-center items-center text-2xl border-indigo-600 border-2">
          <span className="text-gray-300 sm:text-3xl text-2xl  font-semibold">
            {years}+ years
          </span>
          <span className="">experience</span>
        </div>
      </li>
      <li className="flex items-center justify-center">
        <div className="rounded-full p-5 w-44 h-44 sm:w-56 sm:h-56 flex flex-col justify-center items-center text-2xl border-purple-700 border-2">
          <span className="text-gray-300 sm:text-4xl text-3xl  font-semibold">
            {courses}+ free
          </span>
          <span className="">courses</span>
        </div>
      </li>
    </motion.ul>
  );
}
