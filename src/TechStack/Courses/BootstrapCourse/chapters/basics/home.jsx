import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bootstrap 5 Tutorial</h1>

      <section className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Bootstrap 5?</h2>
          <p className="text-gray-600 mb-4">
            Bootstrap 5 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>No more jQuery dependency - Bootstrap 5 is now vanilla JavaScript</li>
            <li>Improved grid system and flexbox support</li>
            <li>New utilities and components</li>
            <li>Enhanced customization options</li>
            <li>Dropped support for Internet Explorer</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use Bootstrap 5?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3">Easy to Use</h3>
            <p className="text-gray-600">
              Bootstrap's pre-built components and utilities make it quick and easy to create responsive websites without writing extensive CSS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3">Mobile First</h3>
            <p className="text-gray-600">
              Built with mobile-first approach, ensuring your websites look great on all devices and screen sizes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3">Customizable</h3>
            <p className="text-gray-600">
              Easily customize default styling using Sass variables and mixins to create your unique design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-3">Extensive Components</h3>
            <p className="text-gray-600">
              Rich collection of UI components and utilities that speed up development process.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What You'll Learn</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <FiArrowRight className="text-blue-500 mr-2" />
              How to set up Bootstrap 5 in your projects
            </li>
            <li className="flex items-center">
              <FiArrowRight className="text-blue-500 mr-2" />
              Understanding the Bootstrap grid system
            </li>
            <li className="flex items-center">
              <FiArrowRight className="text-blue-500 mr-2" />
              Working with Bootstrap components and utilities
            </li>
            <li className="flex items-center">
              <FiArrowRight className="text-blue-500 mr-2" />
              Creating responsive layouts
            </li>
            <li className="flex items-center">
              <FiArrowRight className="text-blue-500 mr-2" />
              Customizing Bootstrap themes
            </li>
          </ul>
        </div>
      </section>

      <div className="mt-8">
        <Link
          to="../getting-started"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Started with Bootstrap 5
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Home; 