import React from 'react'
import './addToCartBtn.css'
import { useRecoilState } from 'recoil'
import cartAtom from '../../atoms/cartAtom'

const AddToCartBtn = () => {

  const [qty, setQty] = useRecoilState(cartAtom);
  var cont = 0;

  const handleClick = (e) =>{
    setQty(qty+1);
}

  return (
    <a className='addToCartBtn' onClick={handleClick}>
        <p className='addToCartText'>Añadir al Carrito</p>
    </a>
  )
}

export default AddToCartBtn