import React, { useEffect, useState, useRef } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBook, FiLayout, FiTool } from 'react-icons/fi';
import courseStructure from './courseConfig';

// Map icons to categories
const categoryIcons = {
  basics: <FiBook />,
  layout: <FiLayout />,
  advanced: <FiTool />
};

const CSSCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Effect to handle initial navigation
  useEffect(() => {
    if (location.pathname === '/css-course') {
      // Get the first topic from the course structure
      const firstCategory = Object.values(courseStructure)[0];
      const firstTopic = firstCategory.sections[0];
      
      // First scroll to top
      window.scrollTo(0, 0);
      
      // Then navigate to the first topic
      setTimeout(() => {
        navigate(firstTopic.id);
      }, 100);
    }
  }, [location.pathname, navigate]);

  // Effect to handle scroll position after navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close sidebar on ESC key (mobile)
  useEffect(() => {
    if (!sidebarOpen) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [sidebarOpen]);

  // Close sidebar when clicking outside (mobile)
  useEffect(() => {
    if (!sidebarOpen) return;
    const handleClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [sidebarOpen]);

  // Helper function to check if a route is active
  const isRouteActive = (sectionId) => {
    const currentPath = location.pathname.split('/').pop();
    return currentPath === sectionId;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="sidebar-toggle md:hidden fixed top-6 left-4 z-[60] p-2 rounded-full bg-white shadow hover:bg-blue-100 transition-colors"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
        title="Open sidebar"
      >
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>

      {/* Sidebar Navigation */}
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 md:hidden" />
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg overflow-y-auto z-40 transform transition-transform duration-300 md:static md:translate-x-0 md:block
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:top-16 md:left-0 md:w-64 md:h-[calc(100vh-4rem)] md:bg-white md:shadow-lg md:overflow-y-auto`}
        style={{ transitionProperty: 'transform' }}
      >
        {/* Close button (mobile) */}
        <div className="md:hidden flex justify-end p-2">
          <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">CSS Course</h2>
          <nav>
            {Object.entries(courseStructure).map(([key, category]) => (
              <div key={key} className="mb-6">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  {categoryIcons[key]}
                  <span className="font-semibold">{category.title}</span>
                </div>
                <ul className="space-y-1 pl-6">
                  {category.sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        to={section.id}
                        className={`block py-1 px-2 rounded text-sm ${
                          isRouteActive(section.id)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => setSidebarOpen(false)}
                      >
                        {section.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default CSSCourse; 