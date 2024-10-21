import { BsLinkedin } from "react-icons/bs";

export default function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/strahinja-zlatanovic/"
      target="_blank"
      className="flex items-center  gap-2 cursor-pointer hover:text-violet-700 transition-colors duration-150"
    >
      <BsLinkedin className="w-6 h-6 " />
      <p>Strahinja Zlatanovic</p>
    </a>
  );
}
