import Image from "next/image";
import person1 from "@/public/person1.jpg";
import person2 from "@/public/person2.jpg";
import person3 from "@/public/person3.jpg";
import person4 from "@/public/person4.jpg";
import person5 from "@/public/person5.jpg";
import person6 from "@/public/person6.jpg";
export default function AboutAttenders() {
  return (
    <div className="flex items-center">
      <div className="rounded-full relative border-[2px] border-violet-700  h-14 w-14 overflow-hidden">
        <Image
          src={person1}
          className="grayscale object-cover w-full h-full"
          sizes="7vw"
          alt="Happy person"
        />
      </div>
      <div className="rounded-full -ml-5 relative border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
        <Image
          src={person2}
          className="grayscale object-cover w-full h-full"
          sizes="7vw"
          alt="Happy person"
        />
      </div>
      <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
        <Image
          src={person3}
          className="grayscale object-cover w-full h-full"
          sizes="7vw"
          alt="Happy person"
        />
      </div>
      <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
        <Image
          src={person4}
          className="grayscale object-cover w-full h-full"
          sizes="7vw"
          alt="Happy person"
        />
      </div>
      <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
        <Image
          src={person5}
          className="grayscale object-cover w-full h-full"
          sizes="7vw"
          alt="Happy person"
        />
      </div>
      <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
        <Image
          src={person6}
          className="grayscale object-cover w-full h-full"
          alt="Happy person"
        />
      </div>
    </div>
  );
}
