import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Functions = () => {
  const sections = [
    {
      title: 'JavaScript Functions',
      content: `Functions are blocks of reusable code that perform specific tasks.

Key concepts:
• Function declaration
• Function expression
• Parameters and arguments
• Return values
• Function scope
• Hoisting`,
      code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameters
function welcome(name = "Guest") {
  return \`Welcome, \${name}!\`;
}`
    },
    {
      title: 'Function Declaration',
      content: `Function declarations are hoisted to the top of their scope.

Features:
• Can be called before declaration
• Creates a named function
• Adds function to scope
• Can be redeclared

Common use cases:
• Main program functions
• Utility functions
• Event handlers
• Callbacks`,
      code: `// Basic function declaration
function calculateArea(width, height) {
  return width * height;
}

// Function with multiple parameters
function formatName(firstName, lastName, title) {
  return \`\${title}. \${firstName} \${lastName}\`;
}

// Function with conditional logic
function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// Function with default values
function createUser(name, age = 18, isAdmin = false) {
  return {
    name,
    age,
    isAdmin,
    createdAt: new Date()
  };
}

// Recursive function
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`
    },
    {
      title: 'Function Expression',
      content: `Function expressions create anonymous functions assigned to variables.

Benefits:
• More flexible than declarations
• Can be used as arguments
• Can create closures
• Can be immediately invoked (IIFE)

Types:
• Anonymous function expression
• Named function expression
• Arrow function expression`,
      code: `// Anonymous function expression
const square = function(x) {
  return x * x;
};

// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

// Arrow function expression
const double = x => x * 2;

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("This runs immediately!");
})();

// Function as argument
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});

// Function returning function
const multiply = function(x) {
  return function(y) {
    return x * y;
  };
};
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4));  // 8`
    },
    {
      title: 'Parameters and Arguments',
      content: `Functions can accept parameters and use them within their body.

Parameter features:
• Default parameters
• Rest parameters
• Destructuring parameters
• Arguments object

Best practices:
• Use descriptive parameter names
• Validate parameters
• Document expected types
• Handle missing parameters`,
      code: `// Default parameters
function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Destructuring parameters
function printUser({ name, age, email }) {
  console.log(\`Name: \${name}, Age: \${age}, Email: \${email}\`);
}

// Arguments object
function logArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

// Parameter validation
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Parameters must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Optional parameters
function fetchData(url, options = {}) {
  const {
    method = 'GET',
    headers = {},
    body = null
  } = options;
  
  // Fetch implementation
}`
    },
    {
      title: 'Return Values',
      content: `Functions can return values using the return statement.

Return features:
• Can return any type
• Early return
• Multiple return values
• Implicit return
• Chain returns

Note: Functions without return statement return undefined.`,
      code: `// Basic return
function add(a, b) {
  return a + b;
}

// Early return for validation
function processUser(user) {
  if (!user) return null;
  if (!user.name) return { error: "Name required" };
  
  return {
    id: generateId(),
    name: user.name,
    createdAt: new Date()
  };
}

// Multiple return values using object
function getCircleProperties(radius) {
  return {
    area: Math.PI * radius * radius,
    circumference: 2 * Math.PI * radius
  };
}

// Multiple return values using array
function divideAndRemainder(a, b) {
  return [Math.floor(a / b), a % b];
}

// Implicit return in arrow function
const square = x => x * x;

// Chained returns
function createCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

// Generator function returns
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Functions</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding JavaScript Functions</h2>
        <p className="text-gray-700 mb-4">
          Learn how to create and use functions in JavaScript to write reusable and organized code.
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

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Function Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Keep functions small and focused on a single task</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use descriptive names that indicate what the function does</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Validate parameters and handle edge cases</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Document function parameters and return values</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Functions; 