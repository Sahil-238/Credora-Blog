import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiBox, FiCpu, FiGitBranch } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TopicNavigation from '../../../../components/TopicNavigation';

const Basics = () => {
  const sections = [
    {
      id: 'variables',
      title: 'Variables and Data Types',
      icon: <FiBox />,
      code: `// Variable declarations
let name = "John";           // String
const age = 25;             // Number
var isStudent = true;       // Boolean
let skills = ["JS", "React"]; // Array
let user = {                // Object
  name: "John",
  age: 25
};
let empty = null;          // Null
let undefined_var;         // Undefined`,
      explanation: `JavaScript has several data types and ways to declare variables:
• let: Block-scoped, can be reassigned
• const: Block-scoped, cannot be reassigned
• var: Function-scoped (older way)

Common data types include:
• String: Text values
• Number: Both integers and decimals
• Boolean: true or false
• Array: Ordered list of values
• Object: Collection of key-value pairs
• Null: Intentional absence of value
• Undefined: Variable declared but not assigned`
    },
    {
      id: 'operators',
      title: 'Operators',
      icon: <FiCpu />,
      code: `// Arithmetic Operators
let sum = 5 + 3;    // Addition
let diff = 10 - 4;  // Subtraction
let prod = 3 * 6;   // Multiplication
let quot = 15 / 3;  // Division
let rem = 17 % 5;   // Remainder

// Comparison Operators
let isEqual = 5 === "5";    // false (strict equality)
let isLoose = 5 == "5";     // true (loose equality)
let isGreater = 10 > 5;     // true
let isLessEqual = 7 <= 7;   // true

// Logical Operators
let and = true && false;    // false
let or = true || false;     // true
let not = !true;           // false`,
      explanation: `Operators in JavaScript allow you to:
• Perform mathematical calculations
• Compare values
• Combine logical conditions
• Manipulate data`
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      icon: <FiGitBranch />,
      code: `// If-else statement
let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  default:
    console.log("Other day");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ["apple", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}`,
      explanation: `Control flow statements determine how your code executes:
• if-else: Make decisions based on conditions
• switch: Handle multiple conditions
• for loops: Repeat code a specific number of times
• for...of: Iterate over array elements
• while: Repeat while a condition is true`
    },
    {
      id: 'functions',
      title: 'Functions',
      icon: <FiCode />,
      code: `// Function Declaration
function greet(name) {
  return "Hello, " + name;
}

// Arrow Function
const add = (a, b) => a + b;

// Function Expression
const multiply = function(x, y) {
  return x * y;
};

// Default Parameters
function welcome(name = "Guest") {
  return "Welcome, " + name;
}

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}`,
      explanation: `Functions are reusable blocks of code:
• Function Declaration: Traditional way to define functions
• Arrow Functions: Shorter syntax, introduced in ES6
• Function Expression: Function assigned to a variable
• Parameters: Values passed to functions
• Return: Value output by the function`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">JavaScript Basics</h1>
      <p className="text-gray-600 mb-8">
        Master the fundamental concepts of JavaScript programming. These building blocks will form the foundation of your JavaScript journey.
      </p>

      <div className="space-y-12">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <span className="text-blue-600 mr-3">{section.icon}</span>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Example Code</h3>
                <SyntaxHighlighter 
                  language="javascript" 
                  style={atomDark}
                  className="rounded-lg"
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Explanation</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {section.explanation}
                </p>
              </div>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Practice Section */}
      <div className="mt-12 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Practice Time!</h3>
        <p className="text-gray-600 mb-4">
          Try out these concepts in the interactive code editor below or move on to the next chapter.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Open Editor
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Next Chapter
          </button>
        </div>
      </div>
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Basics; 