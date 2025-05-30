import React from 'react';
import { motion } from 'framer-motion';

const Pagination = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Pagination</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Pagination Styles</h2>
        <div className="space-y-6">
          {/* Basic Pagination */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Pagination</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.pagination li {
  margin: 0 2px;
}

.pagination a {
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.pagination a:hover {
  background-color: #ddd;
}

.pagination .active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}`}
              </pre>
            </div>
            <div className="flex justify-center">
              <ul className="flex space-x-1">
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">1</a></li>
                <li><a href="#" className="px-4 py-2 border rounded bg-blue-500 text-white">2</a></li>
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">3</a></li>
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">4</a></li>
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">5</a></li>
              </ul>
            </div>
          </div>

          {/* Rounded Pagination */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Rounded Pagination</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.pagination-rounded a {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-rounded .active {
  background-color: #4CAF50;
  color: white;
}`}
              </pre>
            </div>
            <div className="flex justify-center">
              <ul className="flex space-x-2">
                <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">1</a></li>
                <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border bg-blue-500 text-white">2</a></li>
                <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">3</a></li>
                <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">4</a></li>
                <li><a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-gray-100">5</a></li>
              </ul>
            </div>
          </div>

          {/* Pagination with Icons */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Pagination with Icons</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.pagination-icons {
  display: flex;
  align-items: center;
}

.pagination-icons .icon {
  font-size: 1.2em;
}

.pagination-icons .disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`}
              </pre>
            </div>
            <div className="flex justify-center">
              <ul className="flex items-center space-x-2">
                <li><a href="#" className="px-3 py-2 border rounded hover:bg-gray-100">←</a></li>
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">1</a></li>
                <li><a href="#" className="px-4 py-2 border rounded bg-blue-500 text-white">2</a></li>
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">3</a></li>
                <li><span className="px-2">...</span></li>
                <li><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">8</a></li>
                <li><a href="#" className="px-3 py-2 border rounded hover:bg-gray-100">→</a></li>
              </ul>
            </div>
          </div>

          {/* Responsive Pagination */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Responsive Pagination</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`@media screen and (max-width: 480px) {
  .pagination-responsive li:not(.prev):not(.next):not(.active) {
    display: none;
  }
  
  .pagination-responsive li.active {
    display: inline-block;
  }
}

.pagination-responsive .prev,
.pagination-responsive .next {
  font-weight: bold;
}`}
              </pre>
            </div>
            <div className="flex justify-center">
              <ul className="flex items-center space-x-2">
                <li className="prev"><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">Previous</a></li>
                <li className="hidden sm:block"><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">1</a></li>
                <li className="hidden sm:block"><span className="px-2">...</span></li>
                <li><a href="#" className="px-4 py-2 border rounded bg-blue-500 text-white">5</a></li>
                <li className="hidden sm:block"><span className="px-2">...</span></li>
                <li className="hidden sm:block"><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">10</a></li>
                <li className="next"><a href="#" className="px-4 py-2 border rounded hover:bg-gray-100">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Pagination Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Keep pagination controls consistent across your site</li>
          <li>Use clear and accessible navigation labels</li>
          <li>Indicate the current page clearly</li>
          <li>Show a reasonable number of page links</li>
          <li>Consider using infinite scroll for mobile</li>
          <li>Include prev/next buttons for better navigation</li>
          <li>Make clickable areas large enough for touch</li>
          <li>Provide visual feedback on hover/active states</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Pagination; 