import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SocialProof from "@/components/SocialProof";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Header />
      <SocialProof />
      <WhyWorkWithMe />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
