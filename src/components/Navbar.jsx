import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search, Bell } from 'lucide-react';
import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import { assets } from '../assets/assets';
import MobileSidebar from './MobileSidebar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full flex-nowrap">
          <Link to="/" className="flex-shrink-0 z-50 flex items-center m-0 p-0">
            <img src={assets.logo} alt="EduNest" className="h-8 lg:h-10 w-auto m-0 p-0" />
          </Link>
          {/* Hamburger for mobile and tablet only */}
          <div className="flex lg:hidden z-50 items-center ml-auto">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
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
                    <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
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
                  <div className={`absolute z-50 top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 transform origin-top ${
                    activeDropdown === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    {item.dropdownItems.map((dropItem, i) => (
                      <Link
                        key={i}
                        to={dropItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
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
            <button className="p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/notifications" className="p-2 rounded-lg relative text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Link>

            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="text-sm px-3 py-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="text-sm px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden z-30 transition-opacity duration-300" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      <MobileSidebar open={isMenuOpen} onClose={toggleMenu} />
    </nav>
  );
};

export default Navbar;