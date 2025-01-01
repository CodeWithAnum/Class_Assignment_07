import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='border-b border-gray-300'>
       <div className='flex lg:gap-[944px] mt-2'>
         <Image src={"/image/pic.jpg.jpeg"} alt='hero-image' width={50} height={50} className='mb-1 ml-6'/>
         <ul className='flex lg:gap-6 gap-4 mt-3 font-semibold text-xl'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Server-Side-Data-Fetching">Server Side</Link></li>
            <li><Link href="Client-Side-Data-Fetching">Client Side</Link></li>
         </ul>
       </div>
    </div>
  )
}

export default NavBar
