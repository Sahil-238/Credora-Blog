import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, Bell } from 'lucide-react';
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const { isSignedIn } = useUser();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    {
      name: 'Courses', href: '/courses', hasDropdown: true, dropdownItems: [
        { name: 'JavaScript', href: '/javascript-course' },
        { name: 'CSS', href: '/css-course' },
        { name: 'React', href: '/react-course' },
        { name: 'Node.js', href: '/nodejs-course' },
        { name: 'Java', href: '/java-course' },
        { name: 'Python', href: '/python-course' },
        { name: 'PHP', href: '/php-course' },
        { name: 'SQL', href: '/sql-course' },
        { name: 'Bootstrap', href: '/bootstrap-course' },
        { name: 'Web Development', href: '/courses/web-development' },
        { name: 'Data Science', href: '/courses/data-science' },
        { name: 'Mobile Development', href: '/courses/mobile-development' },
        { name: 'UI/UX Design', href: '/courses/ui-ux-design' }
      ]
    },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false }
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(e.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <img src={assets.logo} alt="EduNest" className="h-8 lg:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={el => dropdownRefs.current[index] = el}
              >
                {item.hasDropdown ? (
                  <button
                    className="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-900 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => handleDropdown(index)}
                    aria-haspopup={true}
                    aria-expanded={activeDropdown === index}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-900 hover:text-blue-600 hover:bg-blue-50 ${
                      location.pathname === item.href ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && (
                  <div className={`absolute z-50 top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                    activeDropdown === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    {item.dropdownItems.map((dropItem, i) => (
                      <Link
                        key={i}
                        to={dropItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/notifications" className="p-2 rounded-lg relative text-gray-900 hover:text-blue-600 hover:bg-blue-50">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Link>

            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="text-sm px-3 py-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="text-sm px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50 touch-manipulation"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="bg-white shadow-xl border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-gray-900 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors touch-manipulation ${
                    location.pathname === item.href ? 'bg-blue-50 text-blue-600 font-semibold' : ''
                  }`}
                  onClick={handleMobileLinkClick}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && item.dropdownItems.map((drop, i) => (
                  <Link
                    key={i}
                    to={drop.href}
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors touch-manipulation"
                    onClick={handleMobileLinkClick}
                  >
                    {drop.name}
                  </Link>
                ))}
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <button className="p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50 touch-manipulation">
                  <Search className="h-5 w-5" />
                </button>
                <Link 
                  to="/notifications" 
                  className="p-2 rounded-lg relative text-gray-900 hover:text-blue-600 hover:bg-blue-50 touch-manipulation"
                  onClick={handleMobileLinkClick}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </Link>
              </div>
              
              {isSignedIn ? (
                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="space-y-3">
                  <SignInButton>
                    <button className="w-full bg-blue-100 text-blue-700 py-3 rounded-lg font-medium hover:bg-blue-200 touch-manipulation">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 touch-manipulation">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 lg:hidden z-30" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;