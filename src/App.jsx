import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import About from "./components/Overview/About.jsx";
import ProjectSection from "./sections/ProjectSection.jsx";
import Projects from "./components/MyProjects/Projects.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import Tech from "./components/Skills/Tech.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <OverviewSection/>
        <About/>
        <ProjectSection/>
        <Projects/>
        <ExperienceSection/>
        <SkillsSection/>
        <Tech/>
        <ContactSection/>
        <Footer/>
    </>
  );
};
export default App;