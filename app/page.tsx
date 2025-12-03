import Hero from "../components/sections/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
