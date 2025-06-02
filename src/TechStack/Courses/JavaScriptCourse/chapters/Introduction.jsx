import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiCode, FiBookOpen } from 'react-icons/fi';
import TopicNavigation from '../../../../components/TopicNavigation';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Introduction = () => {
  const codeExample = `// Your first JavaScript code
console.log("Hello, World!");

// Variables
let name = "John";
const age = 25;

// Simple function
function greet() {
  return "Welcome to JavaScript!";
}`;

  const sections = [
    {
      id: 'what-is-js',
      title: 'What is JavaScript?',
      icon: <FiBookOpen />,
      content: `JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. 
      It is one of the core technologies of the World Wide Web, alongside HTML and CSS. JavaScript enables interactive web pages 
      and is an essential part of web applications.`
    },
    {
      id: 'history',
      title: 'History and Evolution',
      icon: <FiPlay />,
      content: `Created by Brendan Eich in 1995, JavaScript was first known as LiveScript and was developed for Netscape Navigator. 
      It was later renamed to JavaScript when Netscape released JavaScript to ECMA International for standardization. The language 
      has evolved significantly over the years, with major updates like ES6 (2015) introducing many new features.`
    },
    {
      id: 'setup',
      title: 'Setting up Development Environment',
      icon: <FiCode />,
      content: `To start coding in JavaScript, you only need a text editor and a web browser. However, for a better development 
      experience, we recommend using:
      • Visual Studio Code with JavaScript extensions
      • Node.js for running JavaScript outside the browser
      • Chrome DevTools for debugging`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Introduction to JavaScript</h1>
      
      {/* Quick Start Code Example */}
      <div className="mb-8 bg-gray-900 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-semibold">Quick Start Example</h3>
          <button className="text-gray-400 hover:text-white transition-colors">
            <FiPlay className="w-5 h-5" />
          </button>
        </div>
        <SyntaxHighlighter 
          language="javascript" 
          style={atomDark}
          className="rounded-lg"
        >
          {codeExample}
        </SyntaxHighlighter>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center mb-4">
              <span className="text-blue-600 mr-3">{section.icon}</span>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Elements */}
      <div className="mt-8 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
        <p className="text-gray-600 mb-4">
          Now that you understand the basics, let's move on to JavaScript fundamentals.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Next Chapter
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Practice Exercise
          </button>
        </div>
      </div>
          {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default Introduction; 