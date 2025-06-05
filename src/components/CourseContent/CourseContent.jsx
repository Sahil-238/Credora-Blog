import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseContent = ({ courseConfig, currentChapter, courseName }) => {
  const [expandedChapters, setExpandedChapters] = useState({});

  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  return (
    <div className="course-content flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex-shrink-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{courseName}</h2>
        <nav>
          {Object.entries(courseConfig.chapters).map(([chapterId, chapter]) => (
            <div key={chapterId} className="mb-4">
              <button
                onClick={() => toggleChapter(chapterId)}
                className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-gray-700">{chapter.title}</span>
                {chapter.subChapters && (
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      expandedChapters[chapterId] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
              
              {chapter.subChapters && expandedChapters[chapterId] && (
                <div className="ml-4 mt-2 space-y-1">
                  {Object.entries(chapter.subChapters).map(([subId, subChapter]) => (
                    <Link
                      key={subId}
                      to={`/techstack/courses/${courseName.toLowerCase().replace(/\s+/g, '-')}/${chapterId}/${subChapter.path}`}
                      className={`block px-3 py-2 text-sm rounded-lg ${
                        currentChapter === subChapter.path
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {subChapter.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {currentChapter ? (
          <div className="max-w-4xl mx-auto">
            {/* Course content will be rendered here by the router */}
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to {courseName}
            </h1>
            <p className="text-gray-600">
              Select a chapter from the sidebar to begin learning.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent; 