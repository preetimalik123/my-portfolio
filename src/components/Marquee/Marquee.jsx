// components/Marquee/Marquee.jsx

import "./Marquee.css";

const marqueeItems = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Redux Toolkit",
  "TypeScript",
  "HTML",
  "CSS",
  "Jest",
  "GIT",
  "Performance Optimization",
];

export default function Marquee() {
  return (
    <section className="marqueeSection">

      <div className="marqueeWrapper">

        <div className="marqueeTrack">

          {[...Array(2)].map((_, index) => (

            <div
              className="marqueeGroup"
              key={index}
            >

              {marqueeItems.map((item, i) => (

                <span key={i}>
                  {item}
                </span>

              ))}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}