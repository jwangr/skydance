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

// Demo usage
function Demo() {
  return (
    <div className="bg-gray-50">
      <section className="h-screen flex items-center justify-center bg-blue-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Scroll Down</h1>
          <p className="text-gray-600">
            The next section will snap to the top when you scroll to it
          </p>
        </div>
      </section>

      <SnapScrollSection className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold mb-8">Snap Section!</h2>
          <p className="text-xl mb-6">
            This section snapped to the top when you scrolled to it.
          </p>
          <p className="text-lg opacity-90">
            Now you can continue scrolling normally through the content below.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Feature One</h3>
              <p>
                Your content goes here with images, divs, and any other
                children.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3">Feature Two</h3>
              <p>
                The component accepts any React children you want to include.
              </p>
            </div>
          </div>

          <div className="mt-12 h-96 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
            <p className="text-2xl">More content here...</p>
          </div>
        </div>
      </SnapScrollSection>

      <section className="h-screen flex items-center justify-center bg-green-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Normal Section</h2>
          <p className="text-gray-600">This section scrolls normally</p>
        </div>
      </section>
    </div>
  );
}
