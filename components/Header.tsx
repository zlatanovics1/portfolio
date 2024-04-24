import Image from "next/image";
import Typer from "./HeadingTyper";

export default function Header() {
  return (
    <header id="header" className="content-container mt-40 xl:mt-24">
      <div className="flex flex-col items-center max-xl:gap-20 justify-center xl:flex-row">
        <div className="w-full max-xl:text-center">
          <h1 className="font-bold text-7xl mb-8 text-gray-200">
            Hi, I&apos;m <span className="">Strahinja</span>
          </h1>
          <Typer />
        </div>
        <div className="relative w-4/5 sm:w-full h-[55vh] sm:h-[70dvh] xl:translate-x-20">
          <Image
            src="/blobfinalreact.webp"
            fill
            priority
            className="object-contain rounded-full"
            alt="Blob"
          />
        </div>
      </div>
    </header>
  );
}
