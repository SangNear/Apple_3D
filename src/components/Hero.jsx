import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 1
    })
  }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full '>
        <p id='hero-title' className='text-3xl text-gray max-md:mb-10 font-semibold opacity-0 flex-center flex-col'>IPHONE 15 PRO</p>
      </div>
    </section>
  )
}

export default Hero