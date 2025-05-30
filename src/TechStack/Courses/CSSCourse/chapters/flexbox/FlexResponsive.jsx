import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';

const FlexResponsive = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Responsive Flexbox Layouts</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Navigation</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Navigation Bar</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

/* Mobile navigation */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
  
  .nav-items {
    flex-direction: column;
    width: 100%;
  }
}`}</pre>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded">
                <div className="text-xl font-bold text-gray-700">Logo</div>
                <div className="flex gap-4">
                  <div className="text-blue-600">Home</div>
                  <div className="text-blue-600">About</div>
                  <div className="text-blue-600">Contact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Card Grid</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Card Layout</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;  /* Grow, shrink, basis */
  max-width: calc(33.333% - 1rem);  /* Maximum 3 cards per row */
}

@media (max-width: 768px) {
  .card {
    max-width: calc(50% - 1rem);  /* 2 cards per row */
  }
}

@media (max-width: 480px) {
  .card {
    max-width: 100%;  /* 1 card per row */
  }
}`}</pre>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 basis-[300px] max-w-[calc(33.333%-1rem)] bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Card 1</h4>
              <p className="text-gray-600">Responsive card content</p>
            </div>
            <div className="flex-1 basis-[300px] max-w-[calc(33.333%-1rem)] bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Card 2</h4>
              <p className="text-gray-600">Responsive card content</p>
            </div>
            <div className="flex-1 basis-[300px] max-w-[calc(33.333%-1rem)] bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Card 3</h4>
              <p className="text-gray-600">Responsive card content</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Responsive Content Layout</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Content with Sidebar</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`.container {
  display: flex;
  gap: 2rem;
}

.main-content {
  flex: 1;      /* Take remaining space */
}

.sidebar {
  flex: 0 0 300px;  /* Fixed width, don't grow or shrink */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .sidebar {
    flex: none;
    width: 100%;
  }
}`}</pre>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Main Content</h4>
              <p className="text-gray-600">This is the main content area that will take up most of the space.</p>
            </div>
            <div className="md:w-72 bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Sidebar</h4>
              <p className="text-gray-600">This is the sidebar with fixed width on desktop.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Responsive Flexbox Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use flex-wrap for responsive layouts</li>
          <li>Combine flex with media queries</li>
          <li>Set appropriate flex-basis values</li>
          <li>Consider mobile-first approach</li>
          <li>Use gap property for consistent spacing</li>
          <li>Test layouts at various breakpoints</li>
          <li>Consider content reordering on mobile</li>
          <li>Maintain accessibility across screen sizes</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default FlexResponsive; 