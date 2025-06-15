import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiGitBranch, 
  FiTerminal, 
  FiBox, 
  FiPackage, 
  FiFolder, 
  FiBook,
  FiPieChart,
  FiActivity,
  FiCpu,
  FiServer,
  FiBookOpen
} from 'react-icons/fi';
import courseStructure from './courseConfig.js';

// Map icons to categories
const categoryIcons = {
  basics: <FiCode />,
  data_structures: <FiDatabase />,
  control_flow: <FiGitBranch />,
  functions: <FiTerminal />,
  oop: <FiBox />,
  modules: <FiPackage />,
  file_handling: <FiFolder />,
  libraries: <FiBook />,
  matplotlib: <FiPieChart />,
  ml: <FiActivity />,
  dsa: <FiCpu />,
  databases: <FiServer />,
  examples: <FiBookOpen />
};

const PythonCourse = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Effect to handle initial navigation
  useEffect(() => {
    if (location.pathname === '/python-course') {
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

  // Helper function to check if a route is active
  const isRouteActive = (sectionId) => {
    const currentPath = location.pathname.split('/').pop();
    return currentPath === sectionId;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="hidden md:fixed md:top-16 md:left-0 md:w-64 md:h-[calc(100vh-4rem)] md:bg-white md:shadow-lg md:overflow-y-auto md:block">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Python Course</h2>
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

      <button
        className="sidebar-toggle md:hidden fixed top-6 left-4 z-[60] p-2 rounded-full bg-white shadow hover:bg-blue-100 transition-colors"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
        title="Open sidebar"
      >
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
    </div>
  );
};

export default PythonCourse; 