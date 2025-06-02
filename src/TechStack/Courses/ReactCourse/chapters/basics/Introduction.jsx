import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is React?</h2>
        <p className="text-gray-600 mb-4">
          React is a popular JavaScript library for building user interfaces, particularly single-page applications. It was developed and is maintained by Facebook (now Meta) and a community of individual developers and companies.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            React allows you to build complex UIs from small, isolated pieces of code called "components".
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Features of React</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Declarative:</strong> React makes it easier to create interactive UIs. Design simple views for each state in your application.</li>
          <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
          <li><strong>Learn Once, Write Anywhere:</strong> React can also render on the server using Node and power mobile apps using React Native.</li>
          <li><strong>Virtual DOM:</strong> A programming concept where an ideal, or "virtual", representation of a UI is kept in memory.</li>
          <li><strong>JSX:</strong> A syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Learn React?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Popular in Industry</h3>
            <p className="text-gray-600">React is one of the most popular frontend libraries, used by many large companies.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Strong Community</h3>
            <p className="text-gray-600">Large community means plenty of resources, tools, and third-party components.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Career Opportunities</h3>
            <p className="text-gray-600">High demand for React developers in the job market.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Cross-Platform</h3>
            <p className="text-gray-600">Can be used for web, mobile (React Native), and desktop applications.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Prerequisites</h2>
        <p className="text-gray-600 mb-4">
          Before diving into React, you should have a basic understanding of:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>HTML & CSS</li>
          <li>JavaScript fundamentals</li>
          <li>ES6+ features (arrow functions, destructuring, etc.)</li>
          <li>Basic command line usage</li>
          <li>Node.js and npm (Node Package Manager)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Simple Example</h2>
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <pre className="text-green-400">
            <code>{`import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`}</code>
          </pre>
        </div>
        <p className="text-gray-600">
          This is a simple React component that displays a welcome message. Throughout this course, we'll build increasingly complex components and applications.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Back to Course
        </Link>
        <Link
          to="/react-course/getting-started"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Getting Started <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Introduction;