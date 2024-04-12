"use client";

import { useInView } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const title = "hard work speaks for itself";
export default function SectionSlider() {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    root: undefined,
  });
  const [highlighted, setHighlighted] = useState(0);
  useEffect(
    function () {
      let timeoutId: ReturnType<typeof setInterval>;
      if (!isInView) return;

      timeoutId = setInterval(function () {
        setHighlighted((highlighted) => highlighted + 1);
        if (highlighted === title.length) {
          clearInterval(timeoutId);
        }
      }, 20);
    },
    //@ts-ignore
    [isInView]
  );
  return (
    <div
      ref={ref}
      className={`-ml-2  border-l-4 h-10 mb-24 ${"border-l-indigo-700"} pt-1 -translate-x-2 `}
    >
      <h1 className="ml-2 font-semibold capitalize text-gray-400 text-3xl">
        <span className="w-2 text-ind">{title.slice(0, highlighted)}</span>
      </h1>
    </div>
  );
}
