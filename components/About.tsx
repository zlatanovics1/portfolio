import Image from "next/image";
import Section from "./Section";
import SectionSlider from "./SectionSlider";

export default function About() {
  return (
    <Section>
      <SectionSlider title="About me" color="text-gray-300" heading />

      <div className="flex max-xl:flex-col overflow-hidden items-center max-xl:items-start justify-between max-xl:gap-32">
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
          <div className="space-y-6 text-xl">
            <p className="leading-normal">
              I am a self-taught developer with a mission to expand my skills
              constantly and approach each challenge with enthusiasm,
              dedication, and a desire to learn.
            </p>
            <p>
              When I’m not immersed in code, I refresh myself with a favorite
              playlist, intense workouts, and meaningful moments with loved
              ones. Life is all about balance, after all.
            </p>
            <p>
              {/* But what sets me apart?
              <br />
              <br /> */}
              My commitment to teamwork and community sets me apart. Seeing
              others grow and succeed brings me immense joy.
            </p>
          </div>
          {/* <button className="px-8 py-2 rounded-tl-md rounded-br-md hover:bg-violet-700 hover:text-gray-300 transition-all duration-300 border-2 border-violet-700 text-violet-700 self-start">
            Let's connect
          </button> */}
          {/* I've made it my mission to constantly expand my skills and approach
          each challenge with enthusiasm and dedication. But what truly sets me
          apart is my commitment to teamwork and community. 
          I firmly 
          that the best results are achieved when talented individuals come
          together, bringing their unique perspectives and expertise to the
          table. That's why I've not only embraced self-learning but also shared
          my knowledge by hosting five free web development courses. Seeing
          others grow and succeed brings me immense joy, and I'm always happy to
          lend a helping hand to those who are eager to learn and grow. When I'm
          not immersed in code or collaborating with fellow creatives, you can
          find me unwinding with a favorite playlist, pushing my limits at the
          gym, or enjoying quality time with friends and family. Life is all
          about balance, after all, and I believe in making the most of every
          moment. Let's create something amazing together! */}
        </div>
        <div className="basis-2/5 w-full grid grid-cols-2 gap-4">
          {/* <h3 className="text-3xl">But what sets me apart?</h3> */}
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
