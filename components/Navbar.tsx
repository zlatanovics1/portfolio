import Link from "next/link";
import NavLinks from "./NavLinks";
import DropDownMenu from "./DropDownMenu";

export default function Navbar() {
  return (
    <nav className="content-container relative flex flex-col mdlg:flex-row justify-between gap-8  text-gray-300 items-start">
      <Link
        href="/"
        className="uppercase cursor-pointer text-lg flex flex-col gap-1 relative"
      >
        <span className="font-[500]">strahinja zlatanovic</span>
        <span className="h-[2px] top-7 left-0 right-0 absolute bg-violet-800"></span>
      </Link>
      <div className="mdlg:flex gap-14 hidden">
        <NavLinks />

        <a
          href="#contact"
          className="rounded-xl border-2 transition-all duration-300 border-violet-800 hover:px-8 hover:bg-violet-800 hover:text-inherit text-violet-800 px-6 py-2"
        >
          Let&apos;s talk
        </a>
      </div>
      <div className="mdlg:hidden absolute top-0 right-12">
        <DropDownMenu />
      </div>
    </nav>
  );
}
