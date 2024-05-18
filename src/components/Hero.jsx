import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
const Hero = () => {
  const [video, setvideo] = useState(window.innerWidth < 760? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideo(smallHeroVideo)
    }
    else {
      setvideo(heroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])
  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 1
    })
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.5

    })
  }, [])
  return (
    <section className='w-full  nav-height bg-black relative '>
      <div className='h-5/6 w-full flex-center flex-col  '>
        <p id='hero-title' className='text-3xl text-gray max-md:mb-10 font-semibold opacity-0 flex-center flex-col'>IPHONE 15 PRO</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} key={video} className='pointer-events-none'>
            <source src={video} type='video/mp4'></source>
          </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center translate-y-20 opacity-0'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero