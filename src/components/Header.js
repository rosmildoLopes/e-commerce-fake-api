import React,{ useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
// Import icons
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  // header state
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [ isActive, setIsActive ] = useState(false);
  const {itemAmount} = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) 
      : setIsActive(false) 
    })
  })
  return (
    <header className={`${isActive ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg py-4'
      : 'bg-blue-600 shadow-xl py-6' } fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img className='max-w-[40px]' src={Logo} alt='company logo'></img>
          </div>
        </Link>
        <div className='cursor-pointer flex relative max-w-[50px]' onClick={ ()  => setIsOpen(!isOpen)}>
          <BsCart className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-white text-[12px]
            w-[18px] h-[18px] rounded-full flex justify-center items-center'>{itemAmount}
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
