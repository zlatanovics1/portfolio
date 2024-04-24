"use client";
import { TyperProps } from "@/types/components";
import { ReactTyped } from "react-typed";

export default function Typer({ className, strings, speed = 0 }: TyperProps) {
  return (
    <ReactTyped
      showCursor={false}
      className={className}
      strings={strings}
      startWhenVisible
      typeSpeed={speed}
    />
  );
}
