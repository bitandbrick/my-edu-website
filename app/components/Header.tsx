'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#0d9494] to-[#0a7575] bg-clip-text text-transparent">
                Unity Education
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#0d9494] transition-colors font-medium">
              Home
            </a>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#0d9494] transition-colors font-medium flex items-center">
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">For Schools</a>
                  <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">For Colleges</a>
                  <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">For Universities</a>
                  <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">For Training Centers</a>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#0d9494] transition-colors font-medium flex items-center">
                Products
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniFee</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniGen</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniLearn</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniTeam</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniTime</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniPrint</a>
                  <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-[#0d9494] hover:text-white transition-colors">UniProc</a>
                </div>
              )}
            </div>

            <a href="#about" className="text-gray-700 hover:text-[#0d9494] transition-colors font-medium">
              About
            </a>

            <div className="flex items-center space-x-4">
              <button type="button" className="text-gray-700 hover:text-[#0d9494] transition-colors font-medium px-4 py-2">
                Contact
              </button>
              <button type="button" className="bg-[#0d9494] hover:bg-[#0a7575] text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md">
                Request Demo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#0d9494] focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            <a href="#home" className="block text-gray-700 hover:text-[#0d9494] transition-colors font-medium">
              Home
            </a>
            <a href="#solutions" className="block text-gray-700 hover:text-[#0d9494] transition-colors font-medium">
              Solutions
            </a>
            <a href="#products" className="block text-gray-700 hover:text-[#0d9494] transition-colors font-medium">
              Products
            </a>
            <a href="#about" className="block text-gray-700 hover:text-[#0d9494] transition-colors font-medium">
              About
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <button type="button" className="w-full text-gray-700 hover:text-[#0d9494] transition-colors font-medium px-4 py-2 text-left">
                Contact
              </button>
              <button type="button" className="w-full bg-[#0d9494] hover:bg-[#0a7575] text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
