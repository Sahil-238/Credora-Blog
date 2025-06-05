import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Constants = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Constants in C++</h1>
      
      <h2>What are Constants?</h2>
      <p>
        Constants are values that cannot be modified after they are defined. In C++,
        there are several ways to declare constants.
      </p>

      <h2>Types of Constants</h2>
      
      <h3>1. const Keyword</h3>
      <CodeEditor
        defaultValue={`// Constant variables
const int MAX_SIZE = 100;
const double PI = 3.14159;
const char GRADE = 'A';
const std::string MESSAGE = "Hello";

// Constant pointers
const int* ptr1;         // Pointer to a constant integer
int* const ptr2 = &var;  // Constant pointer to an integer
const int* const ptr3;   // Constant pointer to a constant integer`}
        language="cpp"
      />

      <h3>2. #define Preprocessor Directive</h3>
      <CodeEditor
        defaultValue={`// Macro constants
#define MAX_BUFFER_SIZE 1024
#define PI 3.14159
#define DEBUG_MODE

// Macro with parameters
#define SQUARE(x) ((x) * (x))`}
        language="cpp"
      />

      <h3>3. constexpr Keyword (C++11)</h3>
      <CodeEditor
        defaultValue={`// Compile-time constants
constexpr int ARRAY_SIZE = 100;
constexpr double GOLDEN_RATIO = 1.618033988749895;

// Constexpr functions
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}`}
        language="cpp"
      />

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="text-yellow-700">
          <strong>Best Practice:</strong> Use <code>const</code> when you want to declare
          constants that are evaluated at runtime, and <code>constexpr</code> for constants
          that can be evaluated at compile time. Avoid using <code>#define</code> for
          constants as it doesn't respect scope and type checking.
        </p>
      </div>
    </motion.div>
  );
};

export default Constants; 