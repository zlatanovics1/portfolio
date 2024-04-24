import EmailMe from "./EmailMe";
import LinkedIn from "./LinkedIn";

export default function Footer() {
  return (
    <footer className="content-container grid grid-cols-2 sm:grid-cols-3 gap-20 py-16">
      <div className="flex flex-col col-span-2 sm:col-span-1">
        <h4 className="uppercase text-lg mb-5 text-gray-300">
          <a href="#header">Strahinja Zlatanovic</a>
        </h4>
        <div className="mt-auto space-y-4">
          <EmailMe />
          <LinkedIn />
        </div>
      </div>
      <div className="flex flex-col gap-8 [&_a]:cursor-pointer [&_a:hover]:text-violet-700 [&_a]:transition-colors [&_a]:duration-300">
        <a>Why work with me?</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact me</a>
      </div>
      <div className="flex flex-col gap-8 [&_a]:cursor-pointer [&_a:hover]:text-violet-700 [&_a]:transition-colors [&_a]:duration-300">
        <a
          href="https://www.upwork.com/freelancers/~01981e92235d3a6631"
          target="_blank"
        >
          UpWork
        </a>
        <a target="_blank" href="https://github.com/zlatanovics1">
          GitHub
        </a>
        <a target="_blank" href="https://daily.dev/">
          Free resources
        </a>
        <a>WebDev course images</a>
      </div>
    </footer>
  );
}
