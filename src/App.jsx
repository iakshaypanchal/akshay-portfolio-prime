import React from "react";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS } from "./data/profile";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ThemeToggle from "./components/ThemeToggle";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";
import StatsCounter from "./components/StatsCounter";

import SectionDivider from "./components/SectionDivider";
import useRipple from "./hooks/useRipple";
// import ExperienceNew from "./components/ExperienceNew";
import ExperienceLinkedIn from "./components/ExperienceLinkedIn";
import ContactNew from "./components/ContactNew";


export default function App() {
  useRipple();
  
  return (
    <div className="app-root">
      <LoadingScreen />
      <AnimatedBackground />
      <ScrollProgress />
      <ThemeToggle />
      <CustomCursor />
      <BackToTop />
      <main className="container">
        {/* About (card) */}
        <About profile={PROFILE} />
        {/* <AboutNew profile={PROFILE} /> */}

        {/* Stats Counter */}
        {/* <StatsCounter /> */}

        <SectionDivider title="Skills & Tools" />
        <Skills skills={SKILLS} />

        <SectionDivider title="Work Experience" />
        <Experience items={EXPERIENCE} />
        {/* <ExperienceLinkedIn items={EXPERIENCE} /> */}

        <SectionDivider title="Projects" />
        <Projects items={PROJECTS} />

        <SectionDivider title="Contact" />
        {/* <Contact profile={PROFILE} /> */}
        <ContactNew  profile={PROFILE}/>
      </main>

      <Footer profile={PROFILE} />
    </div>
  );
}
