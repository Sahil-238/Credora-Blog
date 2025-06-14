import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simple Virtual List Implementation
const VirtualList = ({ items, itemHeight = 50, containerHeight = 300 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef();

  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(visibleStart, visibleEnd);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleStart * itemHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      className="border border-gray-300 rounded-lg overflow-auto"
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => (
            <div
              key={visibleStart + index}
              className="flex items-center px-4 py-3 border-b border-gray-100 bg-white hover:bg-gray-50"
              style={{ height: itemHeight }}
            >
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-4">
                {visibleStart + index + 1}
              </div>
              <div>
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Performance comparison component
const PerformanceDemo = () => {
  const [showVirtual, setShowVirtual] = useState(true);
  const [renderTime, setRenderTime] = useState(0);

  // Generate large dataset
  const largeDataset = useMemo(() => 
    Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `User ${i + 1}`,
      description: `This is user number ${i + 1} in our system`
    })), []
  );

  const measureRenderTime = (callback) => {
    const start = performance.now();
    callback();
    const end = performance.now();
    setRenderTime(end - start);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Performance Comparison</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => measureRenderTime(() => setShowVirtual(true))}
            className={`px-4 py-2 rounded-lg transition-colors ${
              showVirtual 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Virtual List
          </button>
          <button
            onClick={() => measureRenderTime(() => setShowVirtual(false))}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !showVirtual 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Regular List
          </button>
        </div>
      </div>
      
      {renderTime > 0 && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <span className="text-blue-800">
            Render time: <strong>{renderTime.toFixed(2)}ms</strong>
          </span>
        </div>
      )}

      <div className="text-sm text-gray-600 mb-4">
        Dataset: <strong>10,000 items</strong> | 
        Showing: <strong>{showVirtual ? 'Virtualized' : 'All items'}</strong>
      </div>

      {showVirtual ? (
        <VirtualList 
          items={largeDataset} 
          itemHeight={60} 
          containerHeight={400} 
        />
      ) : (
        <div className="border border-gray-300 rounded-lg overflow-auto" style={{ height: 400 }}>
          {largeDataset.slice(0, 100).map((item, index) => (
            <div
              key={item.id}
              className="flex items-center px-4 py-3 border-b border-gray-100 bg-white hover:bg-gray-50"
              style={{ height: 60 }}
            >
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm mr-4">
                {index + 1}
              </div>
              <div>
                <div className="font-medium text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            </div>
          ))}
          <div className="p-4 text-center text-gray-500">
            ... and 9,900 more items (truncated for performance)
          </div>
        </div>
      )}
    </div>
  );
};

const VirtualizationLesson = () => {
  const [activeTab, setActiveTab] = useState('concept');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Virtualization</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Virtualization?</h2>
        <p className="text-gray-600 mb-4">
          Virtualization is a technique used to efficiently render large lists or tables by only 
          rendering the items that are currently visible in the viewport. Instead of rendering 
          thousands of DOM elements, virtualization renders only what the user can see, dramatically 
          improving performance.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-yellow-800">
            <strong>Problem:</strong> Rendering 10,000+ list items creates performance bottlenecks, 
            slow scrolling, and memory issues.
          </p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-green-800">
            <strong>Solution:</strong> Virtual scrolling renders only visible items + a small buffer, 
            maintaining smooth performance regardless of list size.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {[
              { id: 'concept', label: 'Core Concepts' },
              { id: 'demo', label: 'Live Demo' },
              { id: 'implementation', label: 'Implementation' },
              { id: 'libraries', label: 'Libraries' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Core Concepts Tab */}
      {activeTab === 'concept' && (
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Without Virtualization</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Renders all 10,000 DOM elements</li>
                <li>• High memory usage</li>
                <li>• Slow initial render</li>
                <li>• Laggy scrolling</li>
                <li>• Browser may become unresponsive</li>
              </ul>
              <div className="mt-4 p-3 bg-red-50 rounded text-red-700 text-xs">
                Performance: ❌ Poor
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-3">With Virtualization</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Renders only ~10-15 visible items</li>
                <li>• Low memory footprint</li>
                <li>• Fast initial render</li>
                <li>• Smooth scrolling</li>
                <li>• Consistent performance</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded text-green-700 text-xs">
                Performance: ✅ Excellent
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-4">How It Works</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <ol className="text-blue-800 space-y-3">
              <li><strong>1. Calculate Visible Range:</strong> Determine which items are currently in viewport</li>
              <li><strong>2. Render Only Visible:</strong> Create DOM elements only for visible items</li>
              <li><strong>3. Maintain Scroll Height:</strong> Use spacers to maintain correct scroll height</li>
              <li><strong>4. Update on Scroll:</strong> Recalculate and re-render as user scrolls</li>
            </ol>
          </div>
        </section>
      )}

      {/* Live Demo Tab */}
      {activeTab === 'demo' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Performance Comparison</h3>
          <p className="text-gray-600 mb-6">
            Try both implementations and notice the difference in performance. The virtual list 
            handles 10,000 items smoothly, while the regular list struggles with just 100.
          </p>
          <PerformanceDemo />
        </section>
      )}

      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Basic Implementation</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-sm">
{`const VirtualList = ({ items, itemHeight, containerHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  // Calculate visible range
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  const visibleItems = items.slice(visibleStart, visibleEnd);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleStart * itemHeight;
  
  return (
    <div 
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map((item, index) => (
            <div key={visibleStart + index} style={{ height: itemHeight }}>
              {/* Render item content */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};`}
            </pre>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Implementation Details</h4>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Viewport Calculation</h5>
              <p className="text-gray-600 text-sm">
                Use scroll position and item height to determine which items are visible
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Dynamic Positioning</h5>
              <p className="text-gray-600 text-sm">
                Use CSS transforms to position visible items at correct scroll offset
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Scroll Height Maintenance</h5>
              <p className="text-gray-600 text-sm">
                Create a container with total height to maintain proper scrollbar behavior
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Libraries Tab */}
      {activeTab === 'libraries' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Popular Virtualization Libraries</h3>
          <div className="grid gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">react-window</h4>
              <p className="text-gray-600 text-sm mb-3">
                Lightweight library by Brian Vaughn. Efficiently renders large lists and grids.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs mb-3">
                <code>npm install react-window</code>
              </div>
              <div className="text-green-600 text-sm">✅ Recommended for most use cases</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">react-virtualized</h4>
              <p className="text-gray-600 text-sm mb-3">
                Feature-rich library with advanced components like AutoSizer, InfiniteLoader.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs mb-3">
                <code>npm install react-virtualized</code>
              </div>
              <div className="text-blue-600 text-sm">📦 More features, larger bundle size</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">@tanstack/react-virtual</h4>
              <p className="text-gray-600 text-sm mb-3">
                Modern, headless virtualization with TypeScript support and flexible API.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs mb-3">
                <code>npm install @tanstack/react-virtual</code>
              </div>
              <div className="text-purple-600 text-sm">🔥 Modern, highly customizable</div>
            </div>
          </div>
        </section>
      )}

      {/* Best Practices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices & Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">✅ Best Practices</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Use consistent item heights when possible</li>
                <li>• Add buffer items for smoother scrolling</li>
                <li>• Implement proper loading states</li>
                <li>• Consider horizontal virtualization for wide tables</li>
                <li>• Test on low-end devices</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Common Pitfalls</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Dynamic heights can be complex</li>
                <li>• Accessibility considerations</li>
                <li>• SEO impact (items not in DOM)</li>
                <li>• Keyboard navigation challenges</li>
                <li>• Focus management issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">When to Use Virtualization</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">✅ Use When:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Lists with 100+ items</li>
                <li>• Performance is critical</li>
                <li>• Mobile devices are primary target</li>
                <li>• Data sets can grow large</li>
                <li>• Memory usage is a concern</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">❌ Skip When:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Small lists (&lt;50 items)</li>
                <li>• Complex item interactions</li>
                <li>• SEO is critical</li>
                <li>• Accessibility is paramount</li>
                <li>• Development time is limited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:text-blue-800 flex items-center px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
        >
          ← Previous: Suspense
        </button>
        <button
          onClick={() => console.log('Navigate to Profiler')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Profiler →
        </button>
      </div>
    </motion.div>
  );
};

export default VirtualizationLesson;