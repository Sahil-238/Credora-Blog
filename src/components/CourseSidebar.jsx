import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CourseSidebar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Debug: Log when the toggle button renders
  useEffect(() => {
    console.log('Sidebar toggle button rendered');
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar') && !event.target.closest('.sidebar-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sidebar-toggle fixed top-28 left-4 z-[11000] md:hidden bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        style={{ display: 'block' }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[10999] md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[10998] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="p-4 pt-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Course Content</h2>
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default CourseSidebar; 