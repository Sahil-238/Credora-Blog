import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Debugging = () => {
  const sections = [
    {
      title: 'Console Methods',
      content: `JavaScript console methods:
• console.log()
• console.error()
• console.warn()
• console.info()
• console.debug()
• console.table()
• console.trace()
• console.group()`,
      code: `// Basic console usage
console.log('Basic message');
console.error('Error message');
console.warn('Warning message');
console.info('Info message');

// Structured data
console.table([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);

// Grouping logs
console.group('User Details');
console.log('Name: John');
console.log('Age: 30');
console.groupEnd();

// Stack trace
console.trace('Trace message');

// Styled console
console.log(
  '%cStyled text', 
  'color: blue; font-size: 20px; font-weight: bold;'
);`
    },
    {
      title: 'Debugger Statement',
      content: `Using debugger statement:
• Break points
• Step through code
• Inspect variables
• Call stack
• Watch expressions
• Scope chain
• Conditional breaks`,
      code: `function complexCalculation(a, b) {
  let result = 0;
  
  // Break execution here
  debugger;
  
  for (let i = 0; i < a; i++) {
    result += b;
    
    // Conditional break
    if (result > 100) {
      debugger;
    }
  }
  
  return result;
}

// Debug async code
async function fetchUserData() {
  debugger;  // Break before fetch
  
  const response = await fetch('/api/user');
  
  debugger;  // Break after fetch
  
  const data = await response.json();
  return data;
}

// Event listener debugging
element.addEventListener('click', function(event) {
  debugger;  // Break on click
  // Handle event
});`
    },
    {
      title: 'Source Maps',
      content: `Working with source maps:
• Generate source maps
• Debug original code
• Production debugging
• Source map types
• Webpack configuration
• Debugging minified code
• Source map security`,
      code: `// webpack.config.js
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // ... other config
};

// Enable source maps in production
module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    filename: '[name].[contenthash].js',
    sourceMapFilename: '[name].[contenthash].js.map'
  }
};

// Source map loader
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  }
};

// Enable source maps in browser
// Chrome DevTools -> Settings -> Enable JavaScript source maps`
    },
    {
      title: 'Performance Profiling',
      content: `Performance profiling:
• CPU profiling
• Memory profiling
• Network analysis
• Timeline recording
• Bottleneck detection
• Memory leaks
• Frame rate analysis`,
      code: `// Performance measurement
console.time('operation');
// ... code to measure
console.timeEnd('operation');

// Memory usage
const used = process.memoryUsage();
console.log(\`Memory usage: \${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB\`);

// Performance marks
performance.mark('startOperation');
// ... code to measure
performance.mark('endOperation');

performance.measure(
  'operationDuration',
  'startOperation',
  'endOperation'
);

const measurements = performance.getEntriesByType('measure');
console.log(measurements);

// CPU profile
console.profile('CPU Profile');
// ... code to profile
console.profileEnd();

// Frame rate monitoring
let lastTime = performance.now();
let frames = 0;

function checkFPS() {
  frames++;
  const time = performance.now();
  
  if (time >= lastTime + 1000) {
    const fps = Math.round((frames * 1000) / (time - lastTime));
    console.log(\`FPS: \${fps}\`);
    frames = 0;
    lastTime = time;
  }
  
  requestAnimationFrame(checkFPS);
}`
    },
    {
      title: 'Remote Debugging',
      content: `Remote debugging techniques:
• Browser DevTools
• Node.js debugging
• Mobile debugging
• WebSocket debugging
• Network inspection
• Remote devices
• Debug protocols`,
      code: `// Node.js debugging
// Start with --inspect flag
node --inspect server.js

// Break on first line
node --inspect-brk server.js

// Remote debugging URL
chrome://inspect

// Debug specific port
node --inspect=9229 server.js

// WebSocket debugging
const ws = new WebSocket('ws://localhost:8080');

ws.addEventListener('open', () => {
  debugger;  // Break when connection opens
});

ws.addEventListener('message', (event) => {
  debugger;  // Break on message
  console.log('Message:', event.data);
});

// Mobile remote debugging
// Android Debug Bridge (adb)
adb devices
adb forward tcp:9229 tcp:9229

// iOS Safari debugging
// Enable Web Inspector in Safari preferences
// Connect iOS device
// Use Safari Developer menu`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Debugging</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Debugging</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript debugging techniques, including console methods, debugger statements, source maps, and performance profiling.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {section.content}
                </p>
              </div>
              <div>
                <SyntaxHighlighter 
                  language="javascript"
                  style={atomDark}
                  className="rounded-lg"
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="mt-12 bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Common Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Leaving debugger statements in production code</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not using source maps in production</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Overusing console.log for debugging</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use appropriate console methods for different types of output</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error tracking in production</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Regularly profile performance in development</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Debugging; 