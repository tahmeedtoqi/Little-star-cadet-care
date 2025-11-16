import React, { useState } from 'react';
import { navLinks } from '../constants';
import { MenuIcon, XIcon } from './Icons';
import logo from '../assets/logo.png';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Little Star And Cadet Care Logo" className="h-12 w-12" />
          <span className="font-bold text-lg hidden sm:block">Little Star And Cadet Care</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-300 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#" className="hidden lg:block bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Join Us
        </a>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0'} overflow-hidden`}>
        <div className="bg-black bg-opacity-80 backdrop-blur-sm px-6 pb-6 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block w-full text-center py-2 hover:bg-gray-700 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#" className="w-full text-center bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
