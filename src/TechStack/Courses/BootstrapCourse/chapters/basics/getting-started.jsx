import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload, FiCode, FiCheckCircle } from 'react-icons/fi';

const GettingStarted = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Getting Started with Bootstrap 5</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installation Methods</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiDownload className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">1. CDN Links</h3>
                <p className="text-gray-600 mb-3">Add these links in your HTML file:</p>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
                  {`<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>`}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiCode className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">2. Package Manager (npm)</h3>
                <p className="text-gray-600 mb-3">Install via npm:</p>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm mb-4">
                  npm install bootstrap@5.3.0
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <FiDownload className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">3. Download Files</h3>
                <p className="text-gray-600 mb-3">Download the compiled CSS and JS:</p>
                <a 
                  href="https://github.com/twbs/bootstrap/releases/download/v5.3.0/bootstrap-5.3.0-dist.zip"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Download Bootstrap 5
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Starter Template</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">Here's a basic template to get you started:</p>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm">
            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Hello, Bootstrap 5!</h1>
        <p class="lead">This is a basic Bootstrap 5 page.</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Important Notes</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <ul className="space-y-3 text-gray-600">
                <li>Bootstrap 5 requires no jQuery</li>
                <li>Supports all modern browsers (but not IE)</li>
                <li>Requires a containing element for the grid system</li>
                <li>Uses vanilla JavaScript for components</li>
                <li>Includes Popper.js for tooltips and popovers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../home"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Home
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

export default GettingStarted; 