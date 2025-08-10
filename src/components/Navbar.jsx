import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav className="backdrop-blur-md fixed w-full z-50 text-white font-bold">
      <div className="flex justify-between items-center lg:py-5 px-6 py-4 relative">
        
        {/* Logo - Left */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold text-">Yasith</span>
        </div>

        {/* Desktop Menu - Center */}
        <div className="hidden md:flex items-center space-x-8 text-lg absolute left-1/2 transform -translate-x-1/2 ">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-orange-600 cursor-pointer"
            
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Right */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleMenu}
                  className="hover:text-orange-600 cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
