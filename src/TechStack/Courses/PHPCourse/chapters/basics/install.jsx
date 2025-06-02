import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Install = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">PHP Installation</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Do You Need?</h2>
        <p className="text-gray-600 mb-4">
          To start developing with PHP, you'll need:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>A web server (e.g., Apache, Nginx)</li>
          <li>PHP</li>
          <li>A database (usually MySQL)</li>
          <li>A text editor (e.g., VSCode, Sublime Text)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installation Methods</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Method 1: All-in-One Packages</h3>
            <p className="text-gray-600 mb-2">
              The easiest way to get started is using an all-in-one package:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>XAMPP (Windows, Linux, macOS)</li>
              <li>WAMP (Windows)</li>
              <li>MAMP (macOS)</li>
              <li>LAMP (Linux)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Method 2: Manual Installation</h3>
            <p className="text-gray-600 mb-2">
              For more control, you can install components separately:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Download PHP from php.net</li>
              <li>Install Apache or Nginx web server</li>
              <li>Install MySQL database</li>
              <li>Configure PHP with your web server</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">XAMPP Installation Guide</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Download XAMPP from <a href="https://www.apachefriends.org/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">apachefriends.org</a></li>
          <li>Run the installer</li>
          <li>Choose components (Apache and MySQL are required)</li>
          <li>Select installation directory</li>
          <li>Start Apache and MySQL from XAMPP Control Panel</li>
          <li>Test installation by visiting <code className="bg-gray-100 px-2 py-1 rounded">http://localhost</code></li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Verifying Installation</h2>
        <p className="text-gray-600 mb-4">
          Create a PHP file named <code className="bg-gray-100 px-2 py-1 rounded">info.php</code> in your web root with:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mb-4">
          {`<?php
phpinfo();
?>`}
        </div>
        <p className="text-gray-600">
          Visit <code className="bg-gray-100 px-2 py-1 rounded">http://localhost/info.php</code> to see your PHP configuration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Installation Issues</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Port Conflicts</h3>
            <p className="text-gray-600">
              If Apache won't start, check if ports 80 and 443 are available. You might need to close other applications using these ports.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Missing Dependencies</h3>
            <p className="text-gray-600">
              On Windows, you might need to install Visual C++ Redistributable packages.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Permission Issues</h3>
            <p className="text-gray-600">
              Ensure you have proper permissions to write to the installation directory and web root.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../intro"
          className="text-blue-600 hover:text-blue-800"
        >
          ← PHP Introduction
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

export default Install;