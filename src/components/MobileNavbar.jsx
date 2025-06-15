import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiUser, FiSearch, FiBell, FiHome, FiBook, FiInfo, FiFileText, FiMail, FiSettings, FiSun, FiMoon } from 'react-icons/fi';

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const unreadNotifications = 3; // Example value, replace with real data
  const isSignedIn = false; // Example value, replace with real auth state
  const [coursesOpen, setCoursesOpen] = useState(false);
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

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger */}
        <button
          className="text-blue-600 dark:text-blue-400 p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-7 h-7" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex-1 flex justify-center">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </Link>

        {/* Right icons */}
        <div className="flex items-center space-x-3">
          <button className="relative text-blue-600 dark:text-blue-400 p-2 rounded-md focus:outline-none" aria-label="Notifications">
            <FiBell className="w-6 h-6" />
            {unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
            )}
          </button>
          {isSignedIn ? (
            <Link to="/profile" aria-label="Profile">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-7 h-7 rounded-full object-cover" />
            </Link>
          ) : (
            <>
              <Link to="/signin" className="text-blue-600 dark:text-blue-400 font-medium">Sign In</Link>
              <Link to="/signup" className="ml-2 px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Slide-in menu & overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-72 
          bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 
          dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
          z-50 shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(59,130,246,0.95) 0%, rgba(168,85,247,0.93) 60%, rgba(236,72,153,0.92) 100%),
            url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'20\' cy=\'20\' r=\'1.5\' fill=\'%23fff\' fill-opacity=\'0.08\'/></svg>')
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-100 dark:border-gray-800">
          <span className="font-bold text-lg text-blue-600 dark:text-blue-400">Menu</span>
          <button
            className="text-gray-600 dark:text-gray-300 p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        {/* Search input */}
        <div className="p-4 border-b border-blue-100 dark:border-gray-800">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-3 py-2 shadow-inner">
            <FiSearch className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              className="bg-transparent outline-none w-full text-gray-700 dark:text-gray-200"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col p-4 space-y-3">
          <Link to="/" className="flex items-center text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FiHome className="mr-3" /> Home
          </Link>
          {/* Courses Dropdown */}
          <button
            className="flex items-center w-full text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            onClick={() => setCoursesOpen(!coursesOpen)}
            aria-expanded={coursesOpen}
            aria-controls="mobile-courses-dropdown"
            type="button"
          >
            <FiBook className="mr-3" /> Courses
            <span className={`ml-auto transition-transform ${coursesOpen ? 'rotate-90' : ''}`}>▶</span>
          </button>
          {coursesOpen && (
            <div id="mobile-courses-dropdown" className="ml-8 mt-1 flex flex-col space-y-2 bg-white/80 dark:bg-gray-800/80 rounded-lg p-2 shadow-inner">
              {courseLinks.map(course => (
                <Link
                  key={course.name}
                  to={course.path}
                  className="pl-2 py-1 text-left text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded transition-colors"
                  onClick={() => { setMenuOpen(false); setCoursesOpen(false); }}
                >
                  {course.name}
                </Link>
              ))}
            </div>
          )}
          <Link to="/blog" className="flex items-center text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FiFileText className="mr-3" /> Blog
          </Link>
          <Link to="/about" className="flex items-center text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FiInfo className="mr-3" /> About
          </Link>
          <Link to="/contact" className="flex items-center text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FiMail className="mr-3" /> Contact
          </Link>
          <Link to="/settings" className="flex items-center text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setMenuOpen(false)}>
            <FiSettings className="mr-3" /> Settings
          </Link>
        </nav>
        {/* Dark mode toggle */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-blue-100 dark:border-gray-800 mt-auto">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Dark Mode</span>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-yellow-400 focus:outline-none"
            onClick={handleDarkModeToggle}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default MobileNavbar; 