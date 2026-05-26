// components/Background/BackgroundEffects.jsx

import { motion } from "framer-motion";

import MouseGlow from "./MouseGlow";
import Particles from "./Particles";

import "./Background.css";

export default function BackgroundEffects({
  mousePosition,
  gridY,
  glowRotate,
}) {
  return (
    <div className="background">

      {/* CURSOR GLOW */}
      <MouseGlow mousePosition={mousePosition} />

      {/* FLOATING PARTICLES */}
      <Particles />

      {/* PERSPECTIVE GRID */}
      <motion.div
        style={{ y: gridY }}
        className="grid"
      />

      {/* GLOW EFFECTS */}
      <motion.div
        style={{ rotate: glowRotate }}
        className="glow glowOne"
      />

      <motion.div
        className="glow glowTwo"
      />

    </div>
  );
}