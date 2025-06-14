import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const RWDGridView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Grid View</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Grid Layout</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            CSS Grid Layout is a powerful system for creating two-dimensional layouts. It allows you to
            create complex grid-based layouts with rows and columns, making it perfect for responsive design.
          </p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
}

/* Responsive grid items */
.grid-item {
  grid-column: span 12;  /* Full width on mobile */
}

@media (min-width: 768px) {
  .grid-item {
    grid-column: span 6;  /* Two columns on tablet */
  }
}

@media (min-width: 1024px) {
  .grid-item {
    grid-column: span 4;  /* Three columns on desktop */
  }
}`}</pre>
          </div>

          {/* Example Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-100 p-4 rounded">Grid Item 1</div>
            <div className="bg-blue-100 p-4 rounded">Grid Item 2</div>
            <div className="bg-blue-100 p-4 rounded">Grid Item 3</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Grid Areas and Templates</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  gap: 20px;
}

@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`}</pre>
          </div>

          {/* Example Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] gap-4 mt-6">
            <div className="bg-gray-200 p-4 rounded md:col-span-3">Header</div>
            <div className="bg-gray-200 p-4 rounded">Nav</div>
            <div className="bg-gray-200 p-4 rounded">Main Content</div>
            <div className="bg-gray-200 p-4 rounded">Aside</div>
            <div className="bg-gray-200 p-4 rounded md:col-span-3">Footer</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Auto-Fit and Minmax</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            The auto-fit and minmax() functions allow you to create flexible, responsive grids without
            media queries. This pattern is particularly useful for card layouts and image galleries.
          </p>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* For maintaining aspect ratio */
.card {
  aspect-ratio: 16/9;
}`}</pre>
          </div>

          {/* Example Auto-Fit Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-100 p-4 rounded aspect-video flex items-center justify-center">Card 1</div>
            <div className="bg-blue-100 p-4 rounded aspect-video flex items-center justify-center">Card 2</div>
            <div className="bg-blue-100 p-4 rounded aspect-video flex items-center justify-center">Card 3</div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use grid-template-areas for complex layouts</li>
          <li>Implement mobile-first grid designs</li>
          <li>Consider using auto-fit/auto-fill for responsive grids</li>
          <li>Set appropriate gap sizes for different screen sizes</li>
          <li>Use minmax() to create flexible column widths</li>
          <li>Test grid layouts across different devices</li>
          <li>Combine Grid with Flexbox when appropriate</li>
          <li>Use grid-auto-flow for better content organization</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default RWDGridView; 