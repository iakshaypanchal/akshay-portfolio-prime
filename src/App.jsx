import React from "react";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS } from "./data/profile";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import SectionDivider from "./components/SectionDivider";
// import ExperienceNew from "./components/ExperienceNew";
import ExperienceLinkedIn from "./components/ExperienceLinkedIn";

export default function App() {
  return (
    <div className="app-root">
      <main className="container">
        {/* About (card) */}
        <About profile={PROFILE} />

        <SectionDivider title="Skills & Tools" />
        <Skills skills={SKILLS} />

        <SectionDivider title="Work Experience" />
        {/* <Experience items={EXPERIENCE} /> */}
        <ExperienceLinkedIn items={EXPERIENCE} />

        <SectionDivider title="Projects" />
        <Projects items={PROJECTS} />

        <SectionDivider title="Contact" />
        <Contact profile={PROFILE} />
      </main>

      <Footer profile={PROFILE} />
    </div>
  );
}
