import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import MyWork from "./sections/MyWork";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />

      {/* Placeholder for Work section */}
      <section id="work" className="min-h-screen c-space section-spacing">
        <h2 className="text-heading">My Work</h2>
        <MyWork />
      </section>

      {/* Placeholder for project section */}
      <section id="contact" className="min-h-screen c-space section-spacing">
        <h2 className="text-heading">Projects</h2>
        {/* Add your project content here */}
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
