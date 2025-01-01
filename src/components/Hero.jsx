import React from "react";
import { Model } from "./Model";

import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-heading", {
      x: -100,
      opacity: 0,
      ease: "power2.inOut",
      duration: 1,
    });
    gsap.from("#hero-para", {
      x: -100,
      opacity: 0,
      ease: "power2.inOut",
      duration: 1,
      delay: 0.5,
    });
    gsap.from("#hero-btn", {
      y: 50,
      opacity: 0,
      ease: "power2.inOut",
      duration: 1,
      delay: 0.75,
    });
  });
  return (
    <section className="bg-secondary h-[calc(100dvh-80px)] w-[100dvw]">
      <div className="px-9 md:px-14 flex gap-5 h-full items-center">
        <div className=" flex-1 -mt-10 max-[400px]:flex-2 ">
          <h1
            id="hero-heading"
            className="font-bold font-heading text-primary text-4xl xl:text-6xl max-[375px]:text-3xl"
          >
            Discover the Unique <br /> Taste of Dr Pepper
          </h1>
          <p id="hero-para" className="font-body mt-1 xl:text-xl xl:my-2">
            Welcome to Dr Pepper, where every sip is an adventure!{" "}
          </p>
          <button
            id="hero-btn"
            className="bg-primary cursor-pointer px-4 py-2 rounded-md border-none my-2 font-body font-bold text-secondary hover:text-accent"
          >
            Products
          </button>
        </div>
        <Canvas className="flex flex-1 items-center justify-center ">
          <directionalLight
            position={[1, 1, 1]}
            intensity={1000}
            color={0x9cdba6}
          />
          <directionalLight
            position={[-5, 1, 1]}
            intensity={500}
            color={0x9cdba6}
          />

          <Model />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
