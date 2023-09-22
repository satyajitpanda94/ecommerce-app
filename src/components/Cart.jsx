import React from 'react'
import {  useShopContext } from '../context/ShopContextProvider'
import './css/Cart.css'
import CartItems from './CartItems'
import formatCurrency from '../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cartItems, getItem } = useShopContext();
  const navigate = useNavigate();
  return (
           <div className='cart-container'>
            <header>Your cart items</header>
                {
                  cartItems.map(item=><CartItems item={item}/>) 
                }
            <div className='totalprice'>
              Total : {
              formatCurrency(cartItems.reduce((total,item)=>{
                const itemPrice=getItem(item.id).price;
                return total+itemPrice*item.quantity;
              },0))
              }
            </div>
            <button onClick={()=>navigate('/')}>Continue Shopping</button>
          </div>
        )
}
