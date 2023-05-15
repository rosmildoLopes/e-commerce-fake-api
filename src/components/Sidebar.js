import React, { useContext } from "react";
//import Link
import { Link } from "react-router-dom";

// Import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// Import components
import CartItem from "../components/CartItem";

// Import contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white w-full fixed top-0 h-full
     shadow-2xl md:w-[35vw] lg:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* sidebar header */}
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b bg-pink-500">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <div className="flex flex-col gap-y-3 py-4 mt-4 bg-green-500 h-7  ">
          <div className=" flex justify-between items-center w-full">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total :</span>
              {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart icon */}
            <div
              onClick={clearCart}
              className="cursor-pointer bg-red-500 text-white h-12 w-12 flex justify-center items-center 
          text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to="/"
            className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium
        "
          >
            View Cart
          </Link>
          <Link
            className="bg-gray-primary flex p-4 justify-center items-center text-white w-full font-medium
        "
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
