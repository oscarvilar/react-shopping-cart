import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './cart.css'

const Cart = () => {
  return (
    <div className='addToCart'>
        <div className='addToCartQty text-gray-300'><span className='addToCartQtyText'>1</span></div>
        <ShoppingCartIcon className="block h-6 w-6 text-gray-300" aria-hidden="true" />
    </div>
  )
}

export default Cart