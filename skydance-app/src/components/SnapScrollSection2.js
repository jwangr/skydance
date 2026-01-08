"use client";

import { useEffect, useRef } from "react";

export default function SnapScrollSection2({
  children,
  className = "",
  visibility = 0.1, // proportion of section that must be visible to trigger snap
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const nav = document.querySelector("header");
    const navHeight = nav ? nav.offsetHeight : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= visibility) {
            // Snap to section
            const y =
              section.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          }
        });
      },
      {
        threshold: visibility,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [visibility]);

  return (
    <section
      ref={sectionRef}
      className={className}
      style={{ scrollMarginTop: "0px" }}
    >
      {children}
    </section>
  );
}
