import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col gap-8 items-center md:flex-row md:items-start md:gap-0 md:justify-between bg-gray-800 p-8 rounded-lg '>
      <div className='flex flex-col gap-4 items-center md:items-start'>
            <Link href = '' className = 'flex items-center'> 
            <Image 
                src = '/logo.png' 
                alt = 'Trend' 
                width = {36} 
                height = {36} 
            />
            <p className='hidden md:block text-base font-medium tracking-wider text-white'>
                TRENDLAMA.
            </p>
      </Link>
      <p className='text-sm text-gray-400'>(C) 2025 Amir the Goat.</p>
      <p className='text-sm text-gray-400'>All rights reserved</p>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href = '/'>Homepage</Link>
            <Link href = '/'>Contact</Link>
            <Link href = '/'>Terms of Service</Link>
            <Link href = '/'>Privacy Policy</Link>
      </div>
      

      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href = '/'>Homepage</Link>
            <Link href = '/'>Contact</Link>
            <Link href = '/'>Terms of Service</Link>
            <Link href = '/'>Privacy Policy</Link>
      </div>


      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href = '/'>Homepage</Link>
            <Link href = '/'>Contact</Link>
            <Link href = '/'>Terms of Service</Link>
            <Link href = '/'>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default Footer
