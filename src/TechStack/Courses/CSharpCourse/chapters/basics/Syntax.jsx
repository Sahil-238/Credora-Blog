import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const Syntax = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">C# Syntax</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Syntax</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            C# syntax is similar to other C-style languages like Java and C++. Here are the basic elements:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CodeEditor
              defaultValue={`// This is a single-line comment
/* This is a
   multi-line comment */

using System;  // Using directive

namespace MyProgram  // Namespace declaration
{
    class Program  // Class declaration
    {
        static void Main(string[] args)  // Main method
        {
            Console.WriteLine("Hello, World!");  // Statement
        }
    }
}`}
              language="csharp"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Variables and Data Types</h2>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <CodeEditor
            defaultValue={`// Variable declarations
int number = 42;
string text = "Hello";
bool isTrue = true;
double price = 19.99;
char letter = 'A';

// Constants
const double PI = 3.14159;

// Type inference using var
var name = "John";  // string
var age = 25;       // int`}
            language="csharp"
            height="200px"
          />
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