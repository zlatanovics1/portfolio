import Image from "next/image";
import Section from "./Section";
import SectionSlider from "./SectionSlider";
import AboutMeSteps from "./AboutMeSteps";

export default function About() {
  return (
    <Section>
      <SectionSlider title="About me" heading />

      <div className="flex max-xl:flex-col  items-center max-xl:items-start justify-between max-xl:gap-32">
        <div className="text-lg flex flex-col gap-16  basis-1/2 max-xl:w-4/5 max-sm:w-full">
          <h3 className="text-5xl font-semibold text-gray-300 max-mdlg:text-centr">
            Where
            <br className="mdlg:hidden sm:block" />
            <span className="inline-block px-7 rounded-tl-md rounded-br-md mx-4 my-4 py-2 default-gradient text-white -skew-x-12 ">
              passion
            </span>{" "}
            <br className="mdlg:hidden sm:block" />
            meets <br className="hidden mdlg:block" /> powerful{" "}
            <br className="mdlg:hidden sm:block" />
            <span className="inline-block px-7 rounded-tl-md rounded-br-md mx-4 my-4 py-2 default-gradient text-white -skew-x-12 ">
              collaboration
            </span>
          </h3>
          <AboutMeSteps />
          <div className="flex flex-wrap gap-5">
            <div className="flex items-center">
              <div className="rounded-full relative border-[2px] border-violet-700  h-14 w-14 overflow-hidden">
                <Image
                  fill
                  src="/person1.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full -ml-5 relative border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person2.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person3.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person4.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person5.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
              <div className="rounded-full relative -ml-5 border-[2px] border-violet-700 w-14 h-14 overflow-hidden">
                <Image
                  fill
                  src="/person6.jpg"
                  className="grayscale object-cover"
                  alt="Happy person"
                />
              </div>
            </div>

            <p className="sm:text-xl">
              <span className="text-violet-700">30+</span> satisfied course
              attenders
            </p>
          </div>
        </div>
        <div className="basis-2/5 w-full grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-xl">
            <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Image
                alt=""
                src="/course.jpg"
                fill
                className="object-cover grayscale"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-violet-800/40 " />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Image
                alt=""
                src="/music.jpg"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Image
                alt=""
                src="/laptop.jpg"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl">
            <div className="relative h-72 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Image
                alt=""
                src="/gym.jpg"
                fill
                className="object-cover grayscale"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-violet-800/40 " />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
