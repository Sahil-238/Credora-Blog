import React from 'react';
import { Link } from 'react-router-dom';
import { FiBook, FiX, FiChevronRight } from 'react-icons/fi';

const courseLinks = [
  { name: 'JavaScript', path: '/javascript-course' },
  { name: 'CSS', path: '/css-course' },
  { name: 'React', path: '/react-course' },
  { name: 'Node.js', path: '/nodejs-course' },
  { name: 'Java', path: '/java-course' },
  { name: 'Python', path: '/python-course' },
  { name: 'PHP', path: '/php-course' },
  { name: 'SQL', path: '/sql-course' },
  { name: 'Bootstrap', path: '/bootstrap-course' },
  { name: 'Data Science', path: '/data-science' },
  { name: 'Machine Learning', path: '/machine-learning' },
  { name: 'Mobile Development', path: '/mobile-development' },
  { name: 'UI/UX Design', path: '/ui-ux-design' },
  { name: 'C', path: '/c-course' },
];

const MobileSidebar = ({ open, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[9999] transition-all duration-300 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Overlay with blur */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 sm:w-80 bg-gradient-to-br from-gray-900 via-blue-900 to-black rounded-r-2xl shadow-2xl border-r border-white/10 z-[10000] transform transition-transform duration-300 flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ maxWidth: '90vw' }}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-xl font-bold text-white tracking-wide mx-auto text-center w-full">Courses</h2>
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 shadow-lg focus:outline-none"
            onClick={onClose}
            aria-label="Close menu"
          >
            <FiX className="w-7 h-7" />
          </button>
        </div>
        {/* Course Links */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {courseLinks.map((course) => (
            <Link
              key={course.name}
              to={course.path}
              onClick={onClose}
              className="flex items-center w-full px-4 py-3 rounded-xl text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              <FiBook className="mr-3 text-white/80" />
              <span className="flex-1 text-left">{course.name}</span>
              <FiChevronRight className="ml-auto text-white/50" />
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default MobileSidebar; 