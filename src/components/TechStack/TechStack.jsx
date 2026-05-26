// components/TechStack/TechStack.jsx

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import SectionLabel from "../Layout/SectionLabel";

import "./TechStack.css";

const specs = [
  {
    title: "Frontend Engineering",
    icon: "✦",

    items: [
      {
        tag: "React.js",
        text: "Scalable component-driven architecture",
      },

      {
        tag: "Next.js",
        text: "SSR, routing and performance optimization",
      },

      {
        tag: "TypeScript",
        text: "Type-safe frontend systems",
      },
    ],
  },

  {
    title: "Motion & Interaction",
    icon: "◉",

    items: [
      {
        tag: "Framer Motion",
        text: "Immersive motion systems and transitions",
      },

      {
        tag: "GSAP",
        text: "ScrollTrigger, parallax and cinematic animation",
      },

      {
        tag: "Micro Interactions",
        text: "Premium hover states and fluid UI feedback",
      },
    ],
  },

  {
    title: "UI Architecture",
    icon: "△",

    items: [
      {
        tag: "Redux Toolkit",
        text: "Scalable global state architecture",
      },

      {
        tag: "Reusable Systems",
        text: "Design systems and reusable components",
      },

      {
        tag: "Performance",
        text: "Optimized rendering and lazy loading",
      },
    ],
  },

  {
    title: "Deployment & Workflow",
    icon: "⬡",

    items: [
      {
        tag: "GitHub",
        text: "Version control and collaborative workflow",
      },

      {
        tag: "Vercel",
        text: "Frontend deployment and CI/CD",
      },

      {
        tag: "Agile",
        text: "Sprint-based scalable product development",
      },
    ],
  },
];

export default function TechStack() {

  const [activeSpec, setActiveSpec] = useState(0);

  const handleToggle = (index) => {
    setActiveSpec(
      activeSpec === index ? null : index
    );
  };

  return (
    <section className="techStackSection">

      <div className="techStackHeader">

        <SectionLabel>
          TECH STACK
        </SectionLabel>

        <h2>
          Frontend systems engineered
          for modern products.
        </h2>

      </div>

      <div className="specificationsTable">

        {specs.map((spec, index) => (

          <div
            key={index}
            className={`specRow ${
              activeSpec === index
                ? "activeSpec"
                : ""
            }`}
            onClick={() =>
              handleToggle(index)
            }
          >

            <div className="specTop">

              <div className="specLeft">

                <span className="specIcon">
                  {spec.icon}
                </span>

                <h3>
                  {spec.title}
                </h3>

              </div>

              <div className="specArrow">
                {activeSpec === index
                  ? "↑"
                  : "↓"}
              </div>

            </div>

            <AnimatePresence>

              {activeSpec === index && (

                <motion.div
                  className="specContent"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >

                  <div className="specRight">

                    {spec.items.map(
                      (item, i) => (

                        <div
                          key={i}
                          className="specItem"
                        >

                          <div className="specTag">
                            {item.tag}
                          </div>

                          <div className="specText">
                            {item.text}
                          </div>

                        </div>

                      )
                    )}

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        ))}

      </div>

    </section>
  );
}