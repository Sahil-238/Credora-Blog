import React from 'react';

const DevTools = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Developer Tools</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Developer Tools</h2>
        <p className="text-gray-600 mb-6">
          Developer tools are essential for building, debugging, and optimizing React applications. 
          These tools help you understand component behavior, track state changes, analyze performance, 
          and maintain code quality throughout your development process.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">React Developer Tools</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-blue-800">
            <strong>React DevTools</strong> is the official browser extension for debugging React applications.
          </p>
        </div>
        
        <h3 className="text-xl font-medium text-gray-700 mb-3">Installation</h3>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-2">Available for:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Chrome Web Store: "React Developer Tools"</li>
            <li>Firefox Add-ons: "React Developer Tools"</li>
            <li>Edge Add-ons: "React Developer Tools"</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Key Features</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Components Tab</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• View component hierarchy</li>
              <li>• Inspect props and state</li>
              <li>• Edit values in real-time</li>
              <li>• Search components</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Profiler Tab</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Record performance data</li>
              <li>• Identify slow components</li>
              <li>• Analyze render phases</li>
              <li>• Track re-renders</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Browser DevTools for React</h2>
        
        <h3 className="text-xl font-medium text-gray-700 mb-3">Console Tab</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Debug React components
console.log('Component props:', props);
console.log('Component state:', state);

// React error boundaries
console.error('Component error:', error);

// Performance logging
console.time('Component render');
// ... component logic
console.timeEnd('Component render');`}
          </pre>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Network Tab</h3>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-2">Monitor API calls and data fetching:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Track fetch requests and responses</li>
            <li>Identify slow network requests</li>
            <li>Debug CORS issues</li>
            <li>Monitor WebSocket connections</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Sources Tab</h3>
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-gray-700 mb-2">Debug JavaScript and JSX:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Set breakpoints in React components</li>
            <li>Step through component lifecycle</li>
            <li>Inspect variable values</li>
            <li>Debug async operations</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">VS Code Extensions</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">ES7+ React/Redux Snippets</h4>
            <p className="text-gray-600 text-sm mb-2">Quick code snippets for React development</p>
            <div className="bg-gray-50 p-2 rounded text-xs">
              <code>rafce</code> → React Arrow Function Component
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Bracket Pair Colorizer</h4>
            <p className="text-gray-600 text-sm">Color-codes matching brackets for better JSX readability</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Auto Rename Tag</h4>
            <p className="text-gray-600 text-sm">Automatically renames paired HTML/JSX tags</p>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Prettier</h4>
            <p className="text-gray-600 text-sm">Code formatter for consistent styling</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Debugging Techniques</h2>
        
        <h3 className="text-xl font-medium text-gray-700 mb-3">Component Debugging</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`const MyComponent = ({ data }) => {
  // Debug hook values
  console.log('Component rendered with data:', data);
  
  const [state, setState] = useState(initialState);
  
  // Debug state changes
  useEffect(() => {
    console.log('State changed:', state);
  }, [state]);
  
  // Debug renders
  const renderCount = useRef(0);
  renderCount.current++;
  console.log('Render count:', renderCount.current);
  
  return <div>{/* component JSX */}</div>;
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Error Boundaries</h3>
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <pre className="text-sm text-gray-800 overflow-x-auto">
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
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Tools</h2>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
          <h4 className="font-semibold text-yellow-800 mb-2">React Profiler API</h4>
          <p className="text-yellow-700">
            Use the Profiler component to measure rendering performance programmatically.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration) {
  console.log('Profiler:', { id, phase, actualDuration });
}

<Profiler id="MyComponent" onRender={onRenderCallback}>
  <MyComponent />
</Profiler>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-3">Bundle Analysis</h3>
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-gray-700 mb-2">Analyze your bundle size:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li><strong>webpack-bundle-analyzer:</strong> Visualize bundle contents</li>
            <li><strong>source-map-explorer:</strong> Analyze source maps</li>
            <li><strong>Lighthouse:</strong> Performance audits</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Testing Tools</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">React Testing Library</h4>
            <p className="text-gray-600 text-sm mb-2">Test components the way users interact with them</p>
            <div className="bg-gray-50 p-2 rounded text-xs">
              <code>npm install @testing-library/react</code>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Jest</h4>
            <p className="text-gray-600 text-sm mb-2">JavaScript testing framework with built-in mocking</p>
            <div className="bg-gray-50 p-2 rounded text-xs">
              <code>npm test</code>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 p-4">
            <h4 className="font-semibold text-green-800 mb-2">Development Workflow</h4>
            <ul className="text-green-700 space-y-1">
              <li>• Use React DevTools to inspect component state and props</li>
              <li>• Set up error boundaries for graceful error handling</li>
              <li>• Profile components regularly to identify performance bottlenecks</li>
              <li>• Use meaningful console.logs and remove them before production</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Debugging Tips</h4>
            <ul className="text-blue-700 space-y-1">
              <li>• Use descriptive component names for easier debugging</li>
              <li>• Implement proper error handling in async operations</li>
              <li>• Use React.StrictMode in development to catch issues early</li>
              <li>• Keep DevTools open while developing for real-time feedback</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-800">
          ← Previous: CI/CD
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Next: Debugging →
        </button>
      </div>
    </div>
  );
};

export default DevTools;