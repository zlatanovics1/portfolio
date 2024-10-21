import { ProjectItemProps } from "../types/components";
import devVisMain from "@/public/devvis1.png";
import devVisSlide from "@/public/devvis2.png";
// import wildOasisMain from "@/public/wildoasis1.webp";
// import wildOasisSlide from "@/public/wildoasis2.png";
// import brainWaveMain from "@/public/brainwave1.png";
// import brainWaveSlide from "@/public/brainwave2.png";
import milioMain from "@/public/customer.png";
import milioSlide from "@/public/admin.png";

import fitnessMain from "@/public/fitnessMainpng.png";
import fitnessSlide from "@/public/fitnessSlide.png";

export const links = [
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Why me", href: "#whyWorkWithMe" },
];

export const projects: ProjectItemProps[] = [
  // {
  //   title: "Imagine and Generate",
  //   description:
  //     "Landing page for BrainWave app. Used scroll lock, parallax effects, animations  and most modern UI&UX and responsive design principles (RDP)",
  //   mainImage: brainWaveMain,
  //   slideImage: brainWaveSlide,
  //   link: "https://appbrainwave.vercel.app/",
  // },
  {
    title: "VisualizeDev",
    description:
      "Halved students' learning times by visualizing complex topics (algorithms) and connecting 200+ users. Real-time systems, Private-Channel creation, Role-based access, Code visualization",
    mainImage: devVisMain,
    slideImage: devVisSlide,
    link: "https://visualizedev.app/",
  },

  // {
  //   title: "The Wild Oasis",
  //   description:
  //     "Booking service Saas app. Includes data filtering, authentication, user creation, analytics, graphs, dark mode and more!",
  //   mainImage: wildOasisMain,
  //   slideImage: wildOasisSlide,
  // },

  {
    title: "Milio",
    description:
      "Extremly eased process of quality control, 45% faster distributions and lots of satisfied customers. AI Assistant, Multitenancy support, Automated workflows, Digital reports",

    mainImage: milioMain,
    slideImage: milioSlide,
    link: "https://getmilio.co",
  },
  {
    title: "Premium Fitness",
    description:
      "Increased customer acquisition - monthly subscription sales by 33% through SEO and UX improvement. Internationalization (I18N), Mail templating, Admin CMS, Smooth animations",

    mainImage: fitnessMain,
    slideImage: fitnessSlide,
    link: "https://fitnesspremiumabc.com",
  },
];
export const BenefitsHeadings = [
  "Bridging development and growth",
  "Dedicated to the cause",
  "Clear communication - Lasting success",
];

export const BenefitsDescriptions = [
  "I focus on creating scalable, efficient and innovative solutions that help companies move fast and stay competetive without hitting technical roadblocks. This allows them to focus on growth and new ideas instead of constantly dealing with system issues.",
  "When I’m passionate about a project, it’s not just a job to me—it’s a mission. This mindset helps me stay focused, push through challenges, and find creative solutions - contributing to long-term success, not just short-term results.",
  "I value clear communication and ensure everyone’s voice is heard. By carefully trading off business goals with customer needs, I create solutions that work for both, leading to long-term success and stronger relationships.",
];

export const aboutMe = [
  "I'm a guy who constructs and improves web applications that people love to use. My tech adventure began at the age of 12, with a single \"Hello world\", and it's taken me from solo development to leading teams, collaborating across departments, and ensuring everyone, from stakeholders to customers, is happy.",
  "When I’m not fighting red squiggles in VSCode, I usually spend some time hitting the gym and blasting my ears off with music on a heavy volume. I am also a full-time coffee enjoyer who loves exploring different parts of the world, and learning something new along the way.",
  "I love helping others succeed. I voluntarily built apps for students and hosted free WebDev courses, where over 30 participants created impressive projects. They also contributed to VisualizeDev, now with over 200 monthly active users (students), who support each other in becoming better developers every day.",
];
