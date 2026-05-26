// components/Experience/Experience.jsx

import { motion } from "framer-motion";

import SectionLabel from "../Layout/SectionLabel";

import "./Experience.css";

const experiences = [
  {
    company: "NeoSOFT",

    role: "Software Engineer",

    duration: "Jul 2024 — Oct 2025",

    dark: false,

    description:
      "Built secure enterprise-grade frontend systems using React.js, Next.js, Redux Toolkit, RTK Query, Jest, and scalable architecture patterns.",
  },

  {
    company: "Nota Bene",

    role: "Sr. Software Developer",

    duration: "Dec 2021 — Jul 2024",

    dark: true,

    description:
      "Developed scalable React applications, reusable component systems, optimized API integrations, and responsive user-centric interfaces.",
  },

  {
    company: "Accenture",

    role: "Web Developer Associate",

    duration: "Dec 2020 — Jul 2021",

    dark: false,

    description:
      "Designed and maintained responsive email and web templates, ensuring cross-browser compatibility and scalable UI delivery.",
  },

  {
    company: "Nota Bene",

    role: "Software Developer",

    duration: "Feb 2019 — Dec 2020",

    dark: true,

    description:
      "Converted PSD designs into responsive frontend interfaces using HTML, CSS, JavaScript, and CMS integrations.",
  },
];

const cardAnimation = {
  hidden: {
    y: 80,
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    y: 0,
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Experience() {

  return (
    <section
      id="work"
      className="experienceSection"
    >

      <div className="container">

        {/* HEADER */}
        <div className="experienceHeader">

          <SectionLabel>
            EXPERIENCE
          </SectionLabel>

          <h2>
            Building scalable frontend
            products for enterprise and
            modern digital platforms.
          </h2>

        </div>

        {/* GRID */}
        <div className="experienceGrid">

          {experiences.map((item, index) => (

            <motion.article
              key={index}
              className={`experienceCard ${
                item.dark
                  ? "darkCard"
                  : ""
              }`}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >

              {/* META */}
              <div className="projectMeta">

                <span>
                  {item.duration}
                </span>

                <span>
                  {item.company}
                </span>

              </div>

              {/* ROLE */}
              <h3>
                {item.role}
              </h3>

              {/* DESCRIPTION */}
              <p>
                {item.description}
              </p>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}