import React, { useEffect } from "react";
import { Model } from "./Model";

import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canRef = useRef();
  const canvasWrapperRef = useRef();

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
  }, []);

  const tl = gsap.timeline({});

  useGSAP(() => {
    if (canRef.current) {
      gsap.to(canRef.current.rotation, {
        y: 0.25,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    }
    if (canvasWrapperRef.current) {
      tl.to(canvasWrapperRef.current, {
        y: window.innerWidth < 1000 ? "77vh" : "96vh",
        x: window.innerWidth < 1000 ? "-25vw" : "-27vw",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "80% top", //80% of hero with top of view port
          scrub: true,
        },
        ease: "power1.inOut",
        onComplete: () => {
          tl.to(".original", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
          });
        },
        onReverseComplete: () => {
          tl.to(".original", {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          });
        },
      });
    }
  }, []);

  return (
    <>
      <section
        id="hero"
        className="bg-secondary h-[calc(100dvh-80px)] w-[100dvw]"
      >
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
          <div ref={canvasWrapperRef} className="h-[60dvh] w-[33dvw]">
            <Canvas>
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

              <Model ref={canRef} />
            </Canvas>
          </div>
        </div>
      </section>
      <section className="h-[85dvh] max-[1000px]:h-[75dvh] bg-secondary">
        <div className="flex flex-col items-center">
          <h1
            id="original-h1"
            className="original font-bold font-heading text-primary text-4xl xl:text-6xl max-[375px]:text-3xl opacity-0 -translate-y-9"
          >
            "Dr Pepper: Always Original."
          </h1>
          <p className="original font-body mt-1 xl:text-xl xl:my-2">
            Experience the fantastic flavor!
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
