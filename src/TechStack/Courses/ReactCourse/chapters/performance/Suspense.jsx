import React, { Suspense, useState, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy loaded component for demonstration
const LazyComponent = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        default: () => (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800">Lazy Component Loaded!</h4>
            <p className="text-green-600">This component was loaded asynchronously.</p>
          </div>
        )
      });
    }, 2000); // Simulate loading delay
  });
});

const SuspenseLesson = () => {
  const [showLazyComponent, setShowLazyComponent] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Suspense</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Suspense?</h2>
        <p className="text-gray-600 mb-4">
          React Suspense is a powerful feature that allows you to declaratively handle loading states 
          for asynchronous operations. It lets you "suspend" component rendering while waiting for 
          some asynchronous resource to load, such as code, data, or images.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-blue-800">
            <strong>Key Concept:</strong> Suspense provides a way to handle loading states without 
            manually managing loading flags in your component state.
          </p>
        </div>
      </section>

      {/* Basic Syntax */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Syntax</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <pre className="text-sm">
{`import React, { Suspense } from 'react';
import LazyComponent from './LazyComponent';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}
          </pre>
        </div>
        <p className="text-gray-600">
          The <code className="bg-gray-100 px-2 py-1 rounded">fallback</code> prop defines what to 
          show while the suspended component is loading.
        </p>
      </section>

      {/* Use Cases */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-3">1. Code Splitting</h3>
            <p className="text-gray-600 text-sm mb-3">
              Load components dynamically to reduce initial bundle size.
            </p>
            <div className="bg-gray-50 p-3 rounded text-xs">
              <code>const LazyPage = lazy(() = import('./Page'))</code>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-3">2. Data Fetching</h3>
            <p className="text-gray-600 text-sm mb-3">
              Handle loading states for data fetching operations.
            </p>
            <div className="bg-gray-50 p-3 rounded text-xs">
              <code>Suspend while fetching user data...</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Interactive Demo</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <button
            onClick={() => setShowLazyComponent(!showLazyComponent)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mb-4"
          >
            {showLazyComponent ? 'Hide' : 'Load'} Lazy Component
          </button>
          
          {showLazyComponent && (
            <Suspense fallback={
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-3"></div>
                  <span className="text-yellow-800">Loading component...</span>
                </div>
              </div>
            }>
              <LazyComponent />
            </Suspense>
          )}
        </div>
      </section>

      {/* Error Boundaries */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Error Boundaries with Suspense</h2>
        <p className="text-gray-600 mb-4">
          Suspense works well with Error Boundaries to handle both loading and error states:
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <pre className="text-sm">
{`function App() {
  return (
    <ErrorBoundary fallback={<ErrorMessage />}>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Do:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Use meaningful loading fallbacks</li>
              <li>• Place Suspense boundaries at appropriate levels</li>
              <li>• Combine with Error Boundaries for robust error handling</li>
              <li>• Use React.lazy() for code splitting</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't:</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Wrap every component in Suspense unnecessarily</li>
              <li>• Use Suspense for regular state management</li>
              <li>• Ignore error handling in async operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Example */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Example</h2>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
{`// Multiple lazy components with nested Suspense
const HomePage = lazy(() => import('./pages/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<AppSkeleton />}>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<PageSkeleton />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/profile" element={
            <Suspense fallback={<ProfileSkeleton />}>
              <ProfilePage />
            </Suspense>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Takeaways</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="text-blue-800 space-y-2">
            <li>• Suspense simplifies handling of asynchronous operations</li>
            <li>• Works seamlessly with React.lazy() for code splitting</li>
            <li>• Provides declarative loading states without manual state management</li>
            <li>• Can be nested for granular loading control</li>
            <li>• Should be combined with Error Boundaries for complete error handling</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:text-blue-800 flex items-center px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
        >
          ← Previous: Lazy Loading
        </button>
        <button
          onClick={() => console.log('Navigate to Virtualization')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Virtualization →
        </button>
      </div>
    </motion.div>
  );
};

export default SuspenseLesson;