<<<<<<< HEAD
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { playImg } from '../utils'

const Highlight = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: -50, duration: 1 })
  }, [])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      
    </section>
  )
}
=======
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

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
        <div className="w-full flex mb-12 items-end justify-between">
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
      </div>
    </section>
  );
};
>>>>>>> 574dfc2743cca7bd1575f7eaeb8c03031c486804

export default Highlight;
