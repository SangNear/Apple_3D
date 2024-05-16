import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constant'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='w-full screen-max-width flex justify-between items-center'>
        <img src={appleImg} width={20} height={20} alt='apple' />
        <div className='flex gap-4 max-sm:hidden'>
          {navLists.map((nav, index) => {
            return (
              <div key={index} className='text-sm text-gray px-5 cursor-pointer hover:text-white text-gray cursor-pointer hover:text-white transition-all' >
                {nav}
              </div>
            )
          })}
        </div>
        <div className='flex gap-7'>
          <img src={searchImg} alt='search' width={20} height={20} />
          <img src={bagImg} alt='bag' width={20} height={20} />
        </div>


      </nav>
    </header>
  )
}

export default Navbar