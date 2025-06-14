import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const Buttons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Buttons</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Button Styles</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary {
  background-color: #3B82F6;
  color: white;
  border: none;
}

.secondary {
  background-color: transparent;
  color: #3B82F6;
  border: 2px solid #3B82F6;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button States</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Hover and Focus States</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.button:hover {
  background-color: #2563EB;
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.button:active {
  transform: translateY(1px);
}`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Disabled State</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Button Variations</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.button-small {
  padding: 6px 12px;
  font-size: 14px;
}

.button-large {
  padding: 12px 24px;
  font-size: 18px;
}

.button-rounded {
  border-radius: 9999px;
}

.button-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.button-gradient {
  background: linear-gradient(to right, #3B82F6, #2563EB);
  color: white;
  border: none;
}`}</pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loading States</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.button-loading {
  position: relative;
  color: transparent;
}

.button-loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s infinite linear;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`}</pre>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use meaningful colors and maintain good contrast</li>
          <li>Ensure buttons are keyboard accessible</li>
          <li>Provide visual feedback for all states</li>
          <li>Keep button text concise and clear</li>
          <li>Maintain consistent button styles across your site</li>
          <li>Consider touch targets for mobile devices</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default Buttons; 