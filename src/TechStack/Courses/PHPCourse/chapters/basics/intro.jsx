import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Introduction to PHP</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is PHP?</h2>
        <p className="text-gray-600 mb-4">
          PHP (Hypertext Preprocessor) is a widely-used, open-source server-side scripting language that's especially suited for web development and can be embedded into HTML.
        </p>
        <p className="text-gray-600">
          PHP scripts are executed on the server, generating HTML that is then sent to the client. The client receives the results of running that script, but does not know what the underlying code was.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use PHP?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>PHP runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
          <li>PHP is compatible with almost all servers used today</li>
          <li>PHP supports a wide range of databases</li>
          <li>PHP is free and open source</li>
          <li>PHP is easy to learn and runs efficiently on the server side</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic PHP Syntax</h2>
        <p className="text-gray-600 mb-4">A PHP script starts with <code>&#60;?php</code> and ends with <code>?&#62;</code>:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
          {`<?php
echo "Hello, World!";
?>`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">PHP File Extensions</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>PHP files can contain text, HTML, CSS, JavaScript, and PHP code</li>
          <li>PHP files use the extension ".php"</li>
          <li>PHP code is executed on the server, and the result is returned to the browser as plain HTML</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Can PHP Do?</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Generate dynamic page content</li>
          <li>Create, open, read, write, delete, and close files on the server</li>
          <li>Collect form data</li>
          <li>Send and receive cookies</li>
          <li>Add, delete, modify data in your database</li>
          <li>Restrict user access to some pages on your website</li>
          <li>Encrypt data</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to=".."
          className="text-blue-600 hover:text-blue-800"
        >
          ← Course Overview
        </Link>
        <Link
          to="../install"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: PHP Installation →
        </Link>
      </div>
    </motion.div>
  );
};

export default Intro; 