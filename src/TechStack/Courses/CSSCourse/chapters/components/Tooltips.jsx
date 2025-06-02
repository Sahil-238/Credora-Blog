import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const Tooltips = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Tooltips</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Tooltip</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}`}</pre>
          </div>
          <div className="relative inline-block border-b border-dotted border-gray-400 group">
            Hover over me
            <div className="invisible group-hover:visible absolute w-32 bg-gray-800 text-white text-center rounded-md py-2 px-4 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              This is a tooltip
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tooltip Positions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Top Tooltip</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.tooltip-top {
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
}`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Right Tooltip</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.tooltip-right {
  top: 50%;
  left: 125%;
  transform: translateY(-50%);
}`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Bottom Tooltip</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.tooltip-bottom {
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
}`}</pre>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Left Tooltip</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.tooltip-left {
  top: 50%;
  right: 125%;
  transform: translateY(-50%);
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Tooltip Animations</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.tooltip .tooltip-text {
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltip-text {
  opacity: 1;
}`}</pre>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Keep tooltips concise and helpful</li>
          <li>Ensure tooltips are accessible via keyboard</li>
          <li>Use appropriate timing for animations</li>
          <li>Position tooltips to avoid overflow</li>
          <li>Consider mobile touch interactions</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default Tooltips; 