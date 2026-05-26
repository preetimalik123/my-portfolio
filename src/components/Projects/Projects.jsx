// components/Projects/Projects.jsx

import SectionLabel from "../Layout/SectionLabel";

import "./Projects.css";

const projects = [
  {
    type: "Next.js • Enterprise Platform",

    title: "Panelist Survey Portal",

    description:
      "Enterprise-grade survey management platform with role-based dashboards, onboarding workflows, authentication, notifications, and scalable frontend architecture for large-scale user management.",

    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Material UI",
    ],
  },

  {
    type: "React.js • Medical Education",

    title: "MEDED Learning System",

    description:
      "Medical learning and assessment platform featuring authentication, structured course systems, reusable React architecture, and optimized frontend workflows for scalable education delivery.",

    tags: [
      "React.js",
      "TypeScript",
      "Jest",
      "SCSS",
    ],
  },

  {
    type: "ERP • School Management",

    title: "School Data Management System",

    description:
      "Comprehensive ERP solution for managing student and teacher data including attendance tracking, grade management, scheduling, and secure role-based access for schools and institutions.",

    tags: [
      "JavaScript",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "Git",
    ],
  },

  {
    type: "E-Commerce • React Platform",

    title: "E-Commerce Website",

    description:
      "Scalable e-commerce platform focused on product browsing, secure purchasing flows, customer experience, API integrations, and performance optimization for modern online retail.",

    tags: [
      "React.js",
      "Redux",
      "REST APIs",
      "Jest",
      "CI/CD",
    ],
  },


];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projectsSection"
    >
      <div className="container">
        <div className="projectsHeader">

          <SectionLabel>
            FEATURED PROJECTS
          </SectionLabel>

          <h2>
            Enterprise applications engineered for scale.
          </h2>

        </div>

        <div className="projectsGrid">

          {projects.map((project, index) => (

            <div
              className="projectCard"
              key={index}
            >

              <div className="projectOverlay" />

              <p className="projectType">
                {project.type}
              </p>

              <h3>
                {project.title}
              </h3>

              <p className="projectDescription">
                {project.description}
              </p>

              <div className="projectTags">

                {project.tags.map((tag, i) => (

                  <span key={i}>
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}