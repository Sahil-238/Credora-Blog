import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Switch = () => {
  const sections = [
    {
      title: 'JavaScript switch Statement',
      content: `The switch statement is used to perform different actions based on different conditions.

The switch statement evaluates an expression and executes the corresponding case block.

Basic syntax:
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}`,
      code: `// Basic switch statement
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);  // "Wednesday"`
    },
    {
      title: 'Grouping Cases',
      content: `You can group cases when they share the same code block.

This is useful when multiple values should result in the same action.`,
      code: `// Grouping cases
let fruit = "apple";
let category;

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    category = "Regular fruits";
    break;
  case "mango":
  case "pineapple":
    category = "Tropical fruits";
    break;
  case "blueberry":
  case "strawberry":
    category = "Berries";
    break;
  default:
    category = "Unknown fruit";
}

console.log(category);  // "Regular fruits"

// Another example with months
let month = 3;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
  default:
    season = "Invalid month";
}`
    },
    {
      title: 'Break and Fall-through',
      content: `The break statement is used to stop the execution of a switch block.

Without break, the execution will continue to the next case, even if the case doesn't match.

This behavior is called "fall-through" and can be used intentionally in some cases.`,
      code: `// Without break (fall-through)
let level = 2;
let message = "";

switch (level) {
  case 3:
    message += "Admin access. ";
  case 2:
    message += "Editor access. ";
  case 1:
    message += "Basic access. ";
    break;
  default:
    message = "No access.";
}

console.log(message);  // "Editor access. Basic access. "

// Intentional fall-through with comment
let score = 95;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80: // falls through
  case score >= 70:
    grade = "B";
    break;
  default:
    grade = "C";
}`
    },
    {
      title: 'Switch vs if...else',
      content: `Switch statements are often clearer than multiple if...else statements when:
• Comparing a single value against multiple options
• The conditions are based on equality
• There are many possible conditions

However, if...else is better when:
• Testing different expressions
• Using complex conditions
• Using ranges of values`,
      code: `// Switch example
let command = "start";

switch (command) {
  case "start":
    console.log("Starting...");
    break;
  case "stop":
    console.log("Stopping...");
    break;
  case "restart":
    console.log("Restarting...");
    break;
  default:
    console.log("Unknown command");
}

// Equivalent if...else
if (command === "start") {
  console.log("Starting...");
} else if (command === "stop") {
  console.log("Stopping...");
} else if (command === "restart") {
  console.log("Restarting...");
} else {
  console.log("Unknown command");
}

// Better with if...else (range comparison)
let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}`
    },
    {
      title: 'Switch with Expressions',
      content: `The switch statement can also use expressions in case statements.

However, the expressions must result in the same type as the switch expression.`,
      code: `// Switch with expressions
let age = 25;
let income = 50000;

switch (true) {
  case age < 18:
    console.log("Minor");
    break;
  case age >= 18 && income < 30000:
    console.log("Adult, low income");
    break;
  case age >= 18 && income >= 30000:
    console.log("Adult, regular income");
    break;
  default:
    console.log("Unknown category");
}

// Date example
let date = new Date();
let hour = date.getHours();

switch (true) {
  case hour < 12:
    console.log("Good morning");
    break;
  case hour < 18:
    console.log("Good afternoon");
    break;
  default:
    console.log("Good evening");
}`
    },
    {
      title: 'Best Practices',
      content: `Here are some best practices for using switch statements:

• Always include a default case
• Use break statements consistently
• Comment intentional fall-throughs
• Keep cases simple
• Consider readability when choosing between switch and if...else
• Group related cases together`,
      code: `// Good switch statement example
function getErrorMessage(code) {
  switch (code) {
    // Authentication errors
    case 401:
      return "Unauthorized access";
    case 403:
      return "Forbidden access";
    
    // Client errors
    case 404:
      return "Resource not found";
    case 400:
      return "Bad request";
    
    // Server errors
    case 500:
      return "Internal server error";
    case 503:
      return "Service unavailable";
    
    // Special cases
    case 0:
      return "Network error";
    case -1:
      return "Client timeout";
    
    // Default case
    default:
      return \`Unknown error (code: \${code})\`;
  }
}

// Example usage
console.log(getErrorMessage(404));  // "Resource not found"
console.log(getErrorMessage(999));  // "Unknown error (code: 999)"`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">JavaScript switch Statement</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Understanding switch Statements</h2>
        <p className="text-gray-700 mb-4">
          Learn how to use switch statements for handling multiple conditions based on a single value.
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
        <h3 className="text-xl font-semibold mb-4">Common switch Statement Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Forgetting break statements</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Missing default case</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-red-600 mt-1 mr-3" />
            <p className="text-gray-700">Using switch when if...else would be clearer</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Switch Statement Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Always include a default case</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use break statements consistently</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Group related cases together</p>
          </li>
        </ul>
      </div>

      {/* Try it Yourself Section */}
      <div className="mt-12 bg-green-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Try it Yourself</h3>
        <p className="text-gray-600 mb-4">
          Practice writing switch statements in our interactive editor.
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

export default Switch; 