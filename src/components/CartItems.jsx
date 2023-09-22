import React from 'react'
import './css/Cart.css'
import {  useShopContext } from '../context/ShopContextProvider'
import formatCurrency from '../utils/formatCurrency'

export default function CartItems({item:{id, quantity}}) {
    const { addToCart, decreaseInCart, removeFromCart, getItem} = useShopContext()
    const {productImage,productName,price}=getItem(id)
    // const {productName, price, productImage}=getItem(id);

  return (
    <div className='item-container'>
      <img src={productImage} alt='item'/>
      <div className="text-container">
        <div className='name'>{productName}</div>
        <div className='price'>{formatCurrency(price*quantity)}</div>
        <div className="button">
            <button onClick={()=>addToCart(id)}>+</button>
            <span> {quantity} </span>
            <button onClick={()=>decreaseInCart(id)}>-</button>
        </div>
        <button onClick={()=>removeFromCart(id)}>Remove</button>
      </div>
    </div>
  )
}
