import React, { useEffect } from 'react'
import './addToCartBtn.css'
import { useRecoilState } from 'recoil'
import cartAtom from '../../atoms/cartAtom'
import cartItems from '../../atoms/cartItems'

const AddToCartBtn = (props) => {

  const [qty, setQty] = useRecoilState(cartAtom);
  const [cartList, setCartList] = useRecoilState(cartItems);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('cart-items-storage', JSON.stringify(items))
    setQty(qty + 1);

  }

  const ifRepeated = (product, []) => {

    var isRepeated = false;

    for (let i = 0; i < cartList.length; i++) {
      if (product.id === cartList[i].id) {
        isRepeated = true;
      }
    }
    return isRepeated;
  }


  function addToCart() {
    const newCartList = [...cartList, props.productData]
    if (ifRepeated(props.productData, newCartList)) {
      console.log('Esta Repetido')
    }
    else {
      setCartList(newCartList);
      saveToLocalStorage(newCartList)
      console.log(newCartList);
    }
  }

  const handleClick = (e) => {
    addToCart();
  }

  return (
    <a className='addToCartBtn' onClick={handleClick}>
      <p className='addToCartText'>Añadir al Carrito</p>
    </a>
  )
}

export default AddToCartBtn