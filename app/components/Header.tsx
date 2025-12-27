'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              EduPlatform
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Courses
            </a>
            <a href="#tutors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Tutors
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
          <div className="md:hidden py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#courses" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Courses
            </a>
            <a href="#tutors" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Tutors
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

