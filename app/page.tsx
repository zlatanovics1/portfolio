import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Offerings from "@/components/Offerings";
import Projects from "@/components/Projects";
import SocialProof from "@/components/SocialProof";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Header />
      <SocialProof />
      <WhyWorkWithMe />
      {/* <Offerings /> */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}
