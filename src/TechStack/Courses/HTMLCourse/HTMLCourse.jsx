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

  const handleSectionClick = (sectionId) => {
    navigate(sectionId);
  };

  return (
    <div className="course-container">
      <div className="course-sidebar">
        <h2>HTML Course</h2>
        <div className="course-sections">
          {Object.entries(courseStructure).map(([category, { title, sections }]) => (
            <div key={category} className="course-category">
              <h3>{title}</h3>
              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className="section-button"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="course-content">
        <Outlet />
      </div>
    </div>
  );
};

export default HTMLCourse; 