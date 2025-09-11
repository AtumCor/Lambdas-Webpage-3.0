"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"; // Youtube comes from brands


export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Text */}
        <p className="text-sm">
          © 2025 Lambda Phi Epsilon at THE Ohio State University
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="mailto:info@lambdaphiepsilonosu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/lambdaphiepsilonosu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.youtube.com/@LambdaPhiEpsilonOSU"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
