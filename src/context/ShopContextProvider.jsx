import React, { createContext, useContext, useState } from 'react'
import {PRODUCTS as items} from '../Products.js'


 const ShopContext = createContext();

 export const useShopContext= ()=> useContext(ShopContext);

export default function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id) => {
        console.log(cartItems);
        setCartItems(curritem=>{
            if(cartItems.find(item => item.id === id))
                return curritem.map(item=>item.id===id?{id,quantity:item.quantity+1}:item);
            return [...curritem, {id,quantity:1}]
        })
    }

    const decreaseInCart = (id) => {
        setCartItems(curritem=>{
            if(cartItems.find(item => item.id === id && item.quantity === 1)) 
               return curritem.filter(item=>item.id!==id)
            return curritem.map(item=>item.id===id?{id,quantity:item.quantity-1}:item)
        })
    }

    const removeFromCart=(id)=>{
        setCartItems(pre=>pre.filter(item=>item.id!==id))
    }
    
    const getNoOfItems = (id) => {
        return cartItems.find(item=>item.id===id)?.quantity || 0;
    }

    const getQuantityOfItems= ()=>{
        return cartItems.reduce((total,item)=>total+item.quantity,0);
    }

    const getItem= (id)=>{
        console.log(id)
        return items.find((item)=>item.id===id);
    }

    const shopContextValue = { cartItems, addToCart,decreaseInCart, removeFromCart, getNoOfItems, getQuantityOfItems, getItem }

    return <ShopContext.Provider value={shopContextValue}>
        {props.children}
    </ShopContext.Provider>
}
