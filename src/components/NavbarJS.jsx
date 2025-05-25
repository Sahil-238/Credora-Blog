import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavbarJS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const jsTopics = [
    {
      title: "JavaScript Basics",
      subtopics: [
        "Introduction",
        "Syntax",
        "Variables",
        "Data Types",
        "Operators",
        "Control Flow"
      ]
    },
    {
      title: "JavaScript Advanced",
      subtopics: [
        "Functions",
        "Objects",
        "Arrays",
        "DOM Manipulation",
        "Events",
        "Async Programming"
      ]
    },
    {
      title: "JavaScript ES6+",
      subtopics: [
        "Arrow Functions",
        "Destructuring",
        "Spread Operator",
        "Classes",
        "Modules",
        "Promises"
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <Link to="/" className="ml-4 font-semibold text-xl text-gray-800">
              JavaScript Tutorial
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/javascript/references" className="text-gray-600 hover:text-blue-600">References</Link>
            <Link to="/javascript/exercises" className="text-gray-600 hover:text-blue-600">Exercises</Link>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed left-0 top-16 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
        <div className="p-4">
          {jsTopics.map((topic, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{topic.title}</h3>
              <ul className="space-y-2">
                {topic.subtopics.map((subtopic, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={`/javascript/${subtopic.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                    >
                      {subtopic}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavbarJS;