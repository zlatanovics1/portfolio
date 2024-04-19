"use client";

import { useInView } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function SectionSlider({
  title,
  color,
  heading,
}: {
  title: string;
  color?: string;
  heading?: boolean;
}) {
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
    <div ref={ref} className={`${color || "text-gray-500"} mb-20  `}>
      {heading ? (
        <h2 className="font-[500] capitalize text-3xl">
          <span>{title.slice(0, highlighted)}</span>
        </h2>
      ) : (
        <p className="font-[500] capitalize text-3xl">
          <span>{title.slice(0, highlighted)}</span>
        </p>
      )}
    </div>
  );
}
