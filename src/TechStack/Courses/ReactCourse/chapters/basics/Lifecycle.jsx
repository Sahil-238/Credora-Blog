import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Lifecycle = () => {
  const classLifecycleExample = `// Class Component Lifecycle
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. Constructor - Component is initialized');
  }

  componentDidMount() {
    console.log('3. ComponentDidMount - Component is mounted to DOM');
    // Good place for API calls, subscriptions
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4. ComponentDidUpdate - Component is updated');
    if (prevState.count !== this.state.count) {
      console.log('Count changed');
    }
  }

  componentWillUnmount() {
    console.log('5. ComponentWillUnmount - Component is about to be removed');
    // Clean up subscriptions, timers
  }

  render() {
    console.log('2. Render - Component is being rendered');
    return (
      <div>Count: {this.state.count}</div>
    );
  }
}`;

  const functionalLifecycleExample = `// Functional Component with Hooks
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  console.log('1. Component rendering');

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('2. After render - Component mounted or updated');
    
    // Similar to componentWillUnmount
    return () => {
      console.log('4. Cleanup - Component will unmount');
    };
  }, [count]); // Only run if count changes

  return (
    <div>Count: {count}</div>
  );
}`;

  const mountingPhaseExample = `// Mounting Phase Example
function MountingExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // ComponentDidMount equivalent
    console.log('Component mounted');
    fetchData();

    return () => {
      // ComponentWillUnmount equivalent
      console.log('Component will unmount');
      // Cleanup code here
    };
  }, []); // Empty dependency array = run once on mount

  const fetchData = async () => {
    const result = await fetch('https://api.example.com/data');
    const json = await result.json();
    setData(json);
  };

  return (
    <div>{data ? 'Data loaded' : 'Loading...'}</div>
  );
}`;

  const updatePhaseExample = `// Update Phase Example
function UpdateExample({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs when id changes
    console.log('ID changed, fetching new data');
    setLoading(true);
    
    fetchData(id).then(result => {
      setData(result);
      setLoading(false);
    });
  }, [id]); // Dependency on id prop

  // Runs on every render
  useEffect(() => {
    console.log('Component rendered');
  });

  return (
    <div>
      {loading ? 'Loading...' : data}
    </div>
  );
}`;

  const errorBoundaryExample = `// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error);
    console.log('Error info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Component Lifecycle in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding the Component Lifecycle</h2>
        <p className="text-gray-600 mb-4">
          Every React component goes through a series of phases during its existence: mounting, updating, and unmounting. Understanding these phases is crucial for managing side effects and optimizing performance.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            While class components have explicit lifecycle methods, functional components achieve the same functionality through the useEffect Hook.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Class Component Lifecycle</h2>
        <p className="text-gray-600 mb-4">
          Class components have several lifecycle methods that are called in a specific order during mounting, updating, and unmounting phases.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {classLifecycleExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Functional Component Lifecycle</h2>
        <p className="text-gray-600 mb-4">
          Functional components use the useEffect Hook to handle lifecycle events. This provides a more streamlined way to manage side effects.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {functionalLifecycleExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mounting Phase</h2>
        <p className="text-gray-600 mb-4">
          The mounting phase occurs when a component is being created and inserted into the DOM. This is where initial setup should occur.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {mountingPhaseExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Update Phase</h2>
        <p className="text-gray-600 mb-4">
          The update phase occurs when a component's props or state change. This is where you handle changes and side effects.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {updatePhaseExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Error Handling</h2>
        <p className="text-gray-600 mb-4">
          Error boundaries are special components that catch JavaScript errors in their child component tree and display a fallback UI.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {errorBoundaryExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lifecycle Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Clean up subscriptions and event listeners in unmount phase</li>
            <li>Use dependency arrays in useEffect properly</li>
            <li>Avoid infinite update loops</li>
            <li>Keep side effects organized and focused</li>
            <li>Use error boundaries for graceful error handling</li>
            <li>Consider performance implications in update phase</li>
            <li>Use appropriate lifecycle methods for data fetching</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use useEffect cleanup to prevent memory leaks</li>
          <li>Consider using useCallback for memoized event handlers</li>
          <li>Implement error boundaries at appropriate levels</li>
          <li>Use React DevTools to debug lifecycle issues</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/events"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: Events
        </Link>
        <Link
          to="/react-course/hooks"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Hooks <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Lifecycle;