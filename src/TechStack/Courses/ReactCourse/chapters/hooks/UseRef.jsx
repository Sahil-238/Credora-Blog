import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UseRef = () => {
  // Example 1: DOM Reference
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Example 2: Timer Management
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Example 3: Previous Value
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  // Example 4: Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">useRef Hook</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is useRef?</h2>
        <p className="text-gray-600 mb-4">
          useRef is a Hook that provides a mutable ref object whose .current property is initialized with the passed argument.
          The returned object will persist for the full lifetime of the component. Common use cases include:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Accessing DOM elements directly</li>
          <li>Storing mutable values that don't trigger re-renders</li>
          <li>Keeping track of previous values</li>
          <li>Managing timers and intervals</li>
        </ul>
        <div className="bg-pink-50 border-l-4 border-pink-500 p-4 mb-6">
          <p className="text-pink-700">
            <strong>Best Practice:</strong> Use useRef when you need to access DOM elements or store mutable values that shouldn't trigger re-renders.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 1: DOM Reference</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Focus Input Example</h3>
          <div className="space-y-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Focus me!"
              className="px-4 py-2 border rounded"
            />
            <button
              onClick={focusInput}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Focus Input
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return (
  <input ref={inputRef} type="text" />
  <button onClick={focusInput}>
    Focus Input
  </button>
);`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 2: Timer Management</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Stopwatch Example</h3>
          <div className="space-y-4">
            <div className="text-4xl font-mono">{time}s</div>
            <div className="space-x-2">
              <button
                onClick={startTimer}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                disabled={isRunning}
              >
                Start
              </button>
              <button
                onClick={stopTimer}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                disabled={!isRunning}
              >
                Stop
              </button>
              <button
                onClick={resetTimer}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const intervalRef = useRef(null);

useEffect(() => {
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, []);

const startTimer = () => {
  intervalRef.current = setInterval(() => {
    setTime(t => t + 1);
  }, 1000);
};`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 3: Previous Value</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Track Previous Value Example</h3>
          <div className="space-y-4">
            <p>Current: {count}</p>
            <p>Previous: {prevCountRef.current}</p>
            <button
              onClick={() => setCount(c => c + 1)}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            >
              Increment
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const [count, setCount] = useState(0);
const prevCountRef = useRef();

useEffect(() => {
  prevCountRef.current = count;
}, [count]);`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 4: Intersection Observer</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Scroll Tracking Example</h3>
          <div className="h-40 overflow-auto">
            <div className="h-60 flex items-end">
              <div ref={elementRef} className="p-4 bg-gray-100 rounded">
                <p>
                  {isVisible ? '👀 I see you!' : '🙈 Scroll to see me!'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`const [isVisible, setIsVisible] = useState(false);
const elementRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.5 }
  );

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => observer.disconnect();
}, []);`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Do:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>Use for DOM references</li>
              <li>Store mutable values that don't need re-renders</li>
              <li>Clean up timers and observers</li>
              <li>Initialize with null for DOM refs</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>❌ Don't:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>Use ref.current in render calculations</li>
              <li>Modify ref.current during rendering</li>
              <li>Store values that should trigger re-renders</li>
              <li>Access DOM refs before componentDidMount</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Managing focus, text selection, media playback</li>
          <li>Triggering imperative animations</li>
          <li>Integrating with third-party DOM libraries</li>
          <li>Storing previous values</li>
          <li>Storing timeouts and intervals</li>
          <li>Accessing child measurements</li>
          <li>Implementing scroll position tracking</li>
          <li>Managing WebSocket connections</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/useContext"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/useReducer"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default UseRef;