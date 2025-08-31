import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const VidSection = () => {
  useGSAP(() => {
    gsap.from(".vid-para", {
      x: 50,
      opacity: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".vid-para",
        start: "bottom bottom",
      },
      stagger: 0.3,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section className=" flex flex-col justify-center items-center h-[100dvh] w-[100dvw] py-15 px-5 bg-primary">
      <div className="w-11/12">
        <iframe
          className="w-full aspect-video"
          height="360"
          src="https://www.youtube.com/embed/zqyMRzQPPo8?autoplay=1&mute=1&loop=1&playlist=zqyMRzQPPo8&modestbranding=1"
          title="Dr Pepper - So Sweet"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="flex font-body mt-3 xl:text-xl w-full text-secondary">
          <p className="vid-para">No company can beat Dr pepper</p>
          <p className="vid-para ml-auto">
            The best drink for the best audience
          </p>
        </div>
      </div>
    </section>
  );
};

export default VidSection;
