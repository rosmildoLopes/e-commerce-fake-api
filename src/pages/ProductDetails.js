import React, { useContext } from "react";
// Import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the single products based in the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // Destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0 bg-purple-200">
            <img 
            className="max-w-[200px] lg:max-w-sm"
            src={image} alt={description} />
          </div>
          {/* text */}
          <div className="flex-1 lg:text-left text-center">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-auto" >{title}</h1>
            <p className="text-xl font-medium mb-6 text-red-500" >$ {price}</p>
            <p className="mb-8" >$ {description}</p>
            <button onClick={() => addToCart(product, product.id)}
            className="bg-primary py-4 px-8 text-white"> Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
