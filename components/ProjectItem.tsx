"use client";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { ProjectItemProps } from "@/types/components";

export default function ProjectItem({
  reverse = false,
  title,
  description,
  mainImage,
  slideImage,
  link,
}: ProjectItemProps) {
  const ref = useRef() as MutableRefObject<HTMLLIElement>;
  const inView = useInView(ref, { once: true, amount: "all" });
  return (
    <li className="grid grid-cols-7 max-lg:grid-cols-1 gap-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-100%)" }}
        transition={{ duration: 0.5 }}
        animate={{
          opacity: Number(inView),
          transform: inView
            ? "translateX(0)"
            : `translateX(${reverse ? "100%" : "-100%"})`,
        }}
        className="flex flex-col gap-8 justify-center max-lg:-translate-y-36 col-span-3"
      >
        <h3 className="text-3xl font-[500] text-indigo-700">{title}</h3>
        <p className="text-xl leading-normal">{description}</p>
        <p className="text-indigo-700 cursor-pointer hidden lg:block">
          {reverse ? (
            <span>&larr; Live demo</span>
          ) : (
            <span>Live demo &rarr;</span>
          )}
        </p>
        <p className="lg:hidden text-indigo-700 cursor-pointer">
          Live demo &uarr;
        </p>
      </motion.div>
      <motion.a
        href={link}
        target="_blank"
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.5 }}
        animate={{
          scale: inView ? 1 : 0.7,
          opacity: Number(inView),
          // transform: inView
          //   ? "translateX(0)"
          //   : `translateX(${reverse ? "-100%" : "100%"})`,
        }}
        className={`project-image-container hover:before:hidden relative group rounded-2xl cursor-pointer border-2  border-gray-900 bg-gray-900 hover:border-indigo-700 flip overflow-hidden ${
          reverse && "-order-1"
        } max-lg:-order-1 col-span-4`}
      >
        <div className="relative rounded-2xl w-[calc(100%-3px)] scale-y-[.99] translate-x-[1.3px]">
          <Image
            src={mainImage}
            alt="project photo"
            width={1907}
            height={1030}
            quality={100}
            className="rounded-2xl  object-contain transition-all duration-300"
          />
          <Image
            src={slideImage}
            alt="project photo"
            width={1907}
            height={1030}
            className="rounded-2xl object-contain  absolute inset-0 group-hover:translate-x-0 -translate-x-[110%] transition-all duration-300"
          />
        </div>
        <BiLinkExternal className="absolute w-6 h-6 z-10 top-2 left-2 hidden group-hover:block text-indigo--700" />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 inset-0 bg-gradient-to-t from-indigo-700/30 to-transparent pointer-events-none" />
      </motion.a>
    </li>
  );
}
