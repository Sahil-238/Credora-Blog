import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const InlineFunctions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Inline Functions in C++</h1>
      
      <h2>What are Inline Functions?</h2>
      <p>
        Inline functions are a C++ enhancement feature that can help make your program
        faster. When a function is declared as inline, the compiler places a copy of the
        function's code at each point where the function is called at compile time.
      </p>

      <h2>Basic Syntax</h2>
      <CodeEditor
        defaultValue={`// Inline function declaration
inline return_type function_name(parameters) {
    // function body
}

// Example
inline int square(int x) {
    return x * x;
}`}
        language="cpp"
      />

      <h2>When to Use Inline Functions</h2>
      <CodeEditor
        defaultValue={`// Good candidate for inline function (small and simple)
inline double getArea(double radius) {
    return 3.14159 * radius * radius;
}

// Bad candidate for inline function (complex logic)
inline void complexFunction() {
    // Multiple operations
    // Loops
    // Conditional statements
    // etc.
}`}
        language="cpp"
      />

      <h2>Implicit Inline Functions</h2>
      <p>
        Member functions defined inside the class definition are implicitly inline.
      </p>
      <CodeEditor
        defaultValue={`class Rectangle {
    int width, height;
public:
    // Implicitly inline
    int getArea() {
        return width * height;
    }
    
    // Explicitly inline
    inline void setDimensions(int w, int h);
};

// Definition of inline member function outside class
inline void Rectangle::setDimensions(int w, int h) {
    width = w;
    height = h;
}`}
        language="cpp"
      />

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <p className="text-yellow-700">
          <strong>Important Notes:</strong>
          <ul className="list-disc ml-4">
            <li>The inline keyword is just a suggestion to the compiler</li>
            <li>The compiler may choose to ignore the inline request</li>
            <li>Best suited for small, frequently called functions</li>
            <li>Can increase code size if overused</li>
          </ul>
        </p>
      </div>

      <h2>Advantages and Disadvantages</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3>Advantages</h3>
          <ul className="list-disc ml-4">
            <li>Reduces function call overhead</li>
            <li>Can lead to optimization</li>
            <li>Useful for small, frequently used functions</li>
          </ul>
        </div>
        <div>
          <h3>Disadvantages</h3>
          <ul className="list-disc ml-4">
            <li>Increases code size</li>
            <li>Can affect instruction cache</li>
            <li>Not suitable for large functions</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default InlineFunctions; 