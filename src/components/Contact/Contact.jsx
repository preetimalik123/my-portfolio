// components/Contact/Contact.jsx

import { motion } from "framer-motion";

import SectionLabel from "../Layout/SectionLabel";

import "./Contact.css";

export default function Contact({
  contactRef,
}) {
  return (
    <section
      id="contact"
      className="contactSection"
    >

      <motion.div
        ref={contactRef}
        className="contactContent"
      >

        <SectionLabel>
          CONTACT
        </SectionLabel>

        <h2>
          Let’s build immersive digital experiences.
        </h2>

        <p className="contactDescription">
          Open to frontend engineering opportunities,
          product collaborations, and building premium
          React & Next.js experiences.
        </p>

        <div className="contactActions">

          <a
            href="mailto:preetimalik54321@gmail.com"
            className="contactBtn primary"
          >
            Get In Touch
          </a>

          <a
            href="https://www.linkedin.com/in/preeti-malik-582a21105/"
            target="_blank"
            rel="noreferrer"
            className="contactBtn secondary"
          >
            LinkedIn
          </a>

        </div>

      </motion.div>

    </section>
  );
}