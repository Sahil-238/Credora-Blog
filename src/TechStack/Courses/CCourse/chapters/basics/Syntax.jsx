import React from 'react';
import { motion } from 'framer-motion';

const Syntax = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">C Syntax</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Syntax Rules</h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <div>
              <h3 className="font-medium text-gray-800">Statements and Semicolons</h3>
              <p className="text-gray-600">Every statement in C must end with a semicolon (;)</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono">
                <pre>{`int x = 5;
printf("Hello");`}</pre>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <div>
              <h3 className="font-medium text-gray-800">Blocks and Braces</h3>
              <p className="text-gray-600">Code blocks are enclosed in curly braces { }</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono">
                <pre>{`if (x > 0) {
    printf("Positive");
    x = 0;
}`}</pre>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <div>
              <h3 className="font-medium text-gray-800">Case Sensitivity</h3>
              <p className="text-gray-600">C is case-sensitive: variables 'number' and 'Number' are different</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono">
                <pre>{`int number = 5;
int Number = 10; // Different variable`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Program Structure</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 font-mono">
          <pre>{`// Include header files
#include <stdio.h>
#include <stdlib.h>

// Function declaration
void greet(char name[]);

// Main function
int main() {
    // Variable declarations
    int age = 25;
    
    // Function call
    greet("John");
    
    return 0;
}

// Function definition
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}`}</pre>
        </div>
        <div className="space-y-3 mt-4">
          <p className="text-gray-600">A typical C program consists of these parts:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Header file inclusions</li>
            <li>Function declarations (prototypes)</li>
            <li>Global variable declarations</li>
            <li>Main function</li>
            <li>Other function definitions</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Comments in C</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 font-mono">
          <pre>{`// Single-line comment

/* Multi-line comment
   Can span multiple lines
   Like this */`}</pre>
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Top
        </button>
      </div>
    </motion.div>
  );
};

export default Syntax; 