import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload, FiTerminal, FiCode, FiCheckCircle } from 'react-icons/fi';

const GettingStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with PHP</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installing PHP</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <div className="flex items-start mb-4">
            <FiDownload className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Download and Install</h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>For Windows: Download XAMPP from <a href="https://www.apachefriends.org" className="text-blue-600 hover:text-blue-800">apachefriends.org</a></li>
                <li>For macOS: Install via Homebrew with <code>brew install php</code></li>
                <li>For Linux: Use package manager (<code>apt-get install php</code> for Ubuntu)</li>
                <li>Verify installation by opening a terminal and running:
                  <div className="bg-gray-100 p-2 rounded mt-2 font-mono">
                    php --version
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Development Environment Setup</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiCode className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Code Editor</h3>
                <p className="text-gray-600 mb-2">
                  We recommend using Visual Studio Code with these extensions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>PHP Intelephense</li>
                  <li>PHP Debug</li>
                  <li>PHP Intellisense</li>
                  <li>PHP Extension Pack</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiTerminal className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Web Server Setup</h3>
                <p className="text-gray-600 mb-2">
                  You'll need a web server to run PHP. Options include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>XAMPP (Apache + MySQL + PHP + Perl)</li>
                  <li>PHP's built-in development server</li>
                  <li>Apache or Nginx with PHP module</li>
                  <li>Docker with PHP container</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your First PHP Application</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">1. Create a New Project</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
              {`mkdir my-first-php-app
cd my-first-php-app
composer init # If using Composer for dependency management`}
            </div>
            <p className="text-gray-600">
              This creates a new directory and initializes it with Composer (optional but recommended).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">2. Create Your First Script</h3>
            <p className="text-gray-600 mb-4">Create a new file called index.php:</p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
              {`<?php
// index.php
echo "Welcome to PHP!\\n";

// Display some system information
echo "\\nSystem Information:\\n";
echo "PHP Version: " . PHP_VERSION . "\\n";
echo "Operating System: " . PHP_OS . "\\n";
echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "\\n";
echo "Server Protocol: " . $_SERVER['SERVER_PROTOCOL'] . "\\n";`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4">3. Run Your Application</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
              php -S localhost:8000
            </div>
            <p className="text-gray-600">
              Open your browser and visit http://localhost:8000 to see your PHP application running.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Next Steps</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Now that you have PHP installed and your first application running, you're ready to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Learn PHP syntax and basic concepts</li>
                <li>Work with variables and data types</li>
                <li>Understand control structures and functions</li>
                <li>Connect to databases and handle forms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../intro"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Introduction
        </Link>
        <Link
          to="../syntax"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: PHP Syntax →
        </Link>
      </div>
    </motion.div>
  );
};

export default GettingStarted; 