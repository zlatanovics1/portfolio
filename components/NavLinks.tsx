"use client";

import { links } from "@/static-data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavLinks() {
  const [hoveredLinkIndex, setHoveredIndex] = useState(-1);

  return (
    <ul
      className="grid grid-cols-3 items-center gap-12 relative"
      onMouseLeave={() => setHoveredIndex(-1)}
    >
      {links.map((link, index) => (
        <li
          onMouseEnter={() => setHoveredIndex(index)}
          className="cursor-pointer flex-grow"
          key={link.label}
        >
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
      {hoveredLinkIndex > -1 && (
        <motion.div
          initial={{ left: `${hoveredLinkIndex * 7.5 - 0.5}rem`, opacity: 0 }}
          animate={{
            opacity: 1,
            left: `${
              hoveredLinkIndex > -1
                ? hoveredLinkIndex * 7.5 - (hoveredLinkIndex === 2 ? 0.5 : 1)
                : -1
            }rem`,
          }}
          className={`w-28
        } top-2 bottom-2 absolute -z-10 rounded-full px-3 -left-4 bg-violet-800 rounded-xl`}
        ></motion.div>
      )}
    </ul>
  );
}
