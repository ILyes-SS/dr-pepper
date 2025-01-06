import React from "react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const History = () => {
  useGSAP(() => {
    gsap.from("#history", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: "#history",
        start: "top 60%",
      },
    });
    gsap.from(".history", {
      y: -60,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".history",
        start: "top 60%",
      },
    });
  }, []);
  return (
    <section className="bg-primary relative w-screen h-[130dvh] py-5 flex flex-col items-center xl:flex-row xl:px-4">
      <div
        id="history"
        className="bg-secondary rounded-lg w-10/12 p-10 relative top-10 xl:py-14 xl:left-6 "
      >
        <h1 className="history font-bold font-heading text-primary text-4xl xl:text-6xl max-[375px]:text-3xl">
          The Timeless Tale of Dr Pepper
        </h1>
        <p className=" original font-body mt-1 xl:text-xl xl:my-2">
          Dr Pepper, created in 1885 in Waco, Texas, is America’s oldest major
          soft drink. Born out of a pharmacist’s curiosity to craft a unique
          beverage, it became a sensation with its bold, incomparable blend of
          23 flavors.
        </p>
      </div>
      <img
        className="w-full xl:w-8/12 h-auto max-h-[65vh] object-cover"
        src="../../public/images/image.png"
        alt="black and white image of a dr pepper factory"
      />
    </section>
  );
};

export default History;
