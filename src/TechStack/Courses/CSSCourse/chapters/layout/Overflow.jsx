import React from 'react';
import { motion } from 'framer-motion';

const Overflow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Overflow</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overflow Properties</h2>
        <div className="space-y-6">
          {/* Basic Overflow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Basic Overflow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Basic overflow values */
.container {
  overflow: visible;    /* Content flows outside */
  overflow: hidden;     /* Content is clipped */
  overflow: scroll;     /* Always show scrollbars */
  overflow: auto;       /* Show scrollbars when needed */
}

/* Separate axis overflow */
.container {
  overflow-x: hidden;   /* Horizontal overflow */
  overflow-y: auto;     /* Vertical overflow */
}`}
              </pre>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">overflow: visible</p>
                <div className="relative">
                  <div className="h-24 w-full bg-gray-50 p-4 border border-gray-200">
                    <div className="bg-blue-100 p-2 absolute w-[150%]">
                      This content overflows but remains visible outside its container
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">overflow: hidden</p>
                <div className="h-24 w-full bg-gray-50 p-4 border border-gray-200 overflow-hidden">
                  <div className="bg-pink-100 p-2 w-[150%]">
                    This content is clipped at the container boundaries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Behavior */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Scroll Behavior</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Smooth scrolling */
.container {
  scroll-behavior: smooth;
}

/* Scroll snapping */
.scroll-container {
  scroll-snap-type: x mandatory;
}
.scroll-item {
  scroll-snap-align: start;
}

/* Scroll padding */
.container {
  scroll-padding: 1rem;
  scroll-padding-top: 4rem; /* For fixed headers */
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="overflow-x-auto scroll-smooth">
                <div className="flex space-x-4 w-[200%] p-4">
                  <div className="flex-none w-1/4 bg-blue-100 p-4 rounded">
                    Scroll Item 1
                  </div>
                  <div className="flex-none w-1/4 bg-pink-100 p-4 rounded">
                    Scroll Item 2
                  </div>
                  <div className="flex-none w-1/4 bg-purple-100 p-4 rounded">
                    Scroll Item 3
                  </div>
                  <div className="flex-none w-1/4 bg-green-100 p-4 rounded">
                    Scroll Item 4
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Overflow */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Text Overflow</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Text overflow handling */
.text-container {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multi-line ellipsis */
.multiline-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}
              </pre>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Single line ellipsis</p>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="w-48 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
                    This is a very long text that will be truncated with an ellipsis
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Multi-line ellipsis</p>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="w-48 line-clamp-2">
                    This is a longer text that spans multiple lines and will be truncated after two lines with an ellipsis at the end to indicate there is more content
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Overflow Techniques */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Advanced Overflow Techniques</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
              <pre className="whitespace-pre-wrap">
{`/* Custom scrollbar styling */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #4B5563 #E5E7EB;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #E5E7EB;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 4px;
}

/* Overlay scrolling */
.overlay-scroll {
  overflow-y: overlay;
}`}
              </pre>
            </div>
            <div className="h-48 overflow-y-auto bg-gray-50 p-4 rounded scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="bg-white p-3 rounded shadow">
                    Scrollable content item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Overflow Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Use overflow-auto instead of overflow-scroll when possible</li>
          <li>Consider mobile devices when implementing custom scrollbars</li>
          <li>Test overflow behavior across different browsers</li>
          <li>Use scroll-padding-top with fixed headers</li>
          <li>Implement smooth scrolling for better UX</li>
          <li>Consider accessibility when hiding content</li>
          <li>Use text-overflow with caution on important content</li>
          <li>Test overflow behavior with dynamic content</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Overflow; 