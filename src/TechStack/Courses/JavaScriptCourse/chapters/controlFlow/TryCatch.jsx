import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiPlay } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TryCatch = () => {
  const sections = [
    {
      title: 'Try...Catch Statement',
      content: `The try...catch statement is used to handle errors in JavaScript:

• try - contains the code that might throw an error
• catch - handles the error if one occurs
• finally - executes regardless of whether an error occurred
• throw - creates custom errors`,
      code: `try {
  // Code that might throw an error
  const result = someUndefinedVariable + 1;
} catch (error) {
  console.error(error.message);
} finally {
  console.log("This always runs");
}`
    },
    {
      title: 'Try Block',
      content: `The try block contains code that might throw an error.

Common scenarios:
• Accessing undefined variables
• Invalid mathematical operations
• Network requests
• File operations
• JSON parsing
• Array/Object operations`,
      code: `// Accessing undefined
try {
  console.log(nonExistentVariable);
} catch (error) {
  console.log("Variable doesn't exist");
}

// Mathematical error
try {
  const result = 10 / 0;  // Infinity in JavaScript
  const result2 = Math.sqrt(-1);  // NaN
} catch (error) {
  console.log("Mathematical error");
}

// JSON parsing
try {
  const data = JSON.parse("invalid json");
} catch (error) {
  console.log("Invalid JSON format");
}

// Array operations
try {
  const arr = [1, 2, 3];
  console.log(arr[10].toString());
} catch (error) {
  console.log("Array index out of bounds");
}`
    },
    {
      title: 'Catch Block',
      content: `The catch block handles any errors thrown in the try block.

The error object contains:
• message - error description
• name - error type
• stack - stack trace

You can also:
• Log the error
• Handle specific error types
• Provide fallback values
• Show user-friendly messages`,
      code: `// Basic error handling
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.name);     // "Error"
  console.log(error.message);  // "Something went wrong"
  console.log(error.stack);    // Stack trace
}

// Handling specific errors
try {
  const value = JSON.parse("invalid");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON parsing error");
  } else {
    console.log("Other error");
  }
}

// Providing fallback values
let data;
try {
  data = JSON.parse(localStorage.getItem("user"));
} catch (error) {
  data = { name: "Guest" };  // Fallback
}

// User-friendly messages
try {
  // Database operation
  throw new Error("DB_CONNECTION_FAILED");
} catch (error) {
  const messages = {
    DB_CONNECTION_FAILED: "Unable to connect to database",
    INVALID_INPUT: "Please check your input"
  };
  
  alert(messages[error.message] || "An error occurred");
}`
    },
    {
      title: 'Finally Block',
      content: `The finally block executes after try/catch, regardless of the outcome.

Use finally for:
• Cleanup operations
• Closing connections
• Releasing resources
• Resetting states
• Logging completion

The finally block runs even if:
• try block succeeds
• catch block handles an error
• return statement is encountered`,
      code: `// Resource cleanup
let connection;
try {
  connection = openDatabaseConnection();
  // Database operations
} catch (error) {
  console.error("Database error:", error);
} finally {
  if (connection) {
    connection.close();  // Always close the connection
  }
}

// File handling
let file;
try {
  file = openFile("example.txt");
  // File operations
} catch (error) {
  console.error("File error:", error);
} finally {
  if (file) {
    file.close();  // Always close the file
  }
}

// State reset
let processing = false;
try {
  processing = true;
  // Complex operation
  throw new Error("Operation failed");
} catch (error) {
  console.error(error);
} finally {
  processing = false;  // Always reset the state
}

// Return in try-catch
function divide(a, b) {
  try {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  } catch (error) {
    return null;
  } finally {
    console.log("Division attempted");  // Always runs
  }
}`
    },
    {
      title: 'Throwing Custom Errors',
      content: `You can throw custom errors using:
• throw statement
• Error constructor
• Custom Error classes

Types of errors:
• Error - base type
• SyntaxError
• ReferenceError
• TypeError
• RangeError
• Custom errors`,
      code: `// Basic throw
throw "Error occurred";  // Not recommended
throw new Error("Better error");

// Different error types
throw new SyntaxError("Invalid syntax");
throw new TypeError("Invalid type");
throw new ReferenceError("Invalid reference");

// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Using custom error
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required");
  }
  if (!user.email) {
    throw new ValidationError("Email is required");
  }
}

try {
  validateUser({ name: "" });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation failed:", error.message);
  } else {
    console.log("Other error:", error);
  }
}

// Async error handling
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;  // Re-throw for caller to handle
  }
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
      <h1 className="text-4xl font-bold mb-6">Error Handling with Try...Catch</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">Error Handling in JavaScript</h2>
        <p className="text-gray-700 mb-4">
          Learn how to handle errors gracefully using try...catch statements in JavaScript.
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
        <h3 className="text-xl font-semibold mb-4">Error Handling Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Always catch specific errors before general ones</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Use finally for cleanup operations</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Create custom error classes for specific error types</p>
          </li>
          <li className="flex items-start">
            <FiCode className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
            <p className="text-gray-700">Provide meaningful error messages for better debugging</p>
          </li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default TryCatch; 