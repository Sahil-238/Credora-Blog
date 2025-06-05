import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Outlet />
      </div>
    </div>
  );
}

export default App; 