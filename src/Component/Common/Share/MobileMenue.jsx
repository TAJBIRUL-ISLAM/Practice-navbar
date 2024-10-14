import React from 'react'
import { Logo } from './Logo'

export const MobileMenue = () => {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen z-50 bg-white p-6 overflow-y-hidden '>
        <div className='flex justify-between items-center pb-6'>
        <Logo/>
        <button className='text-black text-2xl self-end'
        aria-label='Close Menu'>
            
            &items;
        </button>


        </div>

    </div>
  )
}
