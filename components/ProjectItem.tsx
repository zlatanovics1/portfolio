"use client";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { ProjectItemProps } from "@/types/components";
import toast from "react-hot-toast";

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
  const [headline, features] = description.split(".").map((s) => s.trim());
  const featuresList = features.split(",").map((f) => {
    const s = f.trim();
    return s.at(0)?.toUpperCase() + s.slice(1);
  });
  const [lettersLoaded, setLettersLoaded] = useState(0);

  useEffect(
    function () {
      if (!inView) return;
      setTimeout(() => {
        const t: ReturnType<typeof setInterval> = setInterval(() => {
          if (lettersLoaded >= headline.length) return clearInterval(t);
          setLettersLoaded((cur) => cur + 1);
        }, 13);
      }, 450);
    },
    [inView]
  );

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
        className="flex flex-col gap-2 justify-center max-lg:-translate-y-36 col-span-3"
      >
        <a
          href={link}
          className="lg:hidden text-indigo-700 cursor-pointer hover:underline translate-y-4"
        >
          Live app &uarr;
        </a>
        <div className="default-gradient text-2xl bg-clip-text text-transparent mb-1 flex items-center gap-1">
          {/* <span className="text- text">[</span> */}
          <h3 className="text-4xl font-[600]">{title}</h3>
          <span>(){" {"}</span>
          {/* <span className="text- text">]</span> */}
        </div>
        <div className="pl-6">
          <div className="mb-2">
            <p>
              const <span className="text-indigo-400">features</span> = [
            </p>
            <ul className="leading-normal flex flex-col gap-1 my-2 ml-4">
              {featuresList.map((f, i) => (
                <li key={f}>
                  {f}
                  {i === featuresList.length - 1 ? "" : ","}
                </li>
              ))}
            </ul>
            <p>]</p>
          </div>
          <p className="text-base">
            <span className="text-indigo-400 text-base">return</span>{" "}
            <span className="text-indigo-400 font-bold">`</span>
            <span className="text-teal-200">
              {headline.slice(0, lettersLoaded)}
            </span>
            <span className="text-indigo-400 font-bold">`</span>
          </p>
          {/* <p className="text-lg">{headline}</p> */}
        </div>
        <div className="text-2xl pl-3 default-gradient bg-clip-text text-transparent">
          {" }"}
        </div>
        {/* <a
          href={link}
          className="text-indigo-700 cursor-pointer hidden lg:block hover:underline"
        >
          {reverse ? (
            <span>&larr; Live app</span>
          ) : (
            <span>Live app &rarr;</span>
          )}
        </a> */}
      </motion.div>

      <motion.a
        href={link || "#projects"}
        onClick={link ? undefined : () => toast.loading("In production...")}
        target={link ? "_blank" : "_self"}
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
        } max-lg:-order-1 col-span-4 outline-none  `}
      >
        <div className="relative rounded-2xl h-full w-[calc(100%-3px)] scale-y-[.99] translate-x-[1.3px]">
          <Image
            src={mainImage}
            alt={`${title} photo`}
            quality={100}
            sizes="(min-width:1280px) 50vw, 100vw"
            className="rounded-2xl  object-contain transition-all h-full duration-300"
          />
          <Image
            src={slideImage}
            sizes="(min-width:1280px) 50vw, 100vw"
            alt={`${title} photo`}
            className="rounded-2xl object-contain  absolute inset-0 group-hover:translate-x-0 -translate-x-[110%] transition-all duration-300"
          />
        </div>
        <BiLinkExternal className="absolute w-6 h-6 z-10 top-2 left-2 hidden group-hover:block text-indigo-700" />
        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 inset-0 bg-gradient-to-t from-indigo-700/30 to-transparent pointer-events-none" />
      </motion.a>
    </li>
  );
}
