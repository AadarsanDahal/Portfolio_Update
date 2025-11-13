import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ setIsOpen }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to determine which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Add offset to improve detection

      // Find which section is currently most visible in the viewport
      let current = "home"; // Default to home

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop) {
            current = sections[i];
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    setIsScrolling(true);

    const navbarHeight = document.querySelector(".navbar")?.clientHeight || 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    // Enhanced smooth scrolling with custom easing
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.5, 1000); // Max 1 second
    let startTime = null;

    // Custom easing function for smoother animation
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = easeInOutCubic(progress);
      const currentPosition = startPosition + distance * easedProgress;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();

    // Close mobile menu when clicking a link
    if (setIsOpen) {
      setIsOpen(false);
    }

    smoothScrollTo(targetId);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          className="nav-li"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={`#${item.id}`}
            className={`nav-link relative transition-all duration-300 ${
              activeSection === item.id
                ? "text-white font-medium"
                : "hover:text-white/80"
            } ${isScrolling ? "pointer-events-none" : ""}`}
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                layoutId="activeIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
            {/* Hover indicator */}
            {activeSection !== item.id && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScrollToTop = () => {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    const duration = Math.min(Math.abs(distance) * 0.5, 800);
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = easeInOutCubic(progress);
      const currentPosition = startPosition + distance * easedProgress;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 navbar">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <motion.a
            href="#home"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollToTop();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aarsan
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "./assets/close.svg" : "./assets/menu.svg"}
              alt="menu toggle"
              classNames="w-6 h-6"
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
