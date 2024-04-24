"use client";
import { useWorkWithMe } from "@/context/WorkWithMeContextProvider";
import { motion } from "framer-motion";
import Image from "next/image";

// images
import performanceSvg from "@/public/performance.svg";
import salesSvg from "@/public/sales.svg";
import communicationSvg from "@/public/communication.svg";
const images = [
  {
    src: performanceSvg,
    alt: "Performance analytics",
  },
  {
    src: salesSvg,
    alt: "Sales analytics",
  },
  {
    src: communicationSvg,
    alt: "Seamless communication",
  },
];
export default function OfferImages() {
  const { activePoint } = useWorkWithMe();
  return (
    <div className="relative overflow-hidden w-1/2 max-xl:w-full h-[30rem]">
      {images.map((image, i) => (
        <motion.div
          key={image.alt}
          animate={{ opacity: activePoint === i + 1 ? 100 : 0 }}
          className="absolute inset-0"
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="h-full w-4/5 mx-auto xl:ml-auto"
            sizes="(min-width:1280px) 50vw, 100vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
