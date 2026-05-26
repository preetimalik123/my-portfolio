// components/About/About.jsx

import { motion } from "framer-motion";
import SectionLabel from "../Layout/SectionLabel";

import "./About.css";

export default function About({ aboutRef }) {
  return (
    <section id="about" className="aboutSection">

      <motion.div
        ref={aboutRef}
        className="aboutContent"
      >

        <SectionLabel>
          ABOUT
        </SectionLabel>

        <h2>
          Creating scalable, immersive, and premium frontend
          experiences with modern UI systems, motion design,
          and enterprise-grade architecture.
        </h2>

        <p className="aboutDescription">
          Frontend Engineer with 5+ years of experience building
          enterprise-grade applications using React.js, Next.js,
          TypeScript, Redux Toolkit, RTK Query, and modern UI
          systems focused on scalability, accessibility, and
          performance optimization.
        </p>

      </motion.div>

    </section>
  );
}