import React, { useState, useMemo, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiBarChart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Example expensive calculation
const calculateFactorial = (n) => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

// Example memoized component
const MemoizedComponent = memo(function ExpensiveComponent({ data }) {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <p>Memoized Component with data: {data}</p>
    </div>
  );
});

const Performance = () => {
  const [activeTab, setActiveTab] = useState('memoization');
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Example of useMemo
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  // Example of useCallback
  const incrementCount = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const examples = {
    memoization: {
      title: 'Memoization',
      code: `// Component memoization
const MemoizedComponent = memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});

// Value memoization
const memoizedValue = useMemo(() => {
  return expensiveCalculation(props.data);
}, [props.data]);

// Callback memoization
const memoizedCallback = useCallback(() => {
  doSomething(props.data);
}, [props.data]);`,
      explanation: 'Memoization prevents unnecessary re-renders and recalculations.'
    },
    virtualization: {
      title: 'Virtualization',
      code: `import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </FixedSizeList>
  );
}`,
      explanation: 'Virtualization renders only visible items in long lists.'
    },
    codeSpitting: {
      title: 'Code Splitting',
      code: `// Route-based code splitting
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}

// Component-based code splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'));`,
      explanation: 'Code splitting reduces the initial bundle size by loading components on demand.'
    },
    profiling: {
      title: 'Profiling',
      code: `// Development profiling
import { Profiler } from 'react';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  });
}

<Profiler id="Navigation" onRender={onRenderCallback}>
  <Navigation />
</Profiler>`,
      explanation: 'Profiling helps identify performance bottlenecks in React applications.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Performance Optimization</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Performance</h2>
        <p className="text-gray-600 mb-4">
          React applications can face performance challenges as they grow. Understanding
          and implementing proper optimization techniques is crucial for maintaining
          a smooth user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCpu className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Rendering</h3>
            <p className="text-gray-600">
              Optimize component rendering
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiZap className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Loading</h3>
            <p className="text-gray-600">
              Improve initial load time
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiBarChart className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Monitoring</h3>
            <p className="text-gray-600">
              Track performance metrics
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Optimization Techniques</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                className={`px-6 py-3 whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {example.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {examples[activeTab].code}
            </pre>
            <p className="text-gray-600">
              {examples[activeTab].explanation}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Live Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* useMemo Example */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">useMemo Example</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-600">Number:</label>
                <input
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                  className="px-3 py-2 border rounded"
                  min="0"
                  max="10"
                />
              </div>
              <p className="text-gray-600">
                Factorial of {number} is: {factorial}
              </p>
              <p className="text-sm text-gray-500">
                The factorial calculation is memoized and only recalculated when the number changes.
              </p>
            </div>
          </div>

          {/* React.memo Example */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">React.memo Example</h3>
            <div className="space-y-4">
              <button
                onClick={incrementCount}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Increment Count: {count}
              </button>
              <MemoizedComponent data="Hello" />
              <p className="text-sm text-gray-500">
                The memoized component only re-renders when its props change, not when the parent re-renders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Performance Issues</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Unnecessary Re-renders</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// Bad
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Created on every render
  const handleClick = () => {
    console.log('clicked');
  };
  
  return <ChildComponent onClick={handleClick} />;
}

// Good
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // Memoized callback
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  
  return <ChildComponent onClick={handleClick} />;
}`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Large Bundle Size</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// Bad
import { format } from 'date-fns';

// Good
import format from 'date-fns/format';

// Even Better (with dynamic import)
const format = await import('date-fns/format');`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Optimization</h2>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="mb-4 text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? 'Hide Advanced Topics' : 'Show Advanced Topics'}
        </button>
        {showAdvanced && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Custom Hooks Optimization</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`function useSearch(items) {
  const [query, setQuery] = useState('');
  
  const filteredItems = useMemo(() => 
    items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    ),
    [items, query]
  );
  
  return [filteredItems, setQuery];
}`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Web Workers</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// worker.js
self.onmessage = function(e) {
  const result = heavyCalculation(e.data);
  self.postMessage(result);
};

// Component
function Component() {
  const [result, setResult] = useState(null);
  const worker = useRef(new Worker('./worker.js'));
  
  useEffect(() => {
    worker.current.onmessage = (e) => {
      setResult(e.data);
    };
    
    return () => worker.current.terminate();
  }, []);
}`}
              </pre>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Optimize a virtual list component with the following features:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Implement windowing for large lists</li>
              <li>Add memoization for list items</li>
              <li>Optimize scroll performance</li>
              <li>Add loading states and error boundaries</li>
              <li>Measure and compare performance</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/state-management"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: State Management
        </Link>
        <Link
          to="/react-course/testing"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Testing →
        </Link>
      </div>
    </motion.div>
  );
};

export default Performance; 