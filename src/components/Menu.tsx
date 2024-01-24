"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];




const Menu = () => {
  const [open, setOpen] = useState(false)
  const user = false;
  return (
    <div>
      {/* open/close icon: condition>{if open state is false show open.png else show close.png} */}
      {!open ? (
        <Image 
          src="/open.png" 
          alt="Menu Button" 
          width={20} 
          height={20} 
          onClick={()=>setOpen(true)}
        />
      ) : (
        <Image 
          src="/close.png" 
          alt="Menu Button" 
          width={20} 
          height={20} 
          onClick={()=>setOpen(false)}
        />
      )}
      {/* menu: condition: {show menu component if state is open} */}
      {open && (
        <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
          {/* menu links: map>{in links array map each item set href end key prop and show title prop} */}
            {/* menu link: onClick > {close the menu} */}
          {links.map(item => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>          
          ))}
          {/* login link: condition>{if there is no user show login else show orders} */}
          {/* login,order,cart links: onClick > {close the menu} */}

          {!user ? (
            <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
            ) : (
              <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
              )}
          {/* cart link(client component): {if there is no user show login else show orders} */}
          <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

