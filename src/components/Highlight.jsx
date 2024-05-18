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

export default Highlight