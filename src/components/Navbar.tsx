import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 shadow-md">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent focus:outline-none">
              Devantics
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative text-md font-semibold">
            <Link to="/" className="font-semibold text-gray-900 hover:text-blue-500 transition-colors text-md">Home</Link>
            <Link to="/services" className="font-semibold text-gray-900 hover:text-blue-500 transition-colors text-md">Services</Link>
            <Link to="/about" className="font-semibold text-gray-900 hover:text-blue-500 transition-colors text-md">About Us</Link>
            <Link to="/portfolio" className="font-semibold text-gray-900 hover:text-blue-500 transition-colors text-md">Portfolio</Link>
            <a href="#" className="font-semibold text-gray-900 hover:text-blue-500 transition-colors text-md">Blog</a>
            <Link to="/contact" className="font-semibold text-gray-900 hover:text-blue-500 transition-colors text-md">Contact</Link>
            {/* SearchBar component */}
            <div className="relative">
              <SearchBar />
            </div>
          </nav>
          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6 absolute top-full left-0 w-full z-40 rounded-b-2xl animate-fade-in-down">
          <Link to="/" className="block py-3 px-2 text-gray-900 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="block py-3 px-2 text-gray-900 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="block py-3 px-2 text-gray-900 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/portfolio" className="block py-3 px-2 text-gray-900 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <a href="#" className="block py-3 px-2 text-gray-900 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Blog</a>
          <Link to="/contact" className="block py-3 px-2 text-gray-900 font-semibold hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="mt-4">
            <SearchBar />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
