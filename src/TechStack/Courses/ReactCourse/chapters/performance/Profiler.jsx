import React, { useState, useMemo, useCallback, Profiler } from 'react';
import { motion } from 'framer-motion';

// Performance monitoring hook
const usePerformanceData = () => {
  const [performanceData, setPerformanceData] = useState([]);

  const onRenderCallback = useCallback((id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    const data = {
      id,
      phase,
      actualDuration: Math.round(actualDuration * 100) / 100,
      baseDuration: Math.round(baseDuration * 100) / 100,
      startTime: Math.round(startTime),
      commitTime: Math.round(commitTime),
      timestamp: new Date().toLocaleTimeString()
    };
    
    setPerformanceData(prev => [...prev.slice(-9), data]);
  }, []);

  const clearData = useCallback(() => {
    setPerformanceData([]);
  }, []);

  return { performanceData, onRenderCallback, clearData };
};

// Expensive component for demonstration
const ExpensiveComponent = ({ items, shouldOptimize = false }) => {
  // Simulate expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('🔥 Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < 1000; j++) {
        result += Math.random();
      }
    }
    return result;
  }, shouldOptimize ? [items.length] : [items]);

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
      <h4 className="font-semibold text-orange-800 mb-2">
        Expensive Component {shouldOptimize ? '(Optimized)' : '(Unoptimized)'}
      </h4>
      <p className="text-orange-700 text-sm mb-2">
        Items: {items.length} | Expensive Value: {expensiveValue.toFixed(2)}
      </p>
      <div className="text-xs text-orange-600">
        {shouldOptimize ? '✅ Using useMemo with proper dependencies' : '❌ Recalculating on every render'}
      </div>
    </div>
  );
};

