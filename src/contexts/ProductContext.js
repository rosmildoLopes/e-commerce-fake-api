import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  
  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [])

  return (
    <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;