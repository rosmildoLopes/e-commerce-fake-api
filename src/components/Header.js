import React,{ useContext } from 'react';
// Sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// Import icons
import { BsBag } from 'react-icons/bs';

const Header = () => {

  const { isOpen, setIsOpen } = useContext( SidebarContext)
  return (
    <div>
      <div>Header</div>
      <div className='cursor-pointer flex ' onClick={ ()  => setIsOpen(!isOpen)}>
        <BsBag className='text-2xl' />
      </div>
    </div>
  );
};

export default Header;
