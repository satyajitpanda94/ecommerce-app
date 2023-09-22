import React from 'react'
import './css/Product.css'
import {  useShopContext } from '../context/ShopContextProvider';
import formatCurrency from '../utils/formatCurrency'

export default function Product({ data }) {
    const { addToCart, getNoOfItems }= useShopContext();
    const { id,productName, price, productImage } = data;

    return (
        <div className='product-container'>
            <img src={productImage} alt='product' />
            <div className="name">{productName}</div>
            <div className="price"> {formatCurrency(price)}</div>
            <button className='addtocart' onClick={()=>addToCart(id)}>
                Add to cart{getNoOfItems(id)>0 && <> - {getNoOfItems(id)}</>}
            </button>
        </div>
    )
}
