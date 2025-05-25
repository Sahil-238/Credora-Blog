import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Credora Logo" 
                className="h-24 w-auto" // Increased height from h-8 to h-12
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;