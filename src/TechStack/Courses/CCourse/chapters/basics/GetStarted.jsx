import React from 'react';
import { motion } from 'framer-motion';

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with C</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Setting Up Your Development Environment</h2>
        <p className="text-gray-600 mb-4">
          To start programming in C, you'll need to set up a proper development environment. This includes installing
          a C compiler and choosing a suitable text editor or IDE.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Required Tools:</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-2">
            <li>C Compiler:
              <ul className="list-none pl-6 pt-1 text-blue-600">
                <li>• GCC (GNU Compiler Collection) for Linux/macOS</li>
                <li>• MinGW for Windows</li>
                <li>• Microsoft Visual C++ Compiler</li>
              </ul>
            </li>
            <li>Text Editor/IDE:
              <ul className="list-none pl-6 pt-1 text-blue-600">
                <li>• Visual Studio Code with C/C++ extension</li>
                <li>• Code::Blocks</li>
                <li>• Dev-C++</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your First C Program</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 font-mono">
          <pre>{`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}</pre>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Let's break down this simple program:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li><code className="bg-gray-100 px-2 py-1 rounded">#include &lt;stdio.h&gt;</code> - Includes the standard input/output library</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">int main()</code> - The main function where program execution begins</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">printf()</code> - Function to print text to the console</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">return 0;</code> - Indicates successful program completion</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Compiling and Running</h2>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 font-mono">
          <p className="text-gray-400 mb-2"># Compile your program</p>
          <pre>gcc program.c -o program</pre>
          <p className="text-gray-400 mb-2 mt-4"># Run your program</p>
          <pre>./program</pre>
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

export default GetStarted; 