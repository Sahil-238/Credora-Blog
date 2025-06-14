import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Parameters = () => {
  const sections = [
    {
      title: 'Function Parameters',
      content: `Parameters are variables that hold values passed to a function.

Types of parameters:
• Required parameters
• Optional parameters
• Default parameters
• Rest parameters
• Destructured parameters`,
      code: `// Required parameters
function add(a, b) {
  return a + b;
}

// Optional parameters
function greet(name) {
  name = name || "Guest";  // Old way
  return \`Hello, \${name}!\`;
}

// Default parameters
function welcome(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Destructured parameters
function printUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}`
    },
    {
      title: 'Default Parameters',
      content: `Default parameters allow you to specify default values for parameters.

Benefits:
• Handle missing arguments
• Provide fallback values
• Make functions more flexible
• Avoid undefined errors

Note: Default values are used when:
• Parameter is undefined
• No argument is passed
• Argument is explicitly undefined`,
      code: `// Basic default parameters
function createUser(
  name = "Anonymous",
  age = 18,
  isAdmin = false
) {
  return { name, age, isAdmin };
}

// Complex default values
function fetchData(
  url,
  options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 5000
  }
) {
  // Implementation
}

// Default parameter with function
function getTimestamp(date = new Date()) {
  return date.getTime();
}

// Dependent defaults
function createRange(
  start = 0,
  end = start + 10,
  step = (end - start) / 2
) {
  const range = [];
  for (let i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
}

// Object with defaults
function configureApp({
  port = 3000,
  host = 'localhost',
  protocol = 'http'
} = {}) {
  return \`\${protocol}://\${host}:\${port}\`;
}`
    },
    {
      title: 'Rest Parameters',
      content: `Rest parameters allow a function to accept any number of arguments.

Features:
• Collects arguments into array
• Must be last parameter
• Only one rest parameter allowed
• Can be empty array
• Preserves array methods`,
      code: `// Basic rest parameter
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));  // 6
console.log(sum(10, 20));   // 30

// Combining regular and rest parameters
function multiply(factor, ...numbers) {
  return numbers.map(num => num * factor);
}

console.log(multiply(2, 1, 2, 3));  // [2, 4, 6]

// Rest parameter with array methods
function filterPositive(...numbers) {
  return numbers.filter(num => num > 0);
}

// Rest parameter in array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);  // [3, 4, 5]

// Rest parameter with objects
function logUserActions(userId, ...actions) {
  actions.forEach(action => {
    console.log(\`User \${userId}: \${action}\`);
  });
}`
    },
    {
      title: 'Destructured Parameters',
      content: `Destructuring allows you to extract values from objects and arrays passed as parameters.

Benefits:
• Named parameters
• Default values
• Nested destructuring
• Array destructuring
• Mixed destructuring`,
      code: `// Object destructuring
function printUser({ name, age, email = 'N/A' }) {
  console.log(\`Name: \${name}, Age: \${age}, Email: \${email}\`);
}

// Nested destructuring
function processOrder({
  id,
  customer: { name, address },
  items
}) {
  console.log(\`Order \${id} for \${name}\`);
  console.log(\`Shipping to: \${address}\`);
  console.log(\`Items: \${items.length}\`);
}

// Array destructuring
function processCoordinates([x, y, z = 0]) {
  return Math.sqrt(x*x + y*y + z*z);
}

// Mixed destructuring
function processData({
  title,
  coords: [x, y],
  settings: { theme = 'light' }
}) {
  console.log(\`\${title}: (\${x}, \${y}) - \${theme}\`);
}

// Destructuring with rest
function processItems({
  category,
  subCategory,
  ...otherProps
}) {
  console.log('Category:', category);
  console.log('Sub-category:', subCategory);
  console.log('Other:', otherProps);
}`
    },
    {
      title: 'Parameter Validation',
      content: `It's important to validate parameters to ensure function reliability.

Validation types:
• Type checking
• Range validation
• Required fields
• Format validation
• Custom validation

Best practices:
• Validate early
• Provide clear errors
• Use TypeScript for static typing`,
      code: `// Type checking
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Parameters must be numbers');
  }
  return a * b;
}

// Range validation
function setVolume(level) {
  if (level < 0 || level > 100) {
    throw new RangeError('Volume must be between 0 and 100');
  }
  // Set volume implementation
}

// Required fields
function createUser(userData) {
  const required = ['username', 'email', 'password'];
  
  for (const field of required) {
    if (!userData[field]) {
      throw new Error(\`\${field} is required\`);
    }
  }
  
  // Create user implementation
}

// Format validation
function validateEmail(email) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  return true;
}

// Custom validation
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function processPayment({
  amount,
  currency = 'USD',
  method = 'credit'
}) {
  // Amount validation
  if (amount <= 0) {
    throw new ValidationError('Amount must be positive');
  }
  
  // Currency validation
  const validCurrencies = ['USD', 'EUR', 'GBP'];
  if (!validCurrencies.includes(currency)) {
    throw new ValidationError('Invalid currency');
  }
  
  // Payment method validation
  const validMethods = ['credit', 'debit', 'paypal'];
  if (!validMethods.includes(method)) {
    throw new ValidationError('Invalid payment method');
  }
  
  // Process payment implementation
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
      <h1 className="text-4xl font-bold mb-6">Function Parameters</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Function Parameters</h2>
        <p className="text-gray-700 mb-4">
          Learn how to work with different types of function parameters in JavaScript.
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
        <h3 className="text-xl font-semibold mb-4">Parameter Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use default parameters instead of checking undefined</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Validate parameters at the start of the function</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use destructuring for cleaner function signatures</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Document parameter types and constraints</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Parameters; 