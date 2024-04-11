import Image from "next/image";
import Typer from "./Typer";

export default function Header() {
  return (
    <header className="content-container mt-40 xl:mt-24 ">
      <div className="flex flex-col max-xl:gap-28 items-center xl:flex-row">
        <div className="w-full max-xl:text-center">
          <h1 className="font-bold text-7xl mb-8">
            Hi, I&apos;m <span className="">Strahinja</span>
          </h1>
          <Typer />
        </div>
        <div className="relative w-full h-[60dvh] translate-x-20">
          <Image
            src="/blobfinalreact.webp"
            fill
            className="object-contain"
            alt="Blob"
          />
        </div>
      </div>
    </header>
  );
}
