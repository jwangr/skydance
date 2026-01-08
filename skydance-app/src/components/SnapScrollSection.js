"use client";

import { useEffect, useRef, useState } from "react";

export default function SnapScrollSection({
  children,
  className = "",
  visibility = 0.9,
}) {
  const sectionRef = useRef(null);
  const [isSnapping, setIsSnapping] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if section is entering viewport (top is between 5% and 100% of viewport)
      const isEntering = rect.top > 0 && rect.top < viewportHeight * visibility;

      if (isEntering && !isSnapping) {
        isScrolling = true;
        setIsSnapping(true);

        // dynamically get navbar height
        const nav = document.querySelector("header");
        const navHeight = nav ? nav.offsetHeight : 0;

        // Scroll manually to section offset (not scrollIntoView) ---
        const y =
          section.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({ top: y, behavior: "smooth" });

        // Reset after animation completes
        setTimeout(() => {
          isScrolling = false;
          setIsSnapping(false);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSnapping]);

  return (
    <section
      ref={sectionRef}
      className={className}
      style={{
        scrollMarginTop: "0px",
      }}
    >
      {children}
    </section>
  );
}
