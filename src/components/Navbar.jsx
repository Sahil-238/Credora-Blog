import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, User, Bell } from 'lucide-react';
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const { isSignedIn } = useUser();
  const location = useLocation();
  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false },
    {
      name: 'Courses', href: '/courses', hasDropdown: true, dropdownItems: [
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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeDropdown !== null && dropdownRefs.current[activeDropdown] && !dropdownRefs.current[activeDropdown].contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={assets.logo_dark} alt="EduNest" className="h-8 lg:h-10 w-auto" />
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
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'
                    }`}
                    onClick={() => handleDropdown(index)}
                    aria-haspopup={true}
                    aria-expanded={activeDropdown === index}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-transparent'
                    } ${location.pathname === item.href ? 'bg-transparent text-blue-600' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && (
                  <div className={`absolute z-30 top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
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
            <button className={`p-2 rounded-lg ${isScrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'}`}>
              <Search className="h-5 w-5" />
            </button>

            <button className={`p-2 rounded-lg relative ${isScrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'}`}>
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>

            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="text-sm px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">Sign In</button>
                </SignInButton>
                <SignUpButton>
                  <button className="text-sm px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Sign Up</button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className={`p-2 rounded-lg ${isScrolled ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' : 'text-white hover:text-blue-200 hover:bg-white/10'}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-xl mt-4 shadow-xl border border-gray-100 p-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.href}
                  className={`block px-2 py-2 text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 ${
                    location.pathname === item.href ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && item.dropdownItems.map((drop, i) => (
                  <Link
                    key={i}
                    to={drop.href}
                    className="block px-6 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {drop.name}
                  </Link>
                ))}
              </div>
            ))}

            <div className="pt-4 border-t">
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <>
                  <SignInButton>
                    <button className="w-full mb-2 bg-blue-100 text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-200">Sign In</button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">Sign Up</button>
                  </SignUpButton>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 lg:hidden z-40" onClick={toggleMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;
