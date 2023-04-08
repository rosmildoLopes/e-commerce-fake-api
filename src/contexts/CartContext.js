import React,{ createContext, useEffect, useState } from 'react';
// create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product, id) => {
    console.log(`Item ${id} added to the cart`)
  }
  // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id; 
    })

  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
