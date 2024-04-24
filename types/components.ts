import { Dispatch, SetStateAction } from "react";

export interface ProjectItemProps {
  reverse?: boolean;
  title: string;
  description: string;
  mainImage: string;
  slideImage: string;
  link?: string;
}

export interface TyperProps {
  className?: string;
  strings: string[];
  speed?: number;
}
