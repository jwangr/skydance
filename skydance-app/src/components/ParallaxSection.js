"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  distance = 500,
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        willChange: "transform",
        zIndex: 100,
        ...style,
      }}
    >
      <motion.div
        style={{
          y,
          zIndex: 200,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
