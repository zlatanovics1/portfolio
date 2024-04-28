import { ProjectItemProps } from "./types/components";
import devVisMain from "@/public/devvis1.png";
import devVisSlide from "@/public/devvis2.png";
import wildOasisMain from "@/public/wildoasis1.webp";
import wildOasisSlide from "@/public/wildoasis2.png";
import brainWaveMain from "@/public/brainwave1.png";
import brainWaveSlide from "@/public/brainwave2.png";
import appleTitanMain from "@/public/appletitan2.png";
import appleTitanSlide from "@/public/appletitan1.png";

export const links = [
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why me", href: "#whyWorkWithMe" },
];

export const projects: ProjectItemProps[] = [
  {
    title: "Imagine and Generate",
    description:
      "Landing page for BrainWave app. Used scroll lock, parallax effects, animations  and most modern UI&UX and responsive design principles (RDP)",
    mainImage: brainWaveMain,
    slideImage: brainWaveSlide,
    link: "https://appbrainwave.vercel.app/",
  },
  {
    title: "Develop & Visualize",
    description:
      "Social media and Data Structures and Algorithms visualization app. Integrated code editor, authorization and authentication, user sign up, real-time messages, rpcs and db triggers",
    mainImage: devVisMain,
    slideImage: devVisSlide,
    link: "https://visualizedev.vercel.app/",
  },

  {
    title: "The Wild Oasis",
    description:
      "Booking service Saas app. Includes data filtering, authentication, user creation, analytics, graphs, dark mode and more!",
    mainImage: wildOasisMain,
    slideImage: wildOasisSlide,
  },

  {
    title: "Apple titan showcase",
    description:
      "Apple titanium showcase landing page. For custom animations - GSAP.js, and react-three-fiber. Customized with additional scrolling effects and modern UI.",
    mainImage: appleTitanMain,
    slideImage: appleTitanSlide,
    link: "https://appletitan.vercel.app/",
  },
];
export const BenefitsHeadings = [
  "Seamless browsing experience",
  "Let's skyrocket your sales",
  "Fast and painless communication",
];

export const BenefitsDescriptions = [
  "Low speed and less performant website makes it harder for potential customers to reach you. Even if they do, they become frustrated and bounce back quickly. Only thing you end up with is missed business opportunity.",
  "According to Amazon study, reducing page load by just 100ms can bring 10%+ sales increase. I make sure to leave you with loyal and satisfied customers, who form their first - and long lasting - impressions of your company reputation just by exploring your website.",

  "I believe in clear, open communication. I strongly listen to what you want, offering best advice along the way to make sure we bring your ideas to life. Whether you need a redesign, refactoring, or any other change, I get back to you very quickly and keep you updated.",
];

export const aboutMe = [
  "I am a pixel perfect web developer with a mission to expand my skills constantly and approach each challenge with enthusiasm, dedication, and a desire to learn. With 3+ years of experience in coding, I prioritize efficiency, detailed work, and good collaborations",
  "When I'm not immersed in code, I refresh myself with a favorite  playlist, intense workouts, and meaningful moments with loved ones. In my spare time, I find great fulfillment in mastering my archery skills. It not only sharpens my focus but also allows me to appreciate the art of precision. Life is all about balance, after all.",
  "This year I held free web development courses to students. Over 30 participants have completed my program, creating impressive projects along the way. I enjoy helping others and find great satisfaction in seeing the people around me succeed.",
];
