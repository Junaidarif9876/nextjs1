"use client"

import ProductCard from '@/components/core/product.Card'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [AllProducts,SetAllProduct] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products')
     .then(response => response.json())
     .then(data => SetAllProduct(data.products))
  }, [])
  console.log(AllProducts)

  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {AllProducts.map(product => (
        <ProductCard key={product} Product={product} />
      ))}
      
    </div>
  )
}

export default Product