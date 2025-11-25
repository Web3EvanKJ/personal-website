"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "profile", label: "Profile" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
  ];

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow mb-6 w-full sticky top-0 z-50">
      <div className="flex justify-between md:justify-center items-center px-3 md:gap-10 py-4">
        {/* Navigation Links */}
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollToSection(link.href)}
            className={`${
              activeSection === link.href
                ? "text-sky-600 font-bold"
                : "text-gray-600"
            } hover:text-sky-600 transition-colors duration-200`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
