import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar.jsx";
import OverviewSection from "./sections/OverviewSection.jsx";
import About from "./components/Overview/About.jsx";
import ProjectSection from "./sections/ProjectSection.jsx";
import Projects from "./components/MyProjects/Projects.jsx";

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <OverviewSection/>
        <About/>
        <ProjectSection/>
        <Projects/>
    </>
  );
};
export default App;