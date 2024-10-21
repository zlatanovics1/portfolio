import Image from "next/image";

import blobFinal from "@/public/blobfullfinal.png";

export default function Header() {
  return (
    <header id="header" className="content-container mt-40 xl:mt-24">
      <div className="flex flex-col items-center max-xl:gap-20 justify-center xl:flex-row">
        <div className="w-full max-xl:text-center max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="font-bold text-7xl mb-5 text-gray-200">
            Hi, I&apos;m <span className="">Strahinja</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl  mt-5 font-semibold neon">
            FullStack Developer
          </h2>

          <p className="mt-12 w-4/5"></p>
          <div className="flex gap-8 items-center hiddn translate-y-">
            <a
              href="https://calendly.com/strahinja-zlatanovic/30min"
              target="_blank"
              className="px-5 py-2 mt-8 rounded-md border-violet-700/80 text-violet-700/80 border-2 hover:bg-violet-700/80 hover:text-white transition-all"
            >
              Book a call
            </a>
            <a
              href="#socialProof"
              className="text-lg  mt-8 hover:translate-y-1 hover:text-gray-300 transition-all duration-300"
            >
              See more &darr;
            </a>
          </div>
        </div>
        <div className="relative w-4/5 sm:w-ful h-[55svh] sm:h-[70svh] xl:translate-x-20">
          <Image
            src={blobFinal}
            priority
            quality={100}
            sizes="(min-width:1280px) 50vw, 100vw"
            className="object-contain rounded-full w-full h-full"
            alt="Blob"
          />
        </div>
      </div>
    </header>
  );
}
