import { IoCalendar } from "react-icons/io5";

export default function Calendly() {
  return (
    <a
      href="https://calendly.com/strahinja-zlatanovic/30min"
      target="_blank"
      className="flex items-center  gap-2 cursor-pointer hover:text-violet-700 transition-colors duration-150"
    >
      <IoCalendar className="w-6 h-6" />
      <p>Calendly</p>
    </a>
  );
}
