"use client";
import { motion, useInView } from "framer-motion";
import { MutableRefObject, useRef } from "react";
export default function AboutHeading({ words }: { words: string[] }) {
  const h3Ref = useRef() as MutableRefObject<HTMLHeadingElement>;
  const inView = useInView(h3Ref, { amount: 0.5, once: true });
  return (
    <h3
      ref={h3Ref}
      className="text-5xl font-semibold text-gray-300  overflow-hidden"
    >
      {words[0]}
      <br className="mdlg:hidden sm:block" />
      <motion.span
        animate={{
          transform: inView
            ? "skewX(-12deg)"
            : "translateX(-200%) skewX(-12deg)",
        }}
        // transition={{ duration: 0.35 }}
        className="inline-block px-7 rounded-tl-md rounded-br-md mx-4 my-4 py-2 default-gradient text-white -skew-x-12 "
      >
        {words[1]}
      </motion.span>{" "}
      <br className="mdlg:hidden sm:block" />
      {words[2]} <br className="hidden mdlg:block" /> {words[3]}{" "}
      <br className="mdlg:hidden sm:block" />
      <motion.span
        animate={{
          transform: inView
            ? "skewX(-12deg)"
            : "translateX(200%) skewX(-12deg)",
        }}
        // transition={{ duration: 0.35 }}
        className="inline-block px-7 rounded-tl-md rounded-br-md mx-4 my-4 py-2 default-gradient text-white -skew-x-12 "
      >
        {words[4]}
      </motion.span>
    </h3>
  );
}
