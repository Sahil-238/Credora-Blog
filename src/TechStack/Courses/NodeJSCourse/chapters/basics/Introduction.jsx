import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiServer, FiCode, FiDatabase, FiLayers } from 'react-icons/fi';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Node.js?</h2>
        <p className="text-gray-600 mb-4">
          Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.
          Built on Chrome's V8 JavaScript engine, Node.js enables developers to use JavaScript for server-side scripting.
        </p>
        <p className="text-gray-600">
          With Node.js, you can build scalable network applications, command-line tools, web servers, real-time applications,
          and much more using JavaScript.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Node.js?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiServer className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">Event-Driven & Non-Blocking</h3>
            <p className="text-gray-600">
              Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient,
              perfect for data-intensive real-time applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiCode className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">JavaScript Everywhere</h3>
            <p className="text-gray-600">
              Use the same language (JavaScript) for both frontend and backend development,
              making it easier to maintain and develop full-stack applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiDatabase className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">Rich Ecosystem</h3>
            <p className="text-gray-600">
              Access to npm (Node Package Manager), the world's largest software registry,
              with hundreds of thousands of reusable packages.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FiLayers className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold mb-2">Microservices & APIs</h3>
            <p className="text-gray-600">
              Perfect for building microservices architecture and RESTful APIs
              with its lightweight and modular approach.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Asynchronous and Event-Driven</li>
          <li>Single-threaded but highly scalable</li>
          <li>Cross-platform compatibility</li>
          <li>Large and active community</li>
          <li>Rich ecosystem of packages via npm</li>
          <li>Built-in modules for file system, networking, and more</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Simple Example</h2>
        <p className="text-gray-600 mb-4">Here's a basic Node.js server example:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
          {`const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Node.js!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}
        </div>
        <p className="text-gray-600 mt-4">
          This simple example creates a web server that responds with "Hello World" when accessed.
          Throughout this course, we'll build increasingly complex applications.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Prerequisites</h2>
        <p className="text-gray-600 mb-4">To get the most out of this course, you should have:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Basic understanding of JavaScript</li>
          <li>Familiarity with command-line interface</li>
          <li>Text editor or IDE installed</li>
          <li>Node.js installed on your computer</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Structure</h2>
        <p className="text-gray-600">
          This course is designed to take you from the basics to advanced concepts in Node.js development.
          We'll cover everything from core modules to building real-world applications, including database integration,
          authentication, testing, and deployment.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Course Overview
        </Link>
        <Link
          to="/nodejs-course/getting-started"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Getting Started →
        </Link>
      </div>
    </motion.div>
  );
};

export default Introduction; 