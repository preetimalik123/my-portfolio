import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import "./App.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const [activeSpec, setActiveSpec] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const aboutRef = useRef(null);
  const cardsRef = useRef([]);
  const marqueeRef = useRef(null);
  const contactRef = useRef(null);

  const specs = [
    {
      title: "Frontend Engineering",
      icon: "✦",
      items: [
        { tag: "React.js", text: "Scalable component-driven architecture" },
        { tag: "Next.js", text: "SSR, routing and performance optimization" },
        { tag: "TypeScript", text: "Type-safe frontend systems" },
      ],
    },
    {
      title: "Motion & Interaction",
      icon: "◉",
      items: [
        { tag: "Framer Motion", text: "Immersive motion systems and transitions" },
        { tag: "GSAP", text: "ScrollTrigger, parallax and cinematic animation" },
        { tag: "Micro Interactions", text: "Premium hover states and fluid UI feedback" },
      ],
    },
    {
      title: "UI Architecture",
      icon: "△",
      items: [
        { tag: "Redux Toolkit", text: "Scalable global state architecture" },
        { tag: "Reusable Systems", text: "Design systems and reusable components" },
        { tag: "Performance", text: "Optimized rendering and lazy loading" },
      ],
    },
    {
      title: "Deployment & Workflow",
      icon: "⬡",
      items: [
        { tag: "GitHub", text: "Version control and collaborative workflow" },
        { tag: "Vercel", text: "Frontend deployment and CI/CD" },
        { tag: "Agile", text: "Sprint-based scalable product development" },
      ],
    },
  ];

  useEffect(() => {

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {

      // ABOUT
      gsap.fromTo(
        aboutRef.current,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 75%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // EXPERIENCE CARDS
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            y: 140,
            opacity: 0,
            scale: 0.92,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      });

      
   

      // CONTACT
      gsap.fromTo(
        contactRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

    });

    return () => ctx.revert();

  }, []);

  useEffect(() => {

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  const { scrollYProgress } = useScroll();

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const glowRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#0b0d0f", "#111827", "#0f172a", "#000000"]
  );

  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div className="app" style={{ background: backgroundColor }}>

      <div className="noise" />

      <div className="background">

        {/* CURSOR GLOW */}
        <motion.div
          className="mouseGlow"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 120,
            mass: 0.5,
          }}
        />

        {/* PARTICLES */}
        <div className="particles">
          {[...Array(25)].map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <motion.div style={{ y: gridY }} className="grid" />
        <motion.div style={{ rotate: glowRotate }} className="glow glowOne" />
        <motion.div className="glow glowTwo" />

      </div>

      {/* NAV */}
      <nav className="navbar">
        <h2 className="logo">PREETI MALIK</h2>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#work">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <video autoPlay muted loop playsInline className="heroVideo">
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>

        <div className="videoOverlay" />

        <motion.div style={{ y: textY }} className="heroContent">

          <div className="availability">
            <span className="dot" />
            Available for Frontend Opportunities
          </div>

          <p className="eyebrow">
            FRONTEND ENGINEER • REACT • NEXTJS • TYPESCRIPT
          </p>

          <h1>
            Crafting scalable <span>React & Next.js</span> experiences
            for modern digital products.
          </h1>

          <p className="heroDesc">
            Frontend Engineer with 5+ years of experience building
            enterprise-grade applications using React.js, Next.js,
            TypeScript, Redux Toolkit, and scalable UI architecture.
          </p>

          <div className="heroActions">

            <a href="#projects" className="primaryBtn">
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

      {/* ABOUT */}
      <section id="about" className="contentSection">

        <motion.div ref={aboutRef}>

          <p className="sectionLabel">ABOUT</p>

          <h2>
            Creating scalable, immersive, and premium frontend
            experiences with modern UI systems, motion design,
            and enterprise-grade architecture.
          </h2>

        </motion.div>

      </section>

      {/* EXPERIENCE */}
      <section id="work" className="experienceSection">

        <div className="experienceGrid">

          <motion.div
            ref={(el) => (cardsRef.current[0] = el)}
            className="experienceCard"
          >

            <div className="projectMeta">
              <span>Jul 2024 — Oct 2025</span>
              <span>NeoSOFT</span>
            </div>

            <h2>Software Engineer</h2>

            <p>
              Built secure enterprise-grade frontend systems using
              React.js, Next.js, Redux Toolkit, RTK Query, Jest,
              and scalable architecture patterns.
            </p>

          </motion.div>

          <motion.div
            ref={(el) => (cardsRef.current[1] = el)}
            className="experienceCard darkCard"
          >

            <div className="projectMeta">
              <span>Dec 2021 — Jul 2024</span>
              <span>Nota Bene</span>
            </div>

            <h2>Sr. Software Developer</h2>

            <p>
              Developed scalable React applications, reusable component
              systems, optimized API integrations, and responsive
              user-centric interfaces.
            </p>

          </motion.div>

          <motion.div
            ref={(el) => (cardsRef.current[2] = el)}
            className="experienceCard"
          >

            <div className="projectMeta">
              <span>Dec 2020 — Jul 2021</span>
              <span>Accenture</span>
            </div>

            <h2>Web Developer Associate</h2>

            <p>
              Designed and maintained responsive email and web templates,
              ensuring cross-browser compatibility and scalable UI delivery.
            </p>

          </motion.div>

          <motion.div
            ref={(el) => (cardsRef.current[3] = el)}
            className="experienceCard darkCard"
          >

            <div className="projectMeta">
              <span>Feb 2019 — Dec 2020</span>
              <span>Nota Bene</span>
            </div>

            <h2>Software Developer</h2>

            <p>
              Converted PSD designs into responsive frontend interfaces
              using HTML, CSS, JavaScript, and CMS integrations.
            </p>

          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="projectsSection">

        <div className="projectsHeader">

          <p className="sectionLabel">FEATURED PROJECTS</p>

          <h2>
            Enterprise applications engineered for scale.
          </h2>

        </div>

        <div className="projectsGrid">

          <div className="projectCard">

            <div className="projectOverlay" />

            <p className="projectType">
              Next.js • TypeScript
            </p>

            <h3>Panelist Survey Portal</h3>

            <p>
              Multi-panel survey management platform with role-based
              dashboards, authentication, onboarding flows,
              notifications, and scalable architecture.
            </p>

            <div className="projectTags">
              <span>Redux Toolkit</span>
              <span>RTK Query</span>
              <span>Material UI</span>
            </div>

          </div>

          <div className="projectCard">

            <div className="projectOverlay" />

            <p className="projectType">
              React.js • Education Platform
            </p>

            <h3>MEDED Learning System</h3>

            <p>
              Medical education platform featuring structured learning,
              assessments, authentication, and scalable React class
              component architecture.
            </p>

            <div className="projectTags">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>Jest</span>
            </div>

          </div>

        </div>

      </section>

      {/* TECH STACK */}
      <section className="specificationsSection">

        <div className="specificationsHeader">

          <p className="sectionLabel">TECH STACK</p>

          <h2>
            Frontend systems engineered for modern products.
          </h2>

        </div>

        <div className="specificationsTable">

          {specs.map((spec, index) => (

            <div
              key={index}
              className={`specRow ${activeSpec === index ? "activeSpec" : ""}`}
              onClick={() =>
                setActiveSpec(activeSpec === index ? null : index)
              }
            >

              <div className="specTop">

                <div className="specLeft">
                  <span className="specIcon">{spec.icon}</span>
                  <h3>{spec.title}</h3>
                </div>

                <div className="specArrow">↓</div>

              </div>

              <AnimatePresence>

                {activeSpec === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="specContent"
                  >

                    <div className="specRight">

                      {spec.items.map((item, i) => (

                        <div key={i} className="specItem">

                          <div className="specTag">
                            {item.tag}
                          </div>

                          <div className="specText">
                            {item.text}
                          </div>

                        </div>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </section>

      {/* MARQUEE */}
    <section className="marqueeSection">

  <div ref={marqueeRef} className="marqueeTrack">

    {[...Array(2)].map((_, index) => (
      <div className="marqueeGroup" key={index}>

        <span>React.js</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Redux Toolkit</span>
        <span>RTK Query</span>
        <span>Framer Motion</span>
        <span>GSAP</span>
        <span>Jest</span>
        <span>Material UI</span>
        <span>Performance Optimization</span>

      </div>
    ))}

  </div>

</section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">

        <motion.div ref={contactRef}>

          <p className="sectionLabel">CONTACT</p>

          <h2>
            Let’s build immersive digital experiences.
          </h2>

          <a
            href="mailto:preetimalik54321@gmail.com"
            className="contactBtn"
          >
            Get In Touch
          </a>

        </motion.div>

      </section>

    </motion.div>
  );
}