import React from 'react'
import { cn } from './Libray/Utls'

export const Button = ({children,className}) => {
  return (
    <>
     <button className={cn("sm:py-3 py-4 sm:px-3.5 px-[25px] font-bold rounded-full text-white bg-gradient-primary opacity-70 hover:opacity-100 transition-all", 
        className
        )}>
        {children}</button>
    </>
   
  )
}
