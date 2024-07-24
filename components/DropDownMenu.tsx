"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { links } from "@/static-data";

export default function DropDownMenu() {
  const [open, setOpen] = useState(false);

  useEffect(
    function () {
      if (open) document.body.classList.add("overflow-hidden");
      else document.body.classList.remove("overflow-hidden");
    },
    [open]
  );
  return (
    <>
      {!open && <BiMenu className=" w-8 h-8" onClick={() => setOpen(true)} />}
      {open && (
        <motion.div
          onClick={() => setOpen(false)}
          initial={{ x: -500 }}
          transition={{ duration: 0.15, type: "tween" }}
          animate={{ x: 0 }}
          className="fixed overscroll-none inset-0 z-[9999] pt-10 px-10  bg-gray-950/90 h-[100svh] backdrop-filter backdrop-blur-md"
        >
          <button
            name="close menu"
            aria-label="close menu"
            onClick={() => setOpen(false)}
            className="float-right text-4xl"
          >
            <CgClose />
          </button>
          <ul className="flex flex-col items-center gap-16 text-2xl justify-center mt-32 [&_a:hover]:text-violet-700 [&_a]:transition-colors">
            {links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl border-2 transition-all duration-300 border-violet-800 hover:px-8 hover:bg-violet-800 hover:text-inherit text-violet-800 px-6 py-2"
            >
              Let&apos;s talk
            </a>
          </ul>
        </motion.div>
      )}
    </>
  );
}
