import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with Bootstrap 5</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installation Methods</h2>
        <p className="text-gray-600 mb-4">
          There are several ways to include Bootstrap 5 in your project:
        </p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">1. CDN Links</h3>
            <p className="text-gray-600 mb-3">Add these links in your HTML file:</p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mb-2">
              {`<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">2. Package Managers</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-2">Using npm:</p>
                <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono text-gray-800">
                  npm install bootstrap@5.3.0
                </div>
              </div>
              <div>
                <p className="text-gray-600 mb-2">Using yarn:</p>
                <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono text-gray-800">
                  yarn add bootstrap@5.3.0
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">3. Download Files</h3>
            <p className="text-gray-600 mb-3">
              Download the compiled and minified versions of Bootstrap CSS and JS:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Download from the official Bootstrap website</li>
              <li>Include files in your project directory</li>
              <li>Link to them locally in your HTML</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Template</h2>
        <p className="text-gray-600 mb-4">
          Here's a starter template with Bootstrap 5 included:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Template</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Hello, Bootstrap 5!</h1>
        <p>Start building your responsive website.</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Important Notes</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Bootstrap requires a containing element to wrap site contents</li>
          <li>Include the responsive viewport meta tag for proper responsive behaviors</li>
          <li>JavaScript bundle includes Popper for tooltips and popovers</li>
          <li>Bootstrap is mobile-first, so test on various screen sizes</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../intro"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Introduction
        </Link>
        <Link
          to="../containers"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Containers →
        </Link>
      </div>
    </motion.div>
  );
};

export default GetStarted; 