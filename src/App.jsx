// src/App.jsx

import { motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";
import Marquee from "./components/Marquee/Marquee";
import Contact from "./components/Contact/Contact";
import BackgroundEffects from "./components/Background/BackgroundEffects";

import useLenis from "./hooks/useLenis";
import useMousePosition from "./hooks/useMousePosition";
import useScrollAnimations from "./hooks/useScrollAnimations";

import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/utilities.css";

export default function App() {

  // SMOOTH SCROLL
  useLenis();

  // MOUSE POSITION
  const mousePosition =
    useMousePosition();

  // SCROLL ANIMATIONS
  const {
    gridY,
    glowRotate,
    backgroundColor,
    textY,
  } = useScrollAnimations();

  return (

    <motion.div
      className="app"
      style={{
        background: backgroundColor,
      }}
    >

      {/* BACKGROUND EFFECTS */}
      <BackgroundEffects
        mousePosition={mousePosition}
        gridY={gridY}
        glowRotate={glowRotate}
      />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero textY={textY} />

      {/* ABOUT */}
      <About />

      {/* EXPERIENCE */}
      <Experience />

      {/* PROJECTS */}
      <Projects />

      {/* TECH STACK */}
      <TechStack />

      {/* MARQUEE */}
      <Marquee />

      {/* CONTACT */}
      <Contact />

    </motion.div>
  );
}