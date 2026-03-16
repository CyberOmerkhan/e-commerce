"use client"

import React from 'react'
import { ProductType } from '@/Types'
import Image from 'next/image'

const ProductCard = ({product}:{product:ProductType}) => {
  return (
    <div className='border-2 border-gray-200'>
        <Image src = {product.images.blue ? product.images.blue : '/products/1g.png'}  alt = 'Image' width ={500} height = {500}/>
    </div>
  )
}

export default ProductCard
