import React from 'react';
import { Code, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, type = 'web' }) => {
  const navigate = useNavigate();

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const iconColor = type === 'web' 
    ? 'from-blue-500 to-cyan-500' 
    : 'from-purple-500 to-pink-500';
  
  const hoverColor = type === 'web' 
    ? 'hover:border-blue-300 group-hover:text-blue-600' 
    : 'hover:border-purple-300 group-hover:text-purple-600';

  return (
    <div
      className={`group bg-white border border-gray-200 ${hoverColor} rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2`}
      onClick={() => navigate(course.path)}
      tabIndex={0}
      role="button"
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(course.path); }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 sm:p-3 bg-gradient-to-r ${iconColor} rounded-xl transform group-hover:scale-110 transition-transform duration-300`}>
          {type === 'web' ? (
            <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          )}
        </div>
        <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
          {course.level}
        </span>
      </div>
      
      <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-3 transition-colors ${hoverColor}`}>
        {course.title}
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-xs sm:text-sm text-gray-600">
          <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 ${type === 'web' ? 'bg-blue-500' : 'bg-purple-500'}`}></span>
          {course.duration}
        </div>
        <div className="flex items-center text-xs sm:text-sm text-gray-600">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2"></span>
          {course.projects}
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
        <span className={`text-sm sm:text-base font-semibold ${type === 'web' ? 'text-blue-600 group-hover:text-blue-700' : 'text-purple-600 group-hover:text-purple-700'}`}>
          Learn More
        </span>
        <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:translate-x-1 transition-all ${type === 'web' ? 'group-hover:text-blue-600' : 'group-hover:text-purple-600'}`} />
      </div>
    </div>
  );
};

export default CourseCard; 