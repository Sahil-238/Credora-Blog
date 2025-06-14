import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getNavigation } from '../utils/navigationUtils';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const TopicNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the current ID from the path
  const pathParts = location.pathname.split('/');
  const currentId = pathParts[pathParts.length - 1];
  
  console.log('Current Path:', location.pathname);
  console.log('Current ID:', currentId);
  
  const { previous, next } = getNavigation(currentId);
  
  console.log('Navigation Data:', { previous, next });

  const handleNavigation = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
    // Scroll to top with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't render navigation if we're on the main course page
  if (location.pathname === '/javascript-course') {
    return null;
  }

  return (
    <div className="mt-12 border-t pt-8">
      <div className="flex justify-between items-center">
        {previous && (
          <button
            onClick={() => handleNavigation(`/javascript-course/${previous.id}`)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <FiArrowLeft className="w-5 h-5" />
            <div className="text-left">
              <div className="text-sm text-gray-600">Previous Topic</div>
              <div className="font-medium">{previous.title}</div>
            </div>
          </button>
        )}

        {next && (
          <button
            onClick={() => handleNavigation(`/javascript-course/${next.id}`)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <div className="text-right">
              <div className="text-sm text-gray-600">Next Topic</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <FiArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopicNavigation; 