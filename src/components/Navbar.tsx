import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40' >
      {/* LEFT LINKS (hidden in mobile view) */}
      <div className=' hidden md:flex gap-4 items-center flex-1'>
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Massimo</Link>
      </div>
      {/* MOBILE MENU (hidden in desktop view) */}
      <div className='md: hidden'>
        <Menu />
      </div>
      {/* RIGHT LINKS (hidden in mobile view) */}
      <div className=' hidden md:flex gap-4 items-center justify-end flex-1'>
        {/* PHONE IMAGE & NUMBER */}
        <div className='md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md  '>
          <Image src="/phone.png" alt='Phone Image' width={20} height={20}/>
          <span>36 30 1234567</span>
        </div>
        {/* LOGIN or ORDERS link (If ther is no user show the login link else show the orders link) */}
        {!user ? (
          <Link href="/login">login</Link>
        ) : (
            <Link href="/orders">orders</Link>
        )}
        {/* CART IMAGE & LINK */}
        <CartIcon/>
      </div>

    </div>
  )
}

export default Navbar
