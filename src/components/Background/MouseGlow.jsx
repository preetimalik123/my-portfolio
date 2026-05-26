// components/Background/MouseGlow.jsx

import { motion } from "framer-motion";

export default function MouseGlow({
  mousePosition,
}) {
  return (
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
  );
}