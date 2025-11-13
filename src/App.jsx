import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import MyWork from "./sections/MyWork";
import Projects from "./sections/Projects";

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

      {/* Placeholder for contact section */}
      <section id="contact" className="min-h-screen c-space section-spacing">
        <h2 className="text-heading">Contact</h2>
        {/* Add your contact content here */}
      </section>

      {/* You can uncomment and add more sections as needed
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section> */}
    </div>
  );
};

export default App;
