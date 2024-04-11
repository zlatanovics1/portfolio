"use client";

import { ReactTyped } from "react-typed";

export default function Typer() {
  return (
    <ReactTyped
      typeSpeed={50}
      strings={["Web Developer", "Full-Stack Dev", "Webflow developer"]}
      loop
      className="text-6xl mt-10 font-semibold text-transparent bg-clip-text default-gradient"
    />
  );
}
