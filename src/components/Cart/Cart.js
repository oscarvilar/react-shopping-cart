import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './cart.css'
import { useRecoilState } from 'recoil';
import cartAtom from '../../atoms/cartAtom'

const Cart = () => {

  const [qty] = useRecoilState(cartAtom);
  
  return (
    <div className='addToCart'>
        <div className='addToCartQty text-gray-300'><span className='addToCartQtyText'>{qty}</span></div>
        <ShoppingCartIcon className="block h-6 w-6 text-gray-300" aria-hidden="true" />
    </div>
  )
}

export default Cart