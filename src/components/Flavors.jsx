import React from "react";
import black from "../../public/images/cherry-black-removebg-preview.png";
import darkGreen from "../../public/images/cherry-dark-green.webp";
import green from "../../public/images/cherry-green.png";
import coco from "../../public/images/creamy-coconut.webp";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const flavors = [
  { src: black, label: "BLACK CHERRY" },
  { src: darkGreen, label: "DARK CHERRY" },
  { src: green, label: "GREEN CHERRY" },
  { src: coco, label: "CREAMY COCONUT" },
];
const Flavors = () => {
  useGSAP(() => {
    gsap.from(".flavor", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".flavor",
        start: "top center",
      },
      stagger: 0.3,
      ease: "power1.inOut",
    });
    gsap.from("#flavors-title", {
      y: -100,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#flavors-title",
        start: "top center",
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="flavors-section"
      className="bg-secondary pt-15 py-[20px] w-[100dvw] flex flex-col align items-center gap-5"
    >
      <h1
        id="flavors-title"
        className="max-[340px]:px-7 text-center font-bold font-heading text-primary text-4xl xl:text-6xl max-[375px]:text-3xl"
      >
        Discover the different flavors
      </h1>
      <div className="grid grid-cols-2 grid-items-center  gap-6">
        {flavors.map((flavor) => {
          return (
            <div
              className="flex flex-col items-center group flavor bg-accent rounded-md "
              key={flavor.label}
            >
              <img
                className="w-[30dvw] min-w-[] max-[410px]:w-[40dvw]"
                src={flavor.src}
                alt="dr pepper flavor"
              />
              <p className="self-stretch bg-primary transition-opacity duration-700 group-hover:opacity-100 opacity-0 -mt-2 text-secondary text-center font-bold text-xl md:text-2xl font-heading xl:text-4xl xl:my-2">
                {flavor.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Flavors;
