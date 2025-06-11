import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Mouse Position Tracker Component
const MouseTracker = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(mousePosition);
};

// Data Fetching Component with Loading States
const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return render({ data, loading, error });
};

// Window Size Observer Component
const WindowSizeObserver = ({ render }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return render(size);
};

// Example Components using Render Props
const CursorHighlight = () => (
  <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
    <MouseTracker
      render={({ x, y }) => (
        <>
          <div
            className="absolute w-8 h-8 bg-blue-500 opacity-25 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
            style={{ left: x, top: y }}
          />
          <div className="p-4">
            <p>Move your mouse around!</p>
            <p className="text-sm text-gray-600">
              Position: ({x}, {y})
            </p>
          </div>
        </>
      )}
    />
  </div>
);

const UserDataDisplay = () => (
  <DataFetcher
    url="https://jsonplaceholder.typicode.com/users/1"
    render={({ data, loading, error }) => (
      <div className="p-4 bg-white rounded-lg shadow">
        {loading && (
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        )}
        {error && (
          <div className="text-red-500">Error: {error}</div>
        )}
        {data && (
          <div className="space-y-2">
            <h3 className="text-lg font-medium">{data.name}</h3>
            <p className="text-gray-600">{data.email}</p>
            <p className="text-sm text-gray-500">{data.company.name}</p>
          </div>
        )}
      </div>
    )}
  />
);

const ResponsiveLayout = () => (
  <WindowSizeObserver
    render={({ width, height }) => (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="font-medium mb-2">Window Dimensions</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Width:</span>
            <span className="font-mono">{width}px</span>
          </div>
          <div className="flex justify-between">
            <span>Height:</span>
            <span className="font-mono">{height}px</span>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            {width < 640 && 'Mobile View'}
            {width >= 640 && width < 1024 && 'Tablet View'}
            {width >= 1024 && 'Desktop View'}
          </div>
        </div>
      </div>
    )}
  />
);

const RenderProps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Render Props Pattern</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are Render Props?</h2>
        <p className="text-gray-600 mb-4">
          The render props pattern is a technique for sharing code between React components using a
          prop whose value is a function. A component with a render prop takes a function that returns
          a React element and calls it instead of implementing its own render logic.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Key Benefit:</strong> This pattern enables you to share stateful logic between
            components in a flexible and reusable way, while keeping the components themselves simple
            and focused.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mouse Tracking Example</h2>
        <p className="text-gray-600 mb-4">
          This example demonstrates how to use render props to create a reusable mouse position
          tracking component. The component handles all the mouse tracking logic while allowing
          consumers to render whatever they want with the position data.
        </p>
        <CursorHighlight />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Fetching Example</h2>
        <p className="text-gray-600 mb-4">
          Here's how render props can be used to create a reusable data fetching component
          that handles loading states, errors, and data presentation.
        </p>
        <UserDataDisplay />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Responsive Design Example</h2>
        <p className="text-gray-600 mb-4">
          This example shows how render props can be used to create a window size observer
          that helps with responsive design decisions.
        </p>
        <ResponsiveLayout />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Do's</h3>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Keep render prop functions pure</li>
              <li>Memoize render functions when needed</li>
              <li>Use TypeScript for better type safety</li>
              <li>Consider using children as a render prop</li>
              <li>Handle edge cases and loading states</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-red-800 mb-2">Don'ts</h3>
            <ul className="list-disc list-inside text-red-700 space-y-2">
              <li>Mutate props or state in render functions</li>
              <li>Define render functions inside other components</li>
              <li>Use render props when simpler patterns suffice</li>
              <li>Nest multiple render prop components deeply</li>
              <li>Forget to handle cleanup in useEffect</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">When to Use Render Props</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>When you need to share complex stateful logic between components</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>When you want to make a component highly customizable</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>When you need to compose components with dynamic rendering logic</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>When you want to avoid prop drilling through multiple levels</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex justify-between">
        <Link
          to="/react-course/class-components"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Class Components
        </Link>
        <Link
          to="/react-course/higher-order-components"
          className="text-blue-600 hover:text-blue-800"
        >
          Higher-Order Components →
        </Link>
      </div>
    </motion.div>
  );
};

export default RenderProps;