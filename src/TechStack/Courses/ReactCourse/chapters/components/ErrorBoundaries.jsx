import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Generic Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 rounded-lg border border-red-200">
          <h3 className="text-red-700 font-medium mb-2">Something went wrong</h3>
          <p className="text-red-600 mb-4">{this.state.error?.message}</p>
          {this.state.errorInfo && (
            <details className="bg-white p-4 rounded-lg mb-4">
              <summary className="cursor-pointer text-gray-700 mb-2">Error Details</summary>
              <pre className="text-sm overflow-auto">
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Example Components that might error
const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error('I crashed on count 5!');
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-4">Buggy Counter</h3>
      <p className="mb-4">Current count: {count}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <p className="text-sm text-gray-500 mt-2">
        This counter will crash when it reaches 5
      </p>
    </div>
  );
};

const AsyncComponent = () => {
  const [shouldFetch, setShouldFetch] = useState(false);

  if (shouldFetch) {
    // Simulating an async error
    throw new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-4">Async Error Example</h3>
      <button
        onClick={() => setShouldFetch(true)}
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Fetch Data
      </button>
      <p className="text-sm text-gray-500 mt-2">
        This will simulate an async error
      </p>
    </div>
  );
};

const NestedErrorExample = () => {
  const [shouldError, setShouldError] = useState(false);

  const throwError = () => {
    throw new Error('Nested component error!');
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-4">Nested Error Example</h3>
      {shouldError && throwError()}
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Trigger Nested Error
      </button>
      <p className="text-sm text-gray-500 mt-2">
        This will trigger an error in a nested component
      </p>
    </div>
  );
};

const ErrorBoundaries = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Error Boundaries</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are Error Boundaries?</h2>
        <p className="text-gray-600 mb-4">
          Error Boundaries are React components that catch JavaScript errors anywhere in their child
          component tree, log those errors, and display a fallback UI instead of the component tree
          that crashed.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Key Point:</strong> Error boundaries work like a JavaScript catch {} block, but for
            components. They're particularly useful for handling unexpected errors and providing better
            user experience.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Counter with Error Example</h2>
        <p className="text-gray-600 mb-4">
          This example shows how an error boundary catches a runtime error in a counter component.
          Try incrementing the counter to 5 to see the error boundary in action.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Async Error Handling</h2>
        <p className="text-gray-600 mb-4">
          Error boundaries can also handle errors in async operations. This example demonstrates
          how to handle errors that occur during data fetching.
        </p>
        <ErrorBoundary>
          <AsyncComponent />
        </ErrorBoundary>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nested Error Boundaries</h2>
        <p className="text-gray-600 mb-4">
          You can nest error boundaries to create more granular error handling. This example shows
          how errors can be contained to specific sections of your app.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ErrorBoundary>
            <NestedErrorExample />
          </ErrorBoundary>
          <ErrorBoundary>
            <NestedErrorExample />
          </ErrorBoundary>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Error Boundary Lifecycle</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <h3 className="font-medium text-lg mb-2">getDerivedStateFromError</h3>
            <p className="text-gray-600">
              Used to render a fallback UI after an error has been thrown. This method is called
              during the "render" phase, so side-effects are not permitted.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">componentDidCatch</h3>
            <p className="text-gray-600">
              Used to log error information. This method is called during the "commit" phase, so
              side-effects are permitted (e.g., logging to an error reporting service).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Do's</h3>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Use error boundaries for graceful failures</li>
              <li>Place boundaries strategically</li>
              <li>Provide meaningful error messages</li>
              <li>Log errors for debugging</li>
              <li>Implement recovery mechanisms</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-red-800 mb-2">Don'ts</h3>
            <ul className="list-disc list-inside text-red-700 space-y-2">
              <li>Catch errors for event handlers</li>
              <li>Use boundaries for flow control</li>
              <li>Swallow errors without logging</li>
              <li>Ignore error details</li>
              <li>Place boundaries too granularly</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 flex justify-between">
        <Link
          to="/react-course/component-composition"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Component Composition
        </Link>
        <Link
          to="/react-course/code-splitting"
          className="text-blue-600 hover:text-blue-800"
        >
          Code Splitting →
        </Link>
      </div>
    </motion.div>
  );
};

export default ErrorBoundaries;