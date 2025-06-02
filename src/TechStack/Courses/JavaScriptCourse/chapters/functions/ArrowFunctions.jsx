import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ArrowFunctions = () => {
  const sections = [
    {
      title: 'Arrow Functions',
      content: `Arrow functions provide a concise syntax for writing function expressions.

Key features:
• Shorter syntax
• Implicit return
• Lexical this binding
• No arguments object
• Cannot be used as constructors`,
      code: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function with block
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Arrow function with single parameter
const square = x => x * x;

// Arrow function with no parameters
const sayHello = () => "Hello!";`
    },
    {
      title: 'Syntax Variations',
      content: `Arrow functions have different syntax variations based on:
• Number of parameters
• Function body
• Return value
• Object literals

Common patterns:
• Single parameter
• Multiple parameters
• Empty parameter list
• Block body
• Expression body`,
      code: `// No parameters
const getRandomNumber = () => Math.random();

// Single parameter (parentheses optional)
const double = x => x * 2;
const square = (x) => x * x;

// Multiple parameters (parentheses required)
const add = (a, b) => a + b;

// Block body (braces required)
const getUser = (id) => {
  // Multiple statements
  const user = fetchUser(id);
  return user;
};

// Returning object literal (parentheses required)
const createPoint = (x, y) => ({ x, y });

// Multiple lines with implicit return
const getFullName = (user) => (
  \`\${user.firstName} \${user.lastName}\`
);

// Immediately invoked
const result = ((x) => x * 2)(4);  // 8

// Nested arrow functions
const multiply = (a) => (b) => a * b;
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4));  // 8`
    },
    {
      title: 'Lexical This',
      content: `Arrow functions don't bind their own this value.
They inherit this from the enclosing scope.

Benefits:
• No more .bind(this)
• No more that = this
• Cleaner event handlers
• Predictable behavior

Common use cases:
• Class methods
• Event handlers
• Callbacks
• Array methods`,
      code: `// Traditional function in object
const counter = {
  count: 0,
  start: function() {
    setInterval(function() {
      this.count++;  // 'this' is undefined
    }, 1000);
  }
};

// Arrow function fixes 'this'
const betterCounter = {
  count: 0,
  start: function() {
    setInterval(() => {
      this.count++;  // 'this' refers to betterCounter
    }, 1000);
  }
};

// Class with arrow methods
class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  start = () => {
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }
}

// Event handler
class Button {
  handleClick = () => {
    console.log('Button clicked');
  }
  
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

// Array methods with arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);`
    },
    {
      title: 'Use Cases',
      content: `Arrow functions are best used in:
• Array methods
• Promise chains
• React components
• Event handlers
• Callbacks

Avoid using arrow functions for:
• Object methods
• Prototype methods
• Constructor functions
• Event handler methods with this`,
      code: `// Array methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x * x);
const even = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);

// Promise chains
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    const processed = data.map(item => ({
      id: item.id,
      name: item.name.toUpperCase()
    }));
    return processed;
  })
  .catch(error => console.error(error));

// React components
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

// Event handlers
element.addEventListener('click', () => {
  console.log('Clicked!');
});

// Bad: Object methods
const obj = {
  name: 'Object',
  // Don't do this
  getName: () => this.name,  // 'this' is wrong
  // Do this instead
  getName() {
    return this.name;
  }
};

// Bad: Constructor functions
// Don't do this
const Person = () => {
  this.name = 'John';  // 'this' is wrong
};

// Do this instead
function Person() {
  this.name = 'John';
}`
    },
    {
      title: 'Best Practices',
      content: `Follow these best practices when using arrow functions:

• Use for short, simple functions
• Use for callbacks
• Use for array methods
• Use when 'this' binding is needed
• Avoid for methods
• Avoid for constructors
• Be consistent with syntax
• Consider readability`,
      code: `// Good: Short and simple
const square = x => x * x;
const isEven = x => x % 2 === 0;

// Good: Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const sum = numbers.reduce((a, b) => a + b, 0);

// Good: Callbacks
setTimeout(() => {
  console.log('Timeout complete');
}, 1000);

// Good: Promise chains
promise
  .then(data => processData(data))
  .catch(error => handleError(error));

// Bad: Object methods
const obj = {
  value: 42,
  getValue: () => this.value  // Wrong 'this'
};

// Good: Object methods
const obj = {
  value: 42,
  getValue() {  // Method shorthand
    return this.value;
  }
};

// Bad: Too complex
const process = x => {
  const y = x * 2;
  const z = y * 3;
  if (z > 100) {
    return z - 100;
  } else {
    return z;
  }
};

// Good: Break into smaller functions
const double = x => x * 2;
const triple = x => x * 3;
const subtractHundred = x => x - 100;

const process = x => {
  const y = double(x);
  const z = triple(y);
  return z > 100 ? subtractHundred(z) : z;
};`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Arrow Functions</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Arrow Functions</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use arrow functions to write more concise and maintainable JavaScript code.
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
        <h3 className="text-xl font-semibold mb-4">Arrow Function Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use arrow functions for callbacks and simple operations</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Avoid arrow functions for object methods and constructors</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Be consistent with syntax within your codebase</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Consider readability when choosing between traditional and arrow functions</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default ArrowFunctions; 