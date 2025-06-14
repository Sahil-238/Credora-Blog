import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LazyLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lazy Loading</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Lazy Loading?</h2>
        <p className="text-gray-600 mb-4">
          Lazy Loading is a performance optimization technique that defers loading of non-critical resources at page load time.
          Instead of loading everything upfront, it loads components or resources only when they are needed.
          This reduces the initial load time and improves the user experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why use Lazy Loading in React?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Improves initial load time by splitting code into smaller chunks.</li>
          <li>Loads components only when they are required, saving bandwidth.</li>
          <li>Essential for large applications to keep the app responsive.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How to implement Lazy Loading in React?</h2>
        <p className="text-gray-600 mb-4">
          React provides built-in support for lazy loading components using <code>React.lazy()</code> and <code>Suspense</code>.
          You wrap the lazy component in <code>React.lazy()</code> and use <code>Suspense</code> to show a fallback UI while loading.
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto mb-4">
{`
// Import React.lazy and Suspense
import React, { Suspense, lazy } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
`}
        </pre>
        <p className="text-gray-600">
          In this example:
          <ul className="list-disc list-inside ml-6">
            <li><code>LazyComponent</code> is loaded only when rendered.</li>
            <li><code>Suspense</code> shows a fallback UI while the component loads.</li>
          </ul>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example: Lazy Loading Routes</h2>
        <p className="text-gray-600 mb-4">
          Lazy loading is especially useful in React Router to load route components on demand.
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto mb-4">
{`
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
`}
        </pre>
        <p className="text-gray-600 mb-4">
          Each route component will be loaded only when the user navigates to that route.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Points to Consider</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Lazy loaded components introduce a slight delay when loading, so use <code>Suspense</code> to provide feedback.</li>
          <li>Lazy loading works only for default exports, so components must be exported as default.</li>
          <li>For critical components needed immediately, avoid lazy loading.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/memo"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/suspense"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default LazyLoading;
