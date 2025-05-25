import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarJS from './NavbarJS';

function JavaScriptPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarJS />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default JavaScriptPage;