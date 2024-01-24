import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className=' flex flex-col h-screen'>
      {/* TEXT CONTAINER */}
      <div className='h-1/2'>
        <h1 className=''>
          Test
        </h1>
        <button className=''>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='w-full h-1/2 relative'>
        <Image src="/slide1.png" alt='Slider Image' fill/>
      </div>
    </div>
  )
}

export default Slider
