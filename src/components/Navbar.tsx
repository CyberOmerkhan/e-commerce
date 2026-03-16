import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import Home, { Bell, HomeIcon, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
      <Link href = '' className = 'flex items-center'> 
            <Image 
                src = '/logo.png' 
                alt = 'Trend' 
                width = {36} 
                height = {36} 
                className = 'w-6 h-6 md:w-9 md:h-9'
            />
            <p className='hidden md:block text-base font-medium tracking-wider'>TRENDLAMA.</p>
      </Link>
      
      <div className = 'flex items-center gap-6'>
        <SearchBar />
        <Link href ="/">
          <HomeIcon className='w-4 h-4 text-gray-600'/>
        </Link>
        <Bell className='w-4 h-4 text-gray-600' />
        <ShoppingCart className='w-4 h-4 text-gray-600' /> 
        <Link href = '/login'>
          Sign In
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
