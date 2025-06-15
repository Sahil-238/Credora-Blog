import React, { useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBook, FiFileText, FiCode, FiLayers, FiDatabase, FiPackage, FiServer, FiTool, FiCheckCircle } from 'react-icons/fi';
import courseConfig from './courseConfig';

// Map icons to categories
const categoryIcons = {
  basics: <FiBook className="w-5 h-5" />,
  forms: <FiFileText className="w-5 h-5" />,
  advanced: <FiCode className="w-5 h-5" />,
  oop: <FiLayers className="w-5 h-5" />,
  database: <FiDatabase className="w-5 h-5" />,
  xml: <FiPackage className="w-5 h-5" />,
  ajax: <FiServer className="w-5 h-5" />,
  examples: <FiCheckCircle className="w-5 h-5" />,
  reference: <FiTool className="w-5 h-5" />
};

const PHPCourse = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Effect to handle initial navigation
  useEffect(() => {
    if (location.pathname === '/php-course') {
      // Get the first topic from the course structure
      const firstCategory = Object.values(courseConfig)[0];
      const firstTopic = firstCategory.sections[0];
      navigate(firstTopic.id);
    }
  }, [location.pathname, navigate]);

  // Helper function to check if a route is active
  const isRouteActive = (sectionId) => {
    const currentPath = location.pathname.split('/').pop();
    return currentPath === sectionId;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">PHP Course</h2>
          <nav>
            {Object.entries(courseConfig).map(([key, category]) => (
              <div key={key} className="mb-6">
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  {categoryIcons[key]}
                  <span className="font-semibold">{category.title}</span>
                </div>
                <ul className="space-y-2 ml-6">
                  {category.sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        to={section.id}
                        className={`block py-1.5 px-3 rounded text-sm transition-colors ${
                          isRouteActive(section.id)
                            ? 'bg-blue-50 text-blue-600 font-medium'
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
      <div className="flex-1 ml-64">
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PHPCourse; 