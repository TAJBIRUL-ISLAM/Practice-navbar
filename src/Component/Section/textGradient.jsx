import React from 'react'
import { cn } from '../Common/Libray/Utls'

export const GradientText = ({Children, className}) => {
  return (
    <>
    <span className={cn("bg-slate-400", 
    className)}>
        
        {Children}
    </span>
    </>
    
  )
}
