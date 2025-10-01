import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className="container mx-auto  max-w 7xl">
      <Navbar />
      <Hero />
      <About />
      {/* <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
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
