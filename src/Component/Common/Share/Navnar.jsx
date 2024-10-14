import { Container } from '../../Container'
import { Button } from '../button'
import { Logo } from './Logo'
import React from 'react'

export const Navbar = () => {
  return (
    <>
       <nav className='py-5'>
        <Container>
         <div className='flex justify-between items-center gap-2.5 px-2 sm:px-5 lg:px-[30px] py-2 sm:py-3.5 lg:py-5 bg-white rounded-full '>
            <div><Logo/></div>
            <div className='hidden lg:flex justify-center items-center gap-3'>
                {Navitem.map(({label, link}, i)=>(
                   <a href={link}>
                   <p className='text-accent text-sm xl:text-base hover:text-primary transition-colors cursor-pointer'>
                    {label}
                   </p>
               </a>  
                ))}
               
            </div>
            <div>
                <button className='lg:hidden block text-accent'>
                    <div className='space-y-1'>
                        <span className='block w-6 h-0.5 bg-black'></span>
                        <span className='block w-6 h-0.5 bg-black'></span>
                        <span className='block w-6 h-0.5 bg-black'></span>

                    </div>
                </button>
                <Button>Get Started</Button>

            </div>
        </div>
        </Container>
        </nav> 
        
        
    </>
  )
}

const Navitem =[
    {
        label:"Problem & Solution",
        link:"#",
    },
    {
        label:"Industries We Serve",
        link:"#",
    },
    {
        label:"How it works",
        link:"#",
    },
    {
        label:"Testimonials",
        link:"#",
    },
]