import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full mt-10 text-left md:px-36">
      <div className="flex flex-col items-center justify-center gap-10 py-10 px-8 border-b border-white/30 md:flex-row md:gap-32 md:px-0">
        {/* Logo Section */}
        <div className="w-full flex flex-col items-center md:items-start">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-sm text-white/80 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae inventore modi voluptatem assumenda ab, ea quaerat
          </p>
        </div>
        
        {/* Company Section */}
        <div className="w-full flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-white mb-5 text-base">Company</h2>
          <ul className="flex w-full justify-between text-sm text-white/80 md:flex-col md:gap-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Newsletter Section - hidden on mobile, visible on md+ */}
        <div className="w-full hidden md:flex flex-col items-start">
          <h2 className="font-semibold text-white mb-5 text-base">Subscribe to our NewsLetter</h2>
          <p className="mt-6 text-sm text-white/80 text-left">
            The latest news, articles,and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 px-2 w-64 h-9 rounded text-sm outline-none"
            />
            <button className="bg-blue-600 w-24 h-9 text-white border-none rounded cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <p className="pt-4 pb-4 text-center text-xs text-white/60 md:text-sm">
        Copyright 2025 EduNest. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;