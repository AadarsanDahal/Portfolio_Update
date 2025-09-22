import React, { Suspense } from "react";
import HeroText from "../components/herotext";
import ParallaxBackground from "../components/parallexbackground";
import { Astronaut } from "../components/astronaut";
import { Canvas, useFrame } from "@react-three/fiber"; // ✅ keep useFrame here
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import { easing } from "maath"; // ✅ correct imp
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(maxWidth: 853px)" });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};
function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], // target camera position
      0.2, // smoothness
      delta
    );
  });
}

export default Hero;
