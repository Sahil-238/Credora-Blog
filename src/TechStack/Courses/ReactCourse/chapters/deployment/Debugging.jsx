import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Debugging = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Debugging React Applications</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Debugging</h2>
        <p className="text-gray-600 mb-4">
          Debugging is the process of finding and fixing errors in your React applications. 
          It's an essential skill that helps you identify issues, understand application behavior, 
          and improve code quality. Effective debugging can save hours of development time and 
          prevent bugs from reaching production.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Types of React Bugs</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. State Management Issues</h3>
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Common Problem:</h4>
            <pre className="bg-red-100 p-3 rounded text-sm overflow-x-auto">
{`const [count, setCount] = useState(0);

// Wrong: Mutating state directly
const increment = () => {
  count++; // This won't trigger re-render
};`}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">✅ Solution:</h4>
            <pre className="bg-green-100 p-3 rounded text-sm overflow-x-auto">
{`const [count, setCount] = useState(0);

// Correct: Using setState function
const increment = () => {
  setCount(count + 1); // or setCount(prev => prev + 1)
};`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. useEffect Dependencies</h3>
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Common Problem:</h4>
            <pre className="bg-red-100 p-3 rounded text-sm overflow-x-auto">
{`useEffect(() => {
  fetchData(userId);
}, []); // Missing dependency: userId`}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">✅ Solution:</h4>
            <pre className="bg-green-100 p-3 rounded text-sm overflow-x-auto">
{`useEffect(() => {
  fetchData(userId);
}, [userId]); // Include all dependencies`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Key Prop Issues</h3>
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Common Problem:</h4>
            <pre className="bg-red-100 p-3 rounded text-sm overflow-x-auto">
{`// Using array index as key
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}`}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">✅ Solution:</h4>
            <pre className="bg-green-100 p-3 rounded text-sm overflow-x-auto">
{`// Using unique identifier as key
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Debugging Techniques</h2>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Console Logging</h3>
          <p className="text-gray-600 mb-3">
            The most basic but effective debugging technique. Use console methods strategically:
          </p>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Basic logging
console.log('Component rendered with props:', props);

// Conditional logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', { state, props });
}

// Different log levels
console.warn('Warning: Deprecated prop used');
console.error('Error occurred:', error);
console.table(arrayData); // Great for arrays/objects`}
          </pre>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. React Developer Tools</h3>
          <p className="text-gray-600 mb-3">
            Browser extension that provides powerful debugging capabilities:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Inspect component hierarchy and props</li>
            <li>View and modify state in real-time</li>
            <li>Track component re-renders</li>
            <li>Profile performance issues</li>
            <li>Debug hooks and context</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">3. Breakpoints and Debugger</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const handleClick = () => {
  debugger; // Pauses execution here
  
  // Or use conditional breakpoints
  if (someCondition) {
    debugger;
  }
  
  setCount(count + 1);
};`}
          </pre>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">4. Error Boundaries</h3>
          <p className="text-gray-600 mb-3">
            Catch JavaScript errors anywhere in the component tree:
          </p>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Debugging Strategies</h2>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">1. Custom Hooks for Debugging</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Hook to track why a component re-rendered
const useWhyDidYouUpdate = (name, props) => {
  const previous = useRef();
  
  useEffect(() => {
    if (previous.current) {
      const allKeys = Object.keys({...previous.current, ...props});
      const changedKeys = {};
      
      allKeys.forEach(key => {
        if (previous.current[key] !== props[key]) {
          changedKeys[key] = {
            from: previous.current[key],
            to: props[key]
          };
        }
      });
      
      if (Object.keys(changedKeys).length) {
        console.log('[why-did-you-update]', name, changedKeys);
      }
    }
    
    previous.current = props;
  });
};

// Usage
const MyComponent = (props) => {
  useWhyDidYouUpdate('MyComponent', props);
  return <div>...</div>;
};`}
          </pre>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-3">2. Performance Debugging</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`// Measure component render time
const useRenderTime = (componentName) => {
  useEffect(() => {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      console.log(\`\${componentName} render time: \${end - start}ms\`);
    };
  });
};

// Profile expensive operations
const ExpensiveComponent = () => {
  useRenderTime('ExpensiveComponent');
  
  const expensiveValue = useMemo(() => {
    console.time('expensive-calculation');
    const result = heavyCalculation();
    console.timeEnd('expensive-calculation');
    return result;
  }, [dependency]);
  
  return <div>{expensiveValue}</div>;
};`}
          </pre>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">3. Network Request Debugging</h3>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const useApiCall = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching from:', url);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        console.log('Received data:', result);
        setData(result);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Debugging Tools and Extensions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">Browser Extensions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>React Developer Tools</li>
              <li>Redux DevTools</li>
              <li>React Hook Form DevTools</li>
              <li>Profiler for React</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">VS Code Extensions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>ES7+ React/Redux/React-Native snippets</li>
              <li>Bracket Pair Colorizer</li>
              <li>Auto Rename Tag</li>
              <li>Thunder Client (API testing)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices for Debugging</h2>
        <div className="bg-green-50 p-6 rounded-lg">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Use descriptive variable names</strong> - Makes debugging easier</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Add meaningful console logs</strong> - Don't just log variables, explain what they represent</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Use TypeScript</strong> - Catch errors at compile time</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Test edge cases</strong> - Empty arrays, null values, undefined props</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Remove debug code</strong> - Clean up console.logs before production</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span><strong>Use error boundaries</strong> - Gracefully handle errors in production</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Practice Exercise</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Debug This Component</h3>
          <p className="text-gray-600 mb-4">
            Try to identify and fix the bugs in this component:
          </p>
          <pre className="bg-white p-4 rounded border text-sm overflow-x-auto">
{`const BuggyComponent = ({ items }) => {
  const [filter, setFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  
  useEffect(() => {
    const filtered = items.filter(item => 
      item.name.includes(filter)
    );
    setFilteredItems(filtered);
  }, []); // Bug 1: Missing dependencies
  
  const handleDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    items = newItems; // Bug 2: Mutating props
  };
  
  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredItems.map((item, index) => (
        <div key={index}> {/* Bug 3: Using index as key */}
          <span>{item.name}</span>
          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};`}
          </pre>
          <p className="text-sm text-gray-500 mt-2">
            Hint: There are at least 3 bugs in this component. Can you find and fix them all?
          </p>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/dev-tools"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Previous: Dev Tools
        </Link>
        <Link
          to="/react-course/best-practices"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Best Practices →
        </Link>
      </div>
    </motion.div>
  );
};

export default Debugging;