import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Output = () => {
  const sections = [
    {
      title: 'JavaScript Output Methods',
      content: `JavaScript has several ways to display output:
• console.log() - Output to console
• document.write() - Write to HTML document
• innerHTML - Change HTML content
• alert() - Show popup message
• prompt() - Get user input
• confirm() - Get user confirmation`,
      code: `// Console output
console.log("Hello World");
console.info("Information");
console.warn("Warning");
console.error("Error");

// Document write
document.write("<h1>Hello World</h1>");

// innerHTML
document.getElementById("demo").innerHTML = "Hello World";

// Alert
alert("Hello World");

// Prompt
let name = prompt("Enter your name");

// Confirm
let result = confirm("Are you sure?");`
    },
    {
      title: 'Console Methods',
      content: `The console object provides several methods:
• log() - General output
• info() - Informational messages
• warn() - Warnings
• error() - Errors
• table() - Tabular data
• time() - Time tracking
• assert() - Conditional logging
• group() - Group messages`,
      code: `// Different console methods
console.log("Regular message");
console.info("Info message");
console.warn("Warning message");
console.error("Error message");

// Logging objects
const user = { name: "John", age: 30 };
console.log(user);

// Table format
console.table([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
]);

// Time tracking
console.time("Loop");
for(let i = 0; i < 1000000; i++) {}
console.timeEnd("Loop");

// Grouping
console.group("User Details");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd();`
    },
    {
      title: 'DOM Manipulation',
      content: `Modify HTML content through the DOM:
• innerHTML - Change HTML content
• textContent - Change text content
• value - Change form input values
• setAttribute() - Change attributes
• style - Change CSS styles

Always validate content when using innerHTML.`,
      code: `// Changing HTML content
document.getElementById("demo").innerHTML = "<h2>New Content</h2>";

// Changing text content
document.getElementById("text").textContent = "New Text";

// Form values
document.getElementById("input").value = "New Value";

// Changing attributes
document.getElementById("img").setAttribute("src", "new-image.jpg");

// Changing styles
document.getElementById("box").style.backgroundColor = "blue";

// Creating elements
const div = document.createElement("div");
div.textContent = "New Element";
document.body.appendChild(div);`
    },
    {
      title: 'Dialog Boxes',
      content: `JavaScript provides three dialog boxes:
• alert() - Show a message
• confirm() - Get yes/no input
• prompt() - Get text input

These are synchronous and block code execution.
Modern web apps often use custom modals instead.`,
      code: `// Alert box
alert("Hello World!");

// Confirm box
if (confirm("Are you sure?")) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Prompt box
let name = prompt("Please enter your name", "John Doe");
if (name != null) {
    console.log("Hello " + name);
}

// Custom modal example
function showModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}`
    },
    {
      title: 'Debugging Output',
      content: `Debugging techniques:
• console.log() for values
• console.trace() for stack traces
• debugger statement
• try-catch blocks
• console.assert() for testing
• Performance monitoring
• Error handling`,
      code: `// Debug values
let x = 5;
console.log('x =', x);

// Stack trace
function foo() {
    console.trace('Trace');
}
foo();

// Debugger
function debug() {
    let x = 1;
    debugger;  // Code stops here in dev tools
    x++;
}

// Error handling
try {
    throw new Error('Test error');
} catch (error) {
    console.error('Caught:', error.message);
}

// Performance
console.time('Operation');
// ... some code ...
console.timeEnd('Operation');

// Assertions
console.assert(1 === 1, 'Math works!');
console.assert(1 === 2, 'Math is broken!');`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript Output</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Output Methods</h2>
        <p className="text-gray-700 mb-4">
          Learn the different ways to output data in JavaScript, from console logging to DOM manipulation
          and user interactions through dialog boxes.
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
            <p className="text-gray-700">Using document.write() after the document has loaded</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not escaping HTML when using innerHTML</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Overusing alert() for debugging instead of console.log()</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use console.log() for debugging instead of alert()</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Prefer textContent over innerHTML when dealing with text</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use custom modals instead of native dialog boxes for better UX</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Output; 