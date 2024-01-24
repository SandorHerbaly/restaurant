import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-red-200 text-red-500 h-12 md:h-24 p-4 lg:p-20 xl:p-40 flex items-center justify-between'>
      <Link href="/" className=' font-bold text-xl '>MASSIMO</Link>
      <p>&copy;ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer
