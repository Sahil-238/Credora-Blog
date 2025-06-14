import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Authentication HOC
const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      // Simulate auth check
      const checkAuth = () => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
          setUser({ name: 'John Doe', role: 'admin' });
        }
      };
      checkAuth();
    }, []);

    if (!isAuthenticated) {
      return (
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-yellow-700">Please log in to access this content.</p>
          <button
            onClick={() => {
              localStorage.setItem('token', 'demo-token');
              setIsAuthenticated(true);
              setUser({ name: 'John Doe', role: 'admin' });
            }}
            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Log In (Demo)
          </button>
        </div>
      );
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

// Error Boundary HOC
const withErrorBoundary = (WrappedComponent) => {
  return class WithErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, info) {
      console.error('Error caught by boundary:', error, info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-red-700 font-medium mb-2">Something went wrong</h3>
            <p className="text-red-600">{this.state.error?.message}</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Try Again
            </button>
          </div>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Loading State HOC
const withLoading = (WrappedComponent, loadingMessage = 'Loading...') => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="p-4 flex items-center justify-center">
          <div className="space-y-4 w-full max-w-md">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600">{loadingMessage}</p>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

// Example Components
const SecretData = ({ user }) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h3 className="font-medium mb-2">Secret Data</h3>
    <p className="text-gray-600">Welcome, {user.name}!</p>
    <p className="text-gray-500">Role: {user.role}</p>
  </div>
);

const BuggyComponent = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('Simulated error!');
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-medium mb-2">Buggy Component</h3>
      <p className="text-gray-600 mb-4">Click the button to simulate an error.</p>
      <button
        onClick={() => setShouldError(true)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Trigger Error
      </button>
    </div>
  );
};

const DataComponent = ({ data }) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h3 className="font-medium mb-2">Data Component</h3>
    <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
      {JSON.stringify(data, null, 2)}
    </pre>
  </div>
);

// Apply HOCs
const ProtectedSecretData = withAuth(SecretData);
const SafeBuggyComponent = withErrorBoundary(BuggyComponent);
const LoadingDataComponent = withLoading(DataComponent);

const HigherOrderComponents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setData({
        id: 1,
        title: 'Sample Data',
        description: 'This is some sample data loaded after a delay'
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-8">Higher-Order Components Pattern</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are Higher-Order Components?</h2>
        <p className="text-gray-600 mb-4">
          A higher-order component (HOC) is an advanced technique in React for reusing component logic.
          HOCs are not part of the React API, but they are a pattern that emerges from React's
          compositional nature.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>Key Concept:</strong> A higher-order component is a function that takes a component
            and returns a new component with additional props or behavior.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Authentication HOC Example</h2>
        <p className="text-gray-600 mb-4">
          The withAuth HOC adds authentication logic to any component, protecting it from
          unauthorized access.
        </p>
        <ProtectedSecretData />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Error Boundary HOC Example</h2>
        <p className="text-gray-600 mb-4">
          The withErrorBoundary HOC adds error handling capabilities to components,
          preventing crashes and providing fallback UI.
        </p>
        <SafeBuggyComponent />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Loading State HOC Example</h2>
        <p className="text-gray-600 mb-4">
          The withLoading HOC adds loading state handling to components, showing a
          skeleton loader while data is being fetched.
        </p>
        <LoadingDataComponent isLoading={isLoading} data={data} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Do's</h3>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Use composition for HOCs</li>
              <li>Pass unrelated props through</li>
              <li>Maintain component contract</li>
              <li>Use meaningful display names</li>
              <li>Handle ref forwarding when needed</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-red-800 mb-2">Don'ts</h3>
            <ul className="list-disc list-inside text-red-700 space-y-2">
              <li>Mutate the input component</li>
              <li>Use HOCs inside render method</li>
              <li>Assume component internal state</li>
              <li>Forget to hoist static methods</li>
              <li>Create HOCs with side effects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">When to Use HOCs</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>When you need to share common functionality across components</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>For cross-cutting concerns like authentication or logging</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>When you want to enhance components without modifying them</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>For conditional rendering based on permissions or states</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8 flex justify-between">
        <Link
          to="/react-course/render-props"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Render Props
        </Link>
        <Link
          to="/react-course/composition"
          className="text-blue-600 hover:text-blue-800"
        >
          Component Composition →
        </Link>
      </div>
    </motion.div>
  );
};

export default HigherOrderComponents;