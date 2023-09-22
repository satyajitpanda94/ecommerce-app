import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './css/Navbar.css'
import { useShopContext } from '../context/ShopContextProvider';

export default function Navbar() {
  const { getQuantityOfItems } = useShopContext();
  return (
    <div className='container'>
      <Link to='/'>Shop</Link>
      <Link to='/cart'>
        <div className='cart-box'>
          <ShoppingCart />{
            getQuantityOfItems()>0 &&
            <span className="circle">{getQuantityOfItems()}</span>
          }
        </div>
      </Link>
    </div>
  )
}
