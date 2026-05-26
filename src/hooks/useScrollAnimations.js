// src/hooks/useScrollAnimations.js

import {
  useScroll,
  useTransform,
} from "framer-motion";

export default function useScrollAnimations() {

  const { scrollYProgress } = useScroll();

  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -500]
  );

  const glowRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 180]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [
      "#0b0d0f",
      "#111827",
      "#0f172a",
      "#000000",
    ]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200]
  );

  return {
    gridY,
    glowRotate,
    backgroundColor,
    textY,
  };
}