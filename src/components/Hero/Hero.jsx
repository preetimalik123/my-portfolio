// components/Hero/Hero.jsx

import { motion, useScroll, useTransform } from "framer-motion";

import "./Hero.css";

export default function Hero() {

  const { scrollYProgress } = useScroll();

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200]
  );

  return (
    <section className="hero">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="heroVideo"
      >
        <source
          src="/videos/bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="videoOverlay" />

      {/* CONTENT */}
      <motion.div
        className="heroContent container"
        style={{ y: textY }}
      >

        {/* AVAILABILITY */}
        <div className="availability">

          <span className="dot" />

          Available for Frontend Opportunities

        </div>

        {/* EYEBROW */}
        <p className="eyebrow">
          FRONTEND ENGINEER • REACT • NEXTJS • TYPESCRIPT
        </p>

        {/* TITLE */}
        <h1>
          Crafting scalable{" "}

          <span>
            React & Next.js
          </span>{" "}

          experiences for modern
          digital products.
        </h1>

        {/* DESCRIPTION */}
        <p className="heroDesc">

          Frontend Engineer with 5+ years
          of experience building enterprise-grade
          applications using React.js, Next.js,
          TypeScript, Redux Toolkit, and scalable
          UI architecture.

        </p>

        {/* ACTIONS */}
        <div className="heroActions">

          <a
            href="#projects"
            className="primaryBtn"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondaryBtn"
          >
            Download Resume
          </a>

        </div>

      </motion.div>

    </section>
  );
}