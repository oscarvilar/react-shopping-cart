import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './cart.css'
import { useRecoilState } from 'recoil';
import cartAtom from '../../atoms/cartAtom'
import cartState from '../../atoms/cartState';

const Cart = () => {

  const [qty] = useRecoilState(cartAtom);
  const [open, setOpen] = useRecoilState(cartState)

  const handleClick = (e) =>{
    setOpen(true);
  }
  
  return (
    <div className='cart' onClick={handleClick}>
        <div className='cartQty text-gray-300'><span className='cartQtyText'>{qty}</span></div>
        <ShoppingCartIcon className="block h-6 w-6 text-gray-300" aria-hidden="true" />
    </div>
  )
}

export default Cart