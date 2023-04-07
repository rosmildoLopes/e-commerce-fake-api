import React,{ useContext } from 'react';
//import Link
import { Link } from 'react-router-dom';
// Import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// Import components
import CartItem from '../components/CartItem';
// Import contexts
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return ( 
    <div className={`${ isOpen ? 'right-0' : '-right-full'} bg-white w-full fixed top-0 h-full
     shadow-2xl md:w-[35vw] lg:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    
      <div className='flex justify-center items-center py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
