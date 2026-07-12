import React from 'react'
import { Button } from './ui/button.jsx'
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    
      <div className='flex-start justify-around font-sans w-300'>
        <h1 className='text-white text-7xl text-center'>Find Your Dream Home in <span className='text-blue-400'>
          <Typewriter
      options={{
        strings: ["Netherlands", "Eindhoven", "Amsterdam", "Delft"],
        autoStart: true,
        loop: true,
      }}
    /></span> 
          with a click</h1>
        
    </div>

    
  )
}

export default HeroSection