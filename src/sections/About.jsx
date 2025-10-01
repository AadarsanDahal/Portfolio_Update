import React from "react";

const About = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About me </h2>

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[18rem] mt-12">
        <div className="flex item-end grid-default-colour grid-1"></div>
        {/* grid 2  */}
        <div className="grid-default-colour grid-2"></div>
        {/* grid 3  */}
        <div className="grid-default-colour grid-3"></div>
      </div>
    </section>
  );
};

export default About;
