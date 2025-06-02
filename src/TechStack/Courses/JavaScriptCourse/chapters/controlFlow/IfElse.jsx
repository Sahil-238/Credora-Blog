import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const IfElse = () => {
  const sections = [
    {
      title: 'JavaScript if...else Statements',
      content: `The if...else statement executes a block of code if a specified condition is true.

The basic syntax is:
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}`,
      code: `// Basic if...else
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// Multiple conditions
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`
    },
    {
      title: 'Conditional Expressions',
      content: `Conditions can use various comparison operators:

• == equal to (value)
• === equal to (value and type)
• != not equal to (value)
• !== not equal to (value and type)
• > greater than
• < less than
• >= greater than or equal to
• <= less than or equal to`,
      code: `// Comparison operators
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Can enter the venue");
} else {
  console.log("Cannot enter the venue");
}

// Type comparison
let x = "5";
if (x === 5) {
  console.log("Strict equality: types match");
} else if (x == 5) {
  console.log("Loose equality: values match");
}

// Multiple conditions with logical operators
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("Day off!");
} else {
  console.log("Work day!");
}`
    },
    {
      title: 'Nested if Statements',
      content: `You can nest if statements inside other if statements.

However, too many nested if statements can make code hard to read.
Consider using switch statements or early returns for complex conditions.`,
      code: `// Nested if statements
let temperature = 25;
let isRaining = false;

if (temperature > 20) {
  if (!isRaining) {
    console.log("Perfect weather for a walk!");
  } else {
    console.log("Bring an umbrella!");
  }
} else {
  if (!isRaining) {
    console.log("A bit cold, but okay for a walk");
  } else {
    console.log("Better stay inside");
  }
}

// Better approach with combined conditions
if (temperature > 20 && !isRaining) {
  console.log("Perfect weather for a walk!");
} else if (temperature > 20 && isRaining) {
  console.log("Bring an umbrella!");
} else if (temperature <= 20 && !isRaining) {
  console.log("A bit cold, but okay for a walk");
} else {
  console.log("Better stay inside");
}`
    },
    {
      title: 'Truthy and Falsy Values',
      content: `In JavaScript, a value is considered "truthy" if it converts to true in a boolean context.
A value is considered "falsy" if it converts to false.

Falsy values:
• false
• 0
• "" (empty string)
• null
• undefined
• NaN

All other values are truthy.`,
      code: `// Truthy and falsy values
let name = "";
if (name) {
  console.log("Name is: " + name);
} else {
  console.log("Name is empty");  // This will run
}

let number = 0;
if (number) {
  console.log("Number exists");
} else {
  console.log("Number is zero or not defined");  // This will run
}

// Common use cases
let user = null;
if (!user) {
  console.log("Please log in");  // This will run
}

let array = [];
if (array.length) {
  console.log("Array has items");
} else {
  console.log("Array is empty");  // This will run
}`
    },
    {
      title: 'Ternary Operator',
      content: `The ternary operator is a shorthand way of writing an if...else statement.

Syntax:
condition ? expressionIfTrue : expressionIfFalse

Best used for simple conditions and assignments.`,
      code: `// Basic ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);

// Multiple conditions
let score = 85;
let grade = score >= 90 ? "A" :
           score >= 80 ? "B" :
           score >= 70 ? "C" : "F";
console.log("Grade:", grade);

// With template literals
let name = "John";
console.log(\`Hello \${name ? name : "Guest"}\`);

// In JSX/React (common use case)
const Button = ({ isLoggedIn }) => (
  <button>
    {isLoggedIn ? "Logout" : "Login"}
  </button>
);`
    },
    {
      title: 'Best Practices',
      content: `Here are some best practices for using if...else statements:

• Use === instead of == for comparison
• Keep conditions simple and readable
• Use early returns for guard clauses
• Avoid deep nesting
• Use meaningful condition names
• Consider switch statements for multiple conditions`,
      code: `// Early returns (guard clauses)
function processUser(user) {
  if (!user) {
    return "No user provided";
  }

  if (!user.name) {
    return "User name is required";
  }

  if (!user.age) {
    return "User age is required";
  }

  return \`Processing user \${user.name}\`;
}

// Meaningful condition names
const isUserLoggedIn = user && user.isAuthenticated;
const hasRequiredRole = user.role === "admin";

if (isUserLoggedIn && hasRequiredRole) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Avoid deep nesting
function getInsuranceAmount(status) {
  if (status === "invalid") {
    return 0;
  }
  
  if (status === "expired") {
    return 0;
  }
  
  if (status === "active") {
    return 100;
  }
  
  return 50; // default amount
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
      <h1 className="text-4xl font-bold mb-6">JavaScript if...else Statements</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding Conditional Statements</h2>
        <p className="text-gray-700 mb-4">
          Learn how to control the flow of your program using if...else statements and conditional logic.
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
        <h3 className="text-xl font-semibold mb-4">Common if...else Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using = instead of == or === in conditions</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Forgetting curly braces for multi-line blocks</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Too many nested if statements</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Conditional Statement Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Always use strict equality (===) for comparisons</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Keep conditions simple and readable</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use early returns to reduce nesting</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice writing conditional statements in our interactive editor.
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

export default IfElse; 