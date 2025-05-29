import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Modules = () => {
  const sections = [
    {
      title: 'Module Basics',
      content: `JavaScript modules provide:
• Code organization
• Encapsulation
• Dependency management
• Namespace isolation
• Code reusability
• Tree shaking
• Dynamic loading`,
      code: `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// Default export
export default class Calculator {
  add(a, b) { return add(a, b); }
  subtract(a, b) { return subtract(a, b); }
}

// main.js
import Calculator, { add, subtract } from './math.js';

const calc = new Calculator();
console.log(calc.add(5, 3));      // 8
console.log(subtract(10, 4));      // 6`
    },
    {
      title: 'Export Patterns',
      content: `Module export patterns:
• Named exports
• Default exports
• Re-exports
• Namespace exports
• Mixed exports
• Aggregating exports
• Export lists`,
      code: `// Named exports
export const name = 'John';
export function sayHello() {
  return \`Hello, \${name}!\`;
}

// Export list
const age = 30;
const city = 'New York';
export { age, city };

// Renamed exports
export { age as userAge, city as userCity };

// Re-exports
export { default as User } from './user.js';
export * from './utils.js';
export * as utils from './utils.js';

// Mixed exports
export default class API {
  // API implementation
}

export const VERSION = '1.0.0';
export function configure(options) {
  // Configuration logic
}`
    },
    {
      title: 'Import Patterns',
      content: `Module import patterns:
• Named imports
• Default imports
• Namespace imports
• Mixed imports
• Dynamic imports
• Side-effect imports
• Import aliases`,
      code: `// Named imports
import { name, sayHello } from './module.js';

// Default import
import API from './api.js';

// Namespace import
import * as utils from './utils.js';

// Mixed imports
import API, { VERSION } from './api.js';

// Renamed imports
import { name as userName } from './user.js';

// Side-effect import
import './styles.css';

// Dynamic import
async function loadModule() {
  try {
    const module = await import('./dynamic-module.js');
    module.init();
  } catch (error) {
    console.error('Module loading failed:', error);
  }
}`
    },
    {
      title: 'Module Features',
      content: `Module system features:
• Strict mode by default
• Lexical top-level scope
• Single evaluation
• Static analysis
• Cyclic dependencies
• Live bindings
• Asynchronous loading`,
      code: `// Strict mode is automatic
const x = 10;  // No "use strict" needed

// Lexical scope
const privateValue = 'hidden';
export function getValue() {
  return privateValue;  // Closure over module scope
}

// Live bindings
export let counter = 0;
export function increment() {
  counter++;  // Updates all importing modules
}

// Circular dependencies
// moduleA.js
import { b } from './moduleB.js';
export const a = 1;
console.log(b);  // undefined or value

// moduleB.js
import { a } from './moduleA.js';
export const b = a + 1;
console.log(a);  // 1`
    },
    {
      title: 'Advanced Patterns',
      content: `Advanced module patterns:
• Module factories
• Dependency injection
• Lazy loading
• Code splitting
• Hot module replacement
• Module composition
• Plugin systems`,
      code: `// Module factory
export function createModule(config) {
  return {
    init() {
      // Initialize with config
    },
    // Module interface
  };
}

// Dependency injection
export class Service {
  constructor(dependencies = {}) {
    this.logger = dependencies.logger || console;
    this.api = dependencies.api || new API();
  }
}

// Lazy loading with webpack
const AdminPanel = React.lazy(() => 
  import('./AdminPanel')
);

// Plugin system
class PluginManager {
  #plugins = new Map();

  async register(name, moduleUrl) {
    try {
      const module = await import(moduleUrl);
      this.#plugins.set(name, module);
    } catch (error) {
      console.error(\`Failed to load plugin \${name}:\`, error);
    }
  }

  getPlugin(name) {
    return this.#plugins.get(name);
  }
}`
    },
    {
      title: 'Error Handling',
      content: `Module error handling:
• Import errors
• Loading errors
• Evaluation errors
• Circular dependency issues
• Missing exports
• Type mismatches
• Runtime errors`,
      code: `// Import error handling
async function loadFeature(name) {
  try {
    const module = await import(\`./features/\${name}.js\`);
    return module.default;
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error(\`Feature \${name} not found\`);
      return null;
    }
    throw error;
  }
}

// Module loading with fallback
async function loadWithFallback(primaryUrl, fallbackUrl) {
  try {
    return await import(primaryUrl);
  } catch (error) {
    console.warn(\`Failed to load \${primaryUrl}, trying fallback\`);
    return await import(fallbackUrl);
  }
}

// Safe module evaluation
function safeRequire(moduleId) {
  try {
    const module = require(moduleId);
    if (!module || typeof module !== 'object') {
      throw new Error('Invalid module format');
    }
    return module;
  } catch (error) {
    console.error(\`Failed to load module \${moduleId}:\`, error);
    return null;
  }
}`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Modules</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Modules</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript modules, including import/export patterns, module features, and advanced usage.
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
            <p className="text-gray-700">Forgetting file extensions in imports</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Creating circular dependencies</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not handling dynamic import errors</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use named exports for multiple exports</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement proper error handling for dynamic imports</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Keep modules focused and single-responsibility</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Modules; 