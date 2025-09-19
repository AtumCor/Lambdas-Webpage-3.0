"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6
        right-6
        z-[9999]
        p-3
        bg-blue-600
        text-white
        rounded-full
        shadow-lg
        transition-opacity
        duration-250
        hover:bg-blue-700
        pointer-events-auto
      `}
      style={{
        opacity: visible ? 1 : 0,
      }}
      aria-label="Scroll to top"
    >
      Back to Top &#9650;
      {/* <FontAwesomeIcon icon={faArrowUp} size="sm" /> */}
    </button>
  );
}
