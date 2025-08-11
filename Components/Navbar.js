"use client"

import React from 'react'
import Link from 'next/link'

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  // Show the Navbar only on specific paths
  // Adjust the paths as needed based on your routing structure
  const showNavbar = ["/", "/about", "/generate"].includes(pathname)
  return (<>
    {showNavbar && <nav className='flex justify-between bg-white w-[90vw] fixed top-10 right-[5vw] rounded-full px-7 p-4'>
      {/* <nav className='flex justify-between bg-white w-[80vw] fixed top-10 right-[10vw] rounded-full px-7 p-5'> */}
      <div className="logo flex gap-20 items-center max-lg:gap-5">
        <Link href={"/"}>
          <img loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className="nav-desktop-logo h-6"></img></Link>
        <ul className='flex gap-10 max-lg:text-sm max-lg:gap-5 max-sm:gap-2 max-sm:flex-col'>
          <Link href="/"><li>Home</li></Link>
          <Link href={"/about"}><li>About Us</li></Link>
          <Link href="/"><li>GitHub</li></Link>

        </ul>
      </div>
      <div className='flex gap-3'>
        
          <button className="login bg-gray-200 p-4 rounded-lg font-bold cursor-pointer max-lg:text-sm max-lg:p-2">Log in</button>
        

        <button className="signup bg-gray-900 text-white p-4 rounded-full font-bold cursor-pointer max-lg:text-sm max-lg:p-2">Sign Up Free</button>
      </div>

    </nav>}
  </>
  )
}

export default Navbar
