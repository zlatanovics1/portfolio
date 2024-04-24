"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function DropDownMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BiMenu className=" w-8 h-8" onClick={() => setOpen(true)} />
      {open && (
        <motion.div
          initial={{ x: -500 }}
          transition={{ duration: 0.15, type: "tween" }}
          animate={{ x: 0 }}
          className="fixed inset-0 z-[9999] pt-10 px-10  bg-gray-950/50 backdrop-blur-sm"
        >
          <button
            name="close menu"
            aria-label="close menu"
            onClick={() => setOpen(false)}
            className="float-right text-4xl"
          >
            <CgClose />
          </button>
          <ul className="flex flex-col items-center justify-center mt-32">
            <a>lol</a>
          </ul>
        </motion.div>
      )}
    </>
  );
}
