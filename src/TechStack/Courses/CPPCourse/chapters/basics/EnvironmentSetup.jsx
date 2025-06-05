import React from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../../../../../components/CodeEditor';
import CodePreview from '../../../../../components/CodePreview';

const EnvironmentSetup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose max-w-none"
    >
      <h1>Setting Up Your C++ Development Environment</h1>
      
      <h2>Required Tools</h2>
      <ul>
        <li>A C++ compiler (GCC, Clang, or MSVC)</li>
        <li>An Integrated Development Environment (IDE) or text editor</li>
        <li>Build tools and debugger</li>
      </ul>

      <h2>Windows Setup</h2>
      <p>For Windows users, we recommend installing:</p>
      <ul>
        <li>Visual Studio Community Edition with C++ workload, or</li>
        <li>MinGW (Minimalist GNU for Windows)</li>
      </ul>

      <div className="bg-gray-100 p-4 rounded-lg my-4">
        <h3>Installing MinGW</h3>
        <ol className="list-decimal list-inside">
          <li>Download MinGW installer from the official website</li>
          <li>Run the installer and select C++ compiler</li>
          <li>Add MinGW to system PATH</li>
          <li>Verify installation by running: <code>g++ --version</code></li>
        </ol>
      </div>

      <h2>Testing Your Setup</h2>
      <p>Let's create and run a simple C++ program to test your setup:</p>
      
      <CodeEditor
        defaultValue={`#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}`}
        language="cpp"
      />

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
        <p className="text-blue-700">
          <strong>Tip:</strong> Save this code in a file named <code>hello.cpp</code> and
          compile it using: <code>g++ hello.cpp -o hello</code>
        </p>
      </div>
    </motion.div>
  );
};

export default EnvironmentSetup; 