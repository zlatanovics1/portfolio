"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { MdDone, MdOutlineEmail } from "react-icons/md";

export default function EmailMe() {
  const [finished, setFinished] = useState(false);
  function handleClick() {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText("office@zlatanovics.com").then(() => {
      setFinished(true);
      setTimeout(() => {
        setFinished(false);
      }, 1000);
    });
  }
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-2 cursor-pointer group hover:text-violet-700 transition-colors duration-150"
    >
      {finished ? (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MdDone className="w-6 h-6" />
        </motion.span>
      ) : (
        <>
          <MdOutlineEmail className="w-6 h-6 group-hover:hidden" />
          <IoCopyOutline className="w-6 h-6 hidden group-hover:block" />
        </>
      )}
      <p>office@zlatanovics.com</p>
    </div>
  );
}
