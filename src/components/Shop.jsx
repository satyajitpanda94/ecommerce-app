import React from 'react'
import { PRODUCTS } from '../Products'
import Product from './Product'
import './css/Shop.css'

export default function Shop() {
  return (<>
    <header>Panda Mart</header>
    <div className='shop-container'>
      {
        PRODUCTS.map(product=>
             <Product data={product} key={product.id}/>
        )
      }
    </div>
    </>
  )
}
