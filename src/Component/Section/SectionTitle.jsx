import React from 'react'
import { cn } from '../Common/Libray/Utls'
import { GradientText } from './textGradient'

export const SectionTitle = ({children, className}) => {
  return (
    <>
    <h1 className={cn("font-Space Grotesk font-bold text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]", 
    className
        
      )}>
          Problem &  Solution
          
      </h1>
    </>
    
  )
}
