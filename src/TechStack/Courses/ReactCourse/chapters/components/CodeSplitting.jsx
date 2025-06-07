import React, { Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Lazy loaded components
const HeavyChart = lazy(() => {
  // Simulate a heavy component load
  return new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./examples/HeavyChart')), 
      1500
    )
  );
});

const HeavyTable = lazy(() => {
  return new Promise(resolve => 
    setTimeout(() => 
      resolve(import('./examples/HeavyTable')), 
      2000
    )
  );
});

// Loading fallback components
const ChartPlaceholder = () => (
  <div className="animate-pulse space-y-4 p-4 bg-white rounded-lg shadow">
    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  </div>
);

const TablePlaceholder = () => (
  <div className="animate-pulse space-y-4 p-4 bg-white rounded-lg shadow">
    <div className="h-8 bg-gray-200 rounded w-1/3"></div>
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-10 bg-gray-200 rounded"></div>
      ))}
    </div>
  </div>
);

// Route-based code splitting example
const RouteExample = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = {
    home: lazy(() => import('./examples/Home')),
    about: lazy(() => import('./examples/About')),
    contact: lazy(() => import('./examples/Contact'))
  };

  const TabComponent = tabs[activeTab];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex border-b border-gray-200">
        {Object.keys(tabs).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="p-4">
        <Suspense fallback={<div className="animate-pulse h-32 bg-gray-200 rounded"></div>}>
          <TabComponent />
        </Suspense>
      </div>
    </div>
  );
};

// Component-based code splitting example
const ComponentExample = () => {
  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => setShowChart(!showChart)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showChart ? 'Hide' : 'Show'} Chart
        </button>
        <button
          onClick={() => setShowTable(!showTable)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {showTable ? 'Hide' : 'Show'} Table
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showChart && (
          <Suspense fallback={<ChartPlaceholder />}>
            <HeavyChart />
          </Suspense>
        )}
        {showTable && (
          <Suspense fallback={<TablePlaceholder />}>
            <HeavyTable />
          </Suspense>
        )}
      </div>
    </div>
  );
};

const CodeSplitting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Code Splitting</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Code Splitting?</h2>
        <p className="text-gray-600 mb-4">
          Code splitting is a technique that allows you to split your code into small chunks which
          you can then load on demand. This helps reduce the initial bundle size and improve the
          application's performance.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Key Benefit:</strong> Code splitting helps you avoid loading code that the user
            might not need, and helps you create a better loading experience.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Route-Based Code Splitting</h2>
        <p className="text-gray-600 mb-4">
          One of the most common approaches is to split code based on routes. This example shows
          how to load different components based on the selected tab.
        </p>
        <RouteExample />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Component-Based Code Splitting</h2>
        <p className="text-gray-600 mb-4">
          You can also split individual components that are large or used infrequently. This example
          demonstrates loading heavy components on demand.
        </p>
        <ComponentExample />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Approaches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">React.lazy</h3>
            <p className="text-gray-600 mb-4">
              The built-in way to dynamically import components in React.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm">
                {`const MyComponent = lazy(() =>
  import('./MyComponent')
);`}
              </pre>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg mb-4">Suspense</h3>
            <p className="text-gray-600 mb-4">
              Wrapper component that shows a fallback while content is loading.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <pre className="text-sm">
                {`<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Do's</h3>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Split at route level first</li>
              <li>Use meaningful chunk names</li>
              <li>Analyze bundle sizes</li>
              <li>Implement loading states</li>
              <li>Consider user experience</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-red-800 mb-2">Don'ts</h3>
            <ul className="list-disc list-inside text-red-700 space-y-2">
              <li>Split too granularly</li>
              <li>Forget error boundaries</li>
              <li>Ignore loading performance</li>
              <li>Split small components</li>
              <li>Neglect caching strategies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">When to Use Code Splitting</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Large applications with many routes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Heavy components not needed immediately</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Features used by a small percentage of users</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Admin sections or advanced features</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex justify-between">
        <Link
          to="/react-course/error-boundaries"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Error Boundaries
        </Link>
        <Link
          to="/react-course/performance"
          className="text-blue-600 hover:text-blue-800"
        >
          Performance Optimization →
        </Link>
      </div>
    </motion.div>
  );
};

export default CodeSplitting;