import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Syntax = () => {
  const sections = [
    {
      title: 'JavaScript Syntax Fundamentals',
      content: `JavaScript syntax consists of:
• Statements - Instructions to be executed
• Values - Literal values or variables
• Operators - Symbols that perform operations
• Expressions - Combinations of values and operators
• Keywords - Reserved words with special meaning
• Comments - Code documentation`,
      code: `// This is a single-line comment

/* This is a
   multi-line comment */

// Statement
let greeting = "Hello, World!";

// Expression
let sum = 5 + 10;

// Keywords
const PI = 3.14159;
if (true) {
    console.log("This is true");
}`
    },
    {
      title: 'Variables and Declarations',
      content: `JavaScript has three ways to declare variables:
• var - Function-scoped (older)
• let - Block-scoped (recommended)
• const - Block-scoped, constant

Variable naming rules:
• Must start with letter, underscore, or dollar sign
• Can contain numbers, letters, underscores
• Case-sensitive
• Cannot use reserved keywords`,
      code: `// Variable declarations
var oldWay = "Legacy code";
let modernWay = "Current standard";
const CONSTANT = "Won't change";

// Valid variable names
let firstName = "John";
let _private = "Hidden";
let $special = "Money";
let camelCase = "Standard";
let user1 = "First user";

// Invalid names
// let 1user = "Wrong";    // Can't start with number
// let for = "Reserved";   // Can't use keywords
// let my-var = "Invalid"; // No hyphens allowed`
    },
    {
      title: 'Semicolons and Line Breaks',
      content: `JavaScript uses semicolons to separate statements:
• Semicolons are optional (ASI - Automatic Semicolon Insertion)
• Best practice: Always use semicolons
• Multiple statements on one line need semicolons
• Line breaks can affect code behavior`,
      code: `// Semicolon usage
let name = "John";
let age = 30;

// Multiple statements on one line
let x = 5; let y = 10; let z = 15;

// Line breaks can affect return values
return
    "Hello"; // Returns undefined!

// Correct way
return "Hello";

// ASI can cause issues
let a = 5
let b = a + 5 // Works, but not recommended
[1, 2, 3].forEach(console.log) // Error!`
    },
    {
      title: 'Code Blocks and Scope',
      content: `Code blocks in JavaScript:
• Defined by curly braces {}
• Create new scope for let/const
• Used in control structures
• Indentation for readability
• Block-level declarations`,
      code: `// Code blocks and scope
{
    let blockScoped = "Only visible here";
    const alsoBlockScoped = "Same here";
    var notBlockScoped = "Visible outside";
}

// console.log(blockScoped); // Error
// console.log(alsoBlockScoped); // Error
console.log(notBlockScoped); // Works

// Function block
function example() {
    let local = "Function scoped";
    if (true) {
        let evenMoreLocal = "Block scoped";
        console.log(local); // Works
    }
    // console.log(evenMoreLocal); // Error
}`
    },
    {
      title: 'Case Sensitivity',
      content: `JavaScript is case-sensitive:
• Variables with different cases are different
• Functions are case-sensitive
• Properties are case-sensitive
• HTML is not case-sensitive
• Best practice: Be consistent with naming`,
      code: `// Case sensitivity examples
let color = "red";
let Color = "blue";
let COLOR = "green";

// All are different variables
console.log(color);  // "red"
console.log(Color);  // "blue"
console.log(COLOR);  // "green"

// Function case sensitivity
function sayHello() {}
function sayHELLO() {}

// These are different functions
sayHello();
sayHELLO();

// Object properties
const user = {
    name: "John",
    Name: "Different",
    NAME: "Also different"
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
      <h1 className="text-4xl font-bold mb-6">JavaScript Syntax</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding JavaScript Syntax</h2>
        <p className="text-gray-700 mb-4">
          JavaScript syntax defines the rules for writing valid JavaScript code. Understanding these rules
          is fundamental to writing correct and maintainable programs.
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
        <h3 className="text-xl font-semibold mb-4">Common Syntax Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Forgetting to declare variables with let, const, or var</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using = instead of == or === for comparison</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Missing quotes around string values</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice JavaScript syntax in our interactive editor.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Open Editor
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
            View Examples
          </button>
        </div>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Syntax; 