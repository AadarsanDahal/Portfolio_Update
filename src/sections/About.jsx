import React, { useRef, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { Frameworks } from "../components/Frameworks";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About me </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1  */}
        <div className="flex item-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="./assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[2] md:-right-0 md:top-1/2 md:-translate-y-1/2 lg:scale-[2.5]"
            alt="Coding perspective"
          />

          <div className="z-10 p-6 flex flex-col justify-end h-full w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Hi I am Aadarsan Dahal
            </h3>
            <p className="text-sm md:text-base text-gray-100">
              Over the years I have honed my skills in various programming
              languages and frameworks, allowing me to build robust and scalable
              IOT systems
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Embedded Systems
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="ESP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="C"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Circuit Designe"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Fusion 360"
              containerRef={grid2Container}
            />
            {/* <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text=""
              containerRef={grid2Container}
            /> */}
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/ardunio.jpg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/cplusplus.svg"
              containerRef={grid2Container}
            />
            <a href="./terminal.html" target="">
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="assets/logos/terminal.svg"
                containerRef={grid2Container}
              />
            </a>
          </div>
        </div>
        {/* grid 3  */}
        <div className="grid-black-color grid-3">
          <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
              <p className="headtext">Time Zone</p>
              <p className="subtext">
                I'm based in kathmandu, Nepal & open to remote work worldwide
              </p>
            </div>
            <figure className="absolute left-[30%] top-[5%]">
              <Globe />
            </figure>
          </div>
        </div>
        {/* grid 4  */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* grid 5  */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText text-lg md:text-xl">Tech Stack</p>

            <br />
            <p className="subtext text-sm md:text-base">
              My tech stack spans across hardware and software domains, covering
              IoT systems, robotics, automation, web technologies, cloud
              connectivity and databases.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
        {/* grid end  */}
      </div>
    </section>
  );
};

export default About;
