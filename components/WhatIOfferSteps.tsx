"use client";
import { useWorkWithMe } from "@/context/WorkWithMeContextProvider";
import {
  BenefitsHeadings as headings,
  BenefitsDescriptions as descriptions,
} from "@/static-data";
import { GiTalk } from "react-icons/gi";
import { MdMoney } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";

export default function WhatIOfferSteps() {
  const { activePoint, setActivePoint } = useWorkWithMe();
  return (
    <div className="flex gap-12 ">
      <div className="w-2 rounded-md h-64 bg-gray-800 relative">
        <SiSpeedtest
          className={`absolute cursor-pointer w-8 h-8 top-3 text-gray-100 -translate-x-[40%] ${
            activePoint === 1
              ? "bg-indigo-600 opacity-100"
              : " opacity-50 bg-gray-700"
          } rounded-full p-1 transition-all duration-300`}
          onClick={() => setActivePoint(1)}
        />
        <MdMoney
          className={`absolute cursor-pointer w-8 h-8 top-1/2 -translate-y-1/3 text-gray-100 -translate-x-[40%] ${
            activePoint === 2
              ? "bg-indigo-600 opacity-100"
              : " opacity-50 bg-gray-700"
          } rounded-full p-1 transition-all duration-300`}
          onClick={() => setActivePoint(2)}
        />
        <GiTalk
          className={`absolute cursor-pointer w-8 h-8 bottom-3 text-gray-100 -translate-x-[40%] ${
            activePoint === 3
              ? "bg-indigo-600 opacity-100"
              : " opacity-50 bg-gray-700"
          } rounded-full p-1 transition-all duration-300`}
          onClick={() => setActivePoint(3)}
        />
      </div>
      <div className="pt-3 space-y-10 grow">
        <h4 className="text-2xl text-gray-300 font-semibold">
          {/* <Typer strings={[headings[activePoint - 1] + "."]} /> */}
          {[headings[activePoint - 1]]}
        </h4>

        <p className="text-lg">{descriptions[activePoint - 1]}</p>
      </div>
    </div>
  );
}
