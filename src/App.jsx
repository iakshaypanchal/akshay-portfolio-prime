import React from "react";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS } from "./data/profile";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <div className="app-root">
      <main className="container">
        {/* About (card) */}
        <About profile={PROFILE} />

        <SectionDivider title="Skills" />
        <Skills skills={SKILLS} />

        <SectionDivider title="Experience" />
        <Experience items={EXPERIENCE} />

        <SectionDivider title="Projects" />
        <Projects items={PROJECTS} />

        <SectionDivider title="Contact" />
        <Contact profile={PROFILE} />
      </main>

      <Footer profile={PROFILE} />
    </div>
  );
}
