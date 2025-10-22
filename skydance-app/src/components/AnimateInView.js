"use client";
import * as motion from "motion/react-client";

export default function AnimateInView({
  children,
  variants,
  delay = 0,
  once = true,
  style = {},
}) {
  // Default animation variants
  const defaultVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      style={style}
      initial="hidden"
      whileInView="visible"
      variants={variants || defaultVariants}
      viewport={{ once: false, amount: 0.2 }} // amount = 20% visible, animates every time element enters viewport
    >
      {children}
    </motion.div>
  );
}
