import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='border-t border-gray-300'>
       <div className='flex'>
        <Image src={"/image/pic.jpg.jpeg"} alt='hero-image' width={50} height={50} className='mt-3 ml-6'/>
        <p className='mt-5 ml-8 font-semibold text-[24px]'>All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer
