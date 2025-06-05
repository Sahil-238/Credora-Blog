import React from 'react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to C Programming</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is C?</h2>
        <p className="text-gray-600 mb-4">
          C is a general-purpose programming language created by Dennis Ritchie at Bell Laboratories in 1972. 
          It is one of the most widely used programming languages of all time and has greatly influenced many 
          other popular programming languages, including C++, Java, and JavaScript.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Key Features of C:</h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Low-level memory access</li>
            <li>Simple set of keywords</li>
            <li>Structured programming</li>
            <li>Fast and efficient</li>
            <li>Portable (platform independent)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Learn C?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Foundation Language</h3>
            <p className="text-gray-600">
              C is often called the mother of all programming languages. Understanding C helps in learning 
              other programming languages more easily.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-3">System Programming</h3>
            <p className="text-gray-600">
              C is widely used in operating system development, embedded systems, and system programming 
              where direct hardware access is needed.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Applications of C</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Operating Systems (Unix, Linux kernel)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Embedded Systems and IoT Devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Database Management Systems (MySQL, PostgreSQL)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">Game Development</span>
            </li>
          </ul>
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

export default Introduction; 