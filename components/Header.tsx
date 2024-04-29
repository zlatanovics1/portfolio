import Image from "next/image";
import Typer from "./HeadingTyper";

import blobFinal from "@/public/blobfinalreact.webp";

export default function Header() {
  return (
    <header id="header" className="content-container mt-40 xl:mt-24">
      <div className="flex flex-col items-center max-xl:gap-20 justify-center xl:flex-row">
        <div className="w-full max-xl:text-center max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="font-bold text-7xl mb-8 text-gray-200">
            Hi, I&apos;m <span className="">Strahinja</span>
          </h1>
          <Typer />

          <p className="mt-16 text-lg xl:w-[90%] leading-relaxed text-lt text-gray-300 ">
            I create highly performant and modern UI websites.
            <br />I make sure your website ranks best on search engines. <br />
            I elevate your company&apos;s reputation. <br />
            <br /> <span className="neon">&#8226; </span>
            <span className="neon">That&apos;s all you need.</span>
          </p>
          <div className="flex gap-8 items-center hidden">
            <button className="px-5 py-2 text-  mt-8 rounded-md border-violet-700/80 text-violet-700/80 border-2">
              Book a call
            </button>
            <a
              href="#socialProof"
              className="text-lg  mt-8 hover:translate-y-1 hover:text-gray-300 transition-all duration-300"
            >
              See more &darr;
            </a>
          </div>
        </div>
        <div className="relative w-4/5 sm:w-full h-[55vh] sm:h-[70dvh] xl:translate-x-20">
          <Image
            src={blobFinal}
            priority
            sizes="(min-width:1280px) 50vw, 100vw"
            className="object-contain rounded-full w-full h-full"
            alt="Blob"
          />
        </div>
      </div>
    </header>
  );
}
