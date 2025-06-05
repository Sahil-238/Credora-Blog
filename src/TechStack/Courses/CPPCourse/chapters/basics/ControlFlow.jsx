import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const ControlFlow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Control Flow in C++</h1>
      
      <h2>Conditional Statements</h2>
      
      <h3>if-else Statement</h3>
      <CodeEditor
        defaultValue={`// Basic if-else
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}

// if-else if-else
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if all conditions are false
}`}
        language="cpp"
      />

      <h3>switch Statement</h3>
      <CodeEditor
        defaultValue={`switch (expression) {
    case constant1:
        // code for constant1
        break;
    case constant2:
        // code for constant2
        break;
    default:
        // default code
        break;
}`}
        language="cpp"
      />

      <h2>Loops</h2>
      
      <h3>for Loop</h3>
      <CodeEditor
        defaultValue={`// Basic for loop
for (int i = 0; i < 10; i++) {
    // code to repeat
}

// Range-based for loop (C++11)
for (const auto& item : container) {
    // process item
}`}
        language="cpp"
      />

      <h3>while and do-while Loops</h3>
      <CodeEditor
        defaultValue={`// while loop
while (condition) {
    // code to repeat
}

// do-while loop
do {
    // code to repeat
} while (condition);`}
        language="cpp"
      />

      <h2>Jump Statements</h2>
      <CodeEditor
        defaultValue={`// break statement
for (int i = 0; i < 10; i++) {
    if (i == 5) break;  // exit loop
}

// continue statement
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;  // skip even numbers
    // process odd numbers
}

// return statement
return value;  // exit function with value

// goto statement (use sparingly)
goto label;
// ... code ...
label:
    // code to jump to`}
        language="cpp"
      />

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="text-yellow-700">
          <strong>Best Practice:</strong> Avoid using <code>goto</code> statements as they
          can make code harder to understand and maintain. Instead, use structured control
          flow statements like loops and functions.
        </p>
      </div>
    </motion.div>
  );
};

export default ControlFlow; 