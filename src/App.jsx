import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import MyWork from "./sections/MyWork";
import Projects from "./sections/Projects";
import Contact from "./sections/contact";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />

      {/* Work section with Timeline */}
      <section id="work" className="min-h-screen c-space section-spacing">
        <h2 className="text-heading">My Work</h2>
        <MyWork />
      </section>

      {/* Projects section with Card components */}
      <Projects />

      {/* Contact section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 md:px-8 lg:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Aadarsan Dahal. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
