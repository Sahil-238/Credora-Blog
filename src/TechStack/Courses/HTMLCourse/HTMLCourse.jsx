import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiBook, 
  FiType, 
  FiImage, 
  FiList, 
  FiFileText, 
  FiLayers, 
  FiGlobe, 
  FiTool, 
  FiBookOpen,
  FiMenu,
  FiX
} from 'react-icons/fi';
import courseStructure from './courseConfig';
import './HTMLCourse.css';

// Map icons to categories
const categoryIcons = {
  basics: <FiBook />,
  textFormatting: <FiType />,
  media: <FiImage />,
  tables: <FiList />,
  forms: <FiFileText />,
  graphics: <FiLayers />,
  apis: <FiGlobe />,
  advanced: <FiTool />,
  references: <FiBookOpen />
};

const HTMLCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Effect to handle initial navigation and scroll position
  useEffect(() => {
    if (location.pathname === '/html-course') {
      // Get the first topic from the course structure
      const firstCategory = Object.values(courseStructure)[0];
      const firstTopic = firstCategory.sections[0];
      
      // First scroll to top
      window.scrollTo(0, 0);
      
      // Then navigate to the first topic
      setTimeout(() => {
        navigate(`/html-course/${firstTopic.id}`);
      }, 100);
    }
  }, [location.pathname, navigate]);

  // Effect to handle scroll position after navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (sectionId) => {
    navigate(`/html-course/${sectionId}`);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button 
        className="menu-button fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <div className={`sidebar fixed md:static w-64 bg-white shadow-lg h-full z-40 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">HTML Course</h2>
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
                      <button
                        onClick={() => handleNavigation(section.id)}
                        className={`w-full text-left block py-1 px-2 rounded text-sm ${
                          location.pathname.includes(section.id)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleSidebar} />
      )}

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default HTMLCourse; 