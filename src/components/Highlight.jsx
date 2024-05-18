import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {
  useGSAP(() => {
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25
    })
  },[])
  return (
    <section id="highlights" className="h-full w-screen bg-zinc common-padding">
      <div className="screen-max-width">
        <div className="w-full flex mb-12 items-end justify-between max flex-wrap">
          <h1
            id="title"
            className="text-gray font-medium lg:text-6xl md:text-5xl text-3xl "
          >
            The highlights
          </h1>
          <div className="flex flex-center gap-5">
            <p className="link">watch the film</p>
            <p className="link">watch the event</p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlight;
