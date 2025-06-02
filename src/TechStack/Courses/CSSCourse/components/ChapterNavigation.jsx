import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import courseStructure from '../courseConfig';

const ChapterNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get all sections from course structure
  const allSections = Object.values(courseStructure).reduce((acc, category) => {
    return [...acc, ...category.sections];
  }, []);

  // Find current section index by matching the last part of the path
  const pathParts = location.pathname.split('/');
  const currentPath = pathParts[pathParts.length - 1];
  const currentIndex = allSections.findIndex(section => {
    const sectionPathParts = section.id.split('/');
    return sectionPathParts[sectionPathParts.length - 1] === currentPath;
  });

  // Get previous and next sections
  const previousSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
      {previousSection ? (
        <button
          onClick={() => navigate(`/css-course/${previousSection.id}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <FiArrowLeft />
          <span>Previous: {previousSection.title}</span>
        </button>
      ) : (
        <div></div>
      )}
      
      {nextSection ? (
        <button
          onClick={() => navigate(`/css-course/${nextSection.id}`)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <span>Next: {nextSection.title}</span>
          <FiArrowRight />
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ChapterNavigation; 