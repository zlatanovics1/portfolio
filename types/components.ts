import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export interface ProjectItemProps {
  reverse?: boolean;
  title: string;
  description: string;
  mainImage: StaticImageData;
  slideImage: StaticImageData;
  link?: string;
}

export interface TyperProps {
  className?: string;
  strings: string[];
  speed?: number;
}
