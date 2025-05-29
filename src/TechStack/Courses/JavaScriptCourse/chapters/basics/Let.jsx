import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Let = () => {
  const sections = [
    {
      title: 'The let Keyword',
      content: `The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be redeclared.
Variables defined with let must be declared before use.
Variables defined with let have block scope.`,
      code: `let x = "John Doe";
let x = 0;       // SyntaxError: 'x' has already been declared

// This is OK:
let y = "John Doe";
y = 0;           // Allowed: reassigning the value`
    },
    {
      title: 'Block Scope',
      content: `Before ES6 (2015), JavaScript had Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:`,
      code: `{
  let x = 2;
  // x can only be used here
}
// x can NOT be used here

// Example with if statement
if (true) {
  let blockScoped = "I'm only available inside this block";
  console.log(blockScoped); // Works
}
// console.log(blockScoped); // ReferenceError`
    },
    {
      title: 'Redeclaring Variables',
      content: `Redeclaring a variable using the let keyword can NOT be done in the same block scope.

Redeclaring a variable using the let keyword CAN be done in another block scope:`,
      code: `let x = 10;
// let x = 20;    // Not allowed

{
  let x = 2;      // Allowed: different scope
  console.log(x); // 2
}

console.log(x);   // 10`
    },
    {
      title: 'Let Hoisting',
      content: `Variables defined with let are hoisted to the top of their block, but not initialized.

Using a let variable before it is declared will result in a ReferenceError:`,
      code: `// This will result in ReferenceError:
console.log(x);  // Cannot access 'x' before initialization
let x = 5;

// This is OK:
let y;
console.log(y);  // undefined
y = 5;`
    },
    {
      title: 'Global Scope vs Block Scope',
      content: `Variables declared with var become properties of the window object.
Variables declared with let do not:`,
      code: `var x = 10;
let y = 20;

console.log(window.x); // 10
console.log(window.y); // undefined

// Block scope example
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // ReferenceError: i is not defined`
    },
    {
      title: 'Let in Loops',
      content: `The let keyword is especially useful in for loops:

Using var in a loop:
- The variable declared in the loop will be global
- The variable can be accessed outside the loop

Using let in a loop:
- The variable is only accessible within the loop
- Each iteration creates a new scope`,
      code: `// Using let in for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Using let with forEach
let numbers = [1, 2, 3];
numbers.forEach(function(number) {
  let doubled = number * 2;
  console.log(doubled);
});
// console.log(doubled); // ReferenceError

// Common use case with setTimeout
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Correctly prints 0, 1, 2
  }, 1000);
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
      <h1 className="text-4xl font-bold mb-6">JavaScript let Keyword</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding let Declaration</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use the let keyword to declare block-scoped variables in JavaScript.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="prose max-w-none mb-6">
              <p className="whitespace-pre-line text-gray-700">{section.content}</p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-lg font-semibold">Example</h3>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <FiPlay className="w-5 h-5" />
                </button>
              </div>
              <SyntaxHighlighter 
                language="javascript"
                style={atomDark}
                className="rounded-lg"
              >
                {section.code}
              </SyntaxHighlighter>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="mt-12 bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Common Mistakes with let</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Trying to redeclare let variables in the same scope</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using let variables before declaration (temporal dead zone)</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Assuming let creates global variables like var</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices with let</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use let instead of var for better scoping control</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Declare variables at the beginning of their scope</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use let for loop variables to avoid scope issues</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice using the let keyword in our interactive editor.
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

export default Let; 