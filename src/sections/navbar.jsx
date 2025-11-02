import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ setIsOpen }) {
  const [activeSection, setActiveSection] = useState("home");

  // Function to determine which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];

      // Find which section is currently most visible in the viewport
      const current = sections.reduce((visible, sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return visible;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + 100; // Add offset to improve detection

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          return sectionId;
        }
        return visible;
      }, activeSection);

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    // Optional: close mobile menu when clicking a link
    if (setIsOpen) {
      setIsOpen(false);
    }

    // Prevent default behavior to handle scroll manually
    const href = e.currentTarget.getAttribute("href");
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = document.querySelector(".navbar").clientHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          href="#home"
          className={`nav-link ${
            activeSection === "home" ? "text-white font-medium" : ""
          }`}
          onClick={handleClick}
        >
          Home
        </a>
      </li>

      <li className="nav-li">
        <a
          href="#about"
          className={`nav-link ${
            activeSection === "about" ? "text-white font-medium" : ""
          }`}
          onClick={handleClick}
        >
          About
        </a>
      </li>

      <li className="nav-li">
        <a
          href="#work"
          className={`nav-link ${
            activeSection === "work" ? "text-white font-medium" : ""
          }`}
          onClick={handleClick}
        >
          Work
        </a>
      </li>

      <li className="nav-li">
        <a
          href="#contact"
          className={`nav-link ${
            activeSection === "contact" ? "text-white font-medium" : ""
          }`}
          onClick={handleClick}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 navbar">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Aarsan
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "./assets/close.svg" : "./assets/menu.svg"}
              alt="menu toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation setIsOpen={setIsOpen} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation setIsOpen={setIsOpen} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
