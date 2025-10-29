"use client";
import { useEffect, useState, useRef } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Determine scroll direction
      if (currentY > lastScrollY.current) setScrollDir("down");
      else if (currentY < lastScrollY.current) setScrollDir("up");

      // Update visibility: only after scrolling down 200px
      if (currentY > 200) setIsVisible(true);
      else setIsVisible(false);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed z-50 p-3 rounded-full shadow-lg text-white transition-all duration-300 
        bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-110

        // /* --- Small screens --- */
        md:hidden 
        bottom-4 left-1/2 -translate-x-1/2
        ${
          scrollDir === "up" && isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        }

        // /* --- Medium and larger screens --- */
        md:flex md:items-center md:justify-center md:bottom-auto md:top-1/2 md:left-6 
        md:translate-y-[-50%] md:opacity-100 md:pointer-events-auto
      `}
      style={{
        zIndex: 9999
      }}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}
