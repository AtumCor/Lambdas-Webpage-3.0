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
    <div className="pointer-events-none">
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            pointer-events-auto
            fixed
            bottom-6
            left-6
            z-[9999]
            p-3
            bg-blue-600
            text-white
            rounded-full
            shadow-lg
            hover:bg-blue-700
            transition
          "
          aria-label="Scroll to top"
        >
          Scroll to the very top!!
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </div>
  );
}