// Demo component with profiler
const ProfilerDemo = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [counter, setCounter] = useState(0);
  const [optimized, setOptimized] = useState(false);
  const { performanceData, onRenderCallback, clearData } = usePerformanceData();

  const addItem = () => setItems(prev => [...prev, prev.length + 1]);
  const removeItem = () => setItems(prev => prev.slice(0, -1));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Profiler Demo</h3>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={optimized}
              onChange={(e) => setOptimized(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm text-gray-600">Enable Optimization</span>
          </label>
          <button
            onClick={clearData}
            className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Clear Data
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Controls</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setCounter(c => c + 1)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Re-render (Counter: {counter})
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={addItem}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add Item
              </button>
              <button
                onClick={removeItem}
                disabled={items.length <= 1}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
              >
                Remove Item
              </button>
            </div>
          </div>

          <div className="mt-4">
            <Profiler id="ExpensiveComponent" onRender={onRenderCallback}>
              <ExpensiveComponent items={items} shouldOptimize={optimized} />
            </Profiler>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-3">Performance Data</h4>
          <div className="bg-gray-50 rounded-lg p-3 h-80 overflow-y-auto">
            {performanceData.length === 0 ? (
              <p className="text-gray-500 text-sm">No performance data yet. Interact with the component!</p>
            ) : (
              <div className="space-y-2">
                {performanceData.map((data, index) => (
                  <div key={index} className="bg-white p-3 rounded border text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-800">{data.phase}</span>
                      <span className="text-gray-500">{data.timestamp}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <div>Actual: <span className="font-mono text-blue-600">{data.actualDuration}ms</span></div>
                      <div>Base: <span className="font-mono text-green-600">{data.baseDuration}ms</span></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReactProfilerLesson = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">React Profiler</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is React Profiler?</h2>
        <p className="text-gray-600 mb-4">
          React Profiler is a built-in component that helps you measure the performance of your React 
          application. It provides detailed information about component render times, helping you 
          identify performance bottlenecks and optimize your app.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-blue-800">
            <strong>Key Benefits:</strong> Identify slow components, measure render performance, 
            track optimization improvements, and debug performance issues in development.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'demo', label: 'Live Demo' },
              { id: 'devtools', label: 'DevTools' },
              { id: 'api', label: 'API Reference' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Two Ways to Profile</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">1. Profiler Component</h4>
              <p className="text-gray-600 text-sm mb-4">
                Programmatic profiling using the &lt;Profiler&gt; component in your code.
              </p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs">
                <pre>{`<Profiler id="MyComponent" onRender={callback}>
  <MyComponent />
</Profiler>`}</pre>
              </div>
              <div className="mt-3 text-green-600 text-sm">✅ Production safe</div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">2. React DevTools</h4>
              <p className="text-gray-600 text-sm mb-4">
                Visual profiling interface in browser developer tools.
              </p>
              <div className="bg-blue-50 p-3 rounded text-xs text-blue-800">
                Browser Extension → Components → Profiler Tab
              </div>
              <div className="mt-3 text-orange-600 text-sm">⚠️ Development only</div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Metrics Explained</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Actual Duration</h5>
              <p className="text-gray-600 text-sm">
                Time spent rendering the component and its children for the current update
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Base Duration</h5>
              <p className="text-gray-600 text-sm">
                Estimated time to render the entire subtree without any optimizations
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Start Time</h5>
              <p className="text-gray-600 text-sm">
                When React began rendering this update
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Commit Time</h5>
              <p className="text-gray-600 text-sm">
                When React committed this update
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Demo Tab */}
      {activeTab === 'demo' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Interactive Profiler Demo</h3>
          <p className="text-gray-600 mb-6">
            This demo shows how the Profiler component works. Try toggling optimization and 
            observe the performance differences in the data panel.
          </p>
          <ProfilerDemo />
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 What to Look For:</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Higher actual duration in unoptimized mode</li>
              <li>• Multiple re-renders when dependencies change unnecessarily</li>
              <li>• Difference between mount and update phases</li>
              <li>• Impact of optimization techniques like useMemo</li>
            </ul>
          </div>
        </section>
      )}

      {/* DevTools Tab */}
      {activeTab === 'devtools' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">React DevTools Profiler</h3>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Getting Started</h4>
              <ol className="text-gray-600 text-sm space-y-2">
                <li>1. Install React DevTools browser extension</li>
                <li>2. Open DevTools → Components tab</li>
                <li>3. Click the Profiler tab</li>
                <li>4. Click record button (blue circle)</li>
                <li>5. Interact with your app</li>
                <li>6. Stop recording to analyze results</li>
              </ol>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">DevTools Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Flamegraph View</h5>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Visual component tree</li>
                    <li>• Color-coded performance</li>
                    <li>• Click to drill down</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Ranked View</h5>
                  <ul className="text-gray-600 text-xs space-y-1">
                    <li>• Components by render time</li>
                    <li>• Slowest components first</li>
                    <li>• Quick problem identification</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Pro Tips</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Profile in production mode for accurate results</li>
                <li>• Focus on components that render frequently</li>
                <li>• Look for unexpected re-renders</li>
                <li>• Compare before/after optimization</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* API Tab */}
      {activeTab === 'api' && (
        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Profiler API Reference</h3>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Basic Usage</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Log performance data
  console.log('Component:', id);
  console.log('Phase:', phase);
  console.log('Actual Duration:', actualDuration);
  console.log('Base Duration:', baseDuration);
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Navigation />
      <Main />
    </Profiler>
  );
}`}</pre>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Callback Parameters</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-medium text-gray-700">Parameter</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700">Type</th>
                      <th className="text-left py-2 px-3 font-medium text-gray-700">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-mono">id</td>
                      <td className="py-2 px-3">string</td>
                      <td className="py-2 px-3">Profiler component identifier</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-mono">phase</td>
                      <td className="py-2 px-3">"mount" | "update"</td>
                      <td className="py-2 px-3">Whether component is mounting or updating</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-mono">actualDuration</td>
                      <td className="py-2 px-3">number</td>
                      <td className="py-2 px-3">Time spent rendering current update</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-mono">baseDuration</td>
                      <td className="py-2 px-3">number</td>
                      <td className="py-2 px-3">Estimated time to render subtree</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-3 font-mono">startTime</td>
                      <td className="py-2 px-3">number</td>
                      <td className="py-2 px-3">When React began rendering</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono">commitTime</td>
                      <td className="py-2 px-3">number</td>
                      <td className="py-2 px-3">When React committed the update</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Advanced Example</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
                <pre className="text-sm">{`// Performance monitoring service
class PerformanceMonitor {
  static data = [];
  
  static collect(id, phase, actualDuration, baseDuration) {
    if (actualDuration > 16) { // Slower than 60fps
      this.data.push({
        component: id,
        phase,
        duration: actualDuration,
        timestamp: Date.now()
      });
    }
  }
  
  static getSlowComponents() {
    return this.data.filter(entry => entry.duration > 50);
  }
}

// Usage
<Profiler id="SlowComponent" onRender={PerformanceMonitor.collect}>
  <ExpensiveComponent />
</Profiler>`}</pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Best Practices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Profile in production builds</li>
              <li>• Focus on frequently rendering components</li>
              <li>• Use meaningful profiler IDs</li>
              <li>• Monitor performance over time</li>
              <li>• Combine with other optimization techniques</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">❌ Don't</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Add profilers everywhere (performance overhead)</li>
              <li>• Only profile in development mode</li>
              <li>• Ignore the phase parameter</li>
              <li>• Forget to remove debug logging</li>
              <li>• Profile without a specific goal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Takeaways</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <ul className="text-blue-800 space-y-2">
            <li>• Profiler helps identify performance bottlenecks</li>
            <li>• Use both programmatic and DevTools approaches</li>
            <li>• Focus on actual duration for optimization priorities</li>
            <li>• Profile realistic user interactions, not isolated components</li>
            <li>• Combine profiling with optimization techniques like memoization</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:text-blue-800 flex items-center px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors"
        >
          ← Previous: Virtualization
        </button>
        <button
          onClick={() => console.log('Navigate to Course Home')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Course Home →
        </button>
      </div>
    </motion.div>
  );
};

export default ReactProfilerLesson;