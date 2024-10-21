"use client";

import { links } from "@/utils/static-data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavLinks() {
  return (
    <ul className="grid grid-cols-3 items-center gap-12 relative">
      {links.map((link, index) => (
        <li
          className="cursor-pointer group flex-grow hover:text-violet-700 transition-all"
          key={link.label}
        >
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
