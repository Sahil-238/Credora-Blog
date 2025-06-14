import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Statements = () => {
  const sections = [
    {
      title: 'What are Statements?',
      content: `JavaScript statements are:
• Instructions executed by the computer
• Composed of values, operators, expressions
• Ended with semicolons (optional but recommended)
• Executed in sequence
• Case-sensitive
• Can span multiple lines`,
      code: `// Basic statements
let x = 5;           // Assignment statement
console.log(x);      // Function call statement
x = x + 1;          // Expression statement
if (x > 5) {        // Control flow statement
    x = 0;
}

// Multiple statements
let a = 1; let b = 2; let c = 3;

// Multi-line statement
document
    .getElementById("demo")
    .innerHTML = "Hello";`
    },
    {
      title: 'Types of Statements',
      content: `JavaScript has several types of statements:
• Declaration statements (var, let, const)
• Expression statements
• Control flow statements
• Function declarations
• Error handling statements
• Object manipulation statements
• Import/Export statements`,
      code: `// Declaration statements
let name = "John";
const PI = 3.14159;
var oldVar = "legacy";

// Expression statements
x++;
y = x * 2;
console.log("Hello");

// Control flow
if (condition) {
    // code block
}

// Function declaration
function greet() {
    return "Hello";
}

// Error handling
try {
    // code
} catch (error) {
    // handle error
}

// Import/Export
import { data } from './data';
export const value = 42;`
    },
    {
      title: 'Statement Blocks',
      content: `Statement blocks in JavaScript:
• Grouped by curly braces {}
• Create a code block
• Used with control structures
• Can be nested
• Have their own scope (let/const)
• Share function scope (var)`,
      code: `// Basic block
{
    let x = 1;
    let y = 2;
    console.log(x + y);
}

// Control structure blocks
if (true) {
    let a = 1;
    {
        let b = 2;
        console.log(a + b);
    }
    // console.log(b); // Error: b not defined
}

// Function blocks
function example() {
    let x = 1;
    if (true) {
        let y = 2;
        console.log(x + y);
    }
    // console.log(y); // Error: y not defined
}`
    },
    {
      title: 'Statement Completion',
      content: `Statement completion rules:
• Semicolons mark statement end
• Automatic Semicolon Insertion (ASI)
• Line breaks can affect code
• Return statements special rules
• Block statements don't need semicolons
• Some statements require semicolons`,
      code: `// Semicolon usage
let x = 5;
let y = 6

// ASI can cause issues
return
    x + y;  // Returns undefined!

// Correct way
return x + y;

// Block statements
if (true) {
    // code
} // No semicolon needed

// Required semicolons
do {
    // code
} while (condition);

// Expression statements
x++;
y = x * 2;

// Function expressions
const func = function() {
    // code
};  // Semicolon needed`
    },
    {
      title: 'Statement Keywords',
      content: `JavaScript uses keywords to define statements:
• break - Exit a loop
• continue - Skip iteration
• return - Exit function
• throw - Raise error
• if/else - Conditional
• switch - Multiple branches
• try/catch - Error handling
• import/export - Modules`,
      code: `// Break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}

// Continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

// Return statement
function add(a, b) {
    return a + b;
}

// Throw statement
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// Try-catch statement
try {
    divide(10, 0);
} catch (error) {
    console.error(error);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Statements</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Statements</h2>
        <p className="text-gray-700 mb-4">
          Learn about JavaScript statements, the building blocks of JavaScript programs. Statements are instructions
          that tell the computer what to do and how to execute code.
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
            <p className="text-gray-700">Forgetting to use semicolons in critical places</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Relying too much on automatic semicolon insertion</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Writing return statements on multiple lines incorrectly</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Always use semicolons to end statements</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Keep statements simple and focused</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use proper indentation for readability</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Statements; 