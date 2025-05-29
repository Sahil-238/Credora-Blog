import TopicNavigation from '../../../../../components/TopicNavigation';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiExternalLink } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const WhereTo = () => {
  const sections = [
    {
      title: 'The <script> Tag',
      content: `JavaScript can be placed in different locations in your HTML:
• Inside the <head> section
• Inside the <body> section
• In external files
• In event attributes
• In URLs (javascript: protocol)`,
      code: `<!-- Internal JavaScript in head -->
<head>
    <script>
        function sayHello() {
            alert("Hello!");
        }
    </script>
</head>

<!-- Internal JavaScript in body -->
<body>
    <script>
        console.log("Page loaded");
    </script>
</body>`
    },
    {
      title: 'External JavaScript',
      content: `External JavaScript files:
• Separate HTML from JavaScript code
• Make files easier to maintain
• Can be cached by browsers
• Can be reused across pages
• Better for larger applications

Use the .js file extension for JavaScript files.`,
      code: `<!-- External JavaScript file -->
<script src="script.js"></script>

<!-- Multiple files -->
<script src="utilities.js"></script>
<script src="main.js"></script>

<!-- With attributes -->
<script src="app.js" defer></script>
<script src="analytics.js" async></script>`
    },
    {
      title: 'Script Loading Strategies',
      content: `Different ways to load JavaScript:
• Regular (blocks parsing)
• async (loads in parallel)
• defer (loads after HTML)
• module (ES6 modules)
• dynamic import (on demand)

Choose based on your needs:
• async for independent scripts
• defer for dependent scripts
• modules for modern applications`,
      code: `<!-- Regular loading (blocks parsing) -->
<script src="app.js"></script>

<!-- Async loading -->
<script async src="analytics.js"></script>

<!-- Deferred loading -->
<script defer src="app.js"></script>

<!-- Module loading -->
<script type="module" src="main.js"></script>

<!-- Dynamic import -->
<script>
    import('./module.js')
        .then(module => {
            // Use module
        });
</script>`
    },
    {
      title: 'Best Practices',
      content: `Follow these best practices:
• Place scripts at the bottom of body
• Use async for independent scripts
• Use defer for dependent scripts
• Combine and minify scripts
• Load only what's needed
• Consider performance impact
• Use modern loading techniques`,
      code: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Best Practices</title>
    
    <!-- Critical CSS -->
    <link rel="stylesheet" href="critical.css">
    
    <!-- Preload important scripts -->
    <link rel="preload" as="script" href="app.js">
</head>
<body>
    <!-- Content first -->
    <main>
        <h1>Content</h1>
    </main>
    
    <!-- Scripts at the bottom -->
    <script defer src="app.js"></script>
    <script async src="analytics.js"></script>
</body>
</html>`
    },
    {
      title: 'Common Issues',
      content: `Watch out for these common issues:
• Script loading order
• Dependencies not loaded
• Render blocking scripts
• Too many HTTP requests
• Large bundle sizes
• Script errors blocking page
• Cross-origin issues`,
      code: `<!-- Incorrect order (dependency error) -->
<script src="app.js"></script>
<script src="jquery.js"></script>

<!-- Correct order -->
<script src="jquery.js"></script>
<script src="app.js"></script>

<!-- Cross-origin example -->
<script 
    src="https://api.example.com/script.js"
    crossorigin="anonymous"
></script>

<!-- Fallback for script failure -->
<script>
    window.onerror = function(msg, url, line) {
        console.error('Script error:', msg);
        // Handle error
    };
</script>`
    }
  ];

  const advantages = [
    {
      title: 'Separation of Code',
      description: 'Separating HTML and JavaScript code makes files easier to maintain'
    },
    {
      title: 'Cached JavaScript',
      description: 'External JavaScript files can be cached, improving page load speed'
    },
    {
      title: 'Code Reusability',
      description: 'The same JavaScript file can be used in multiple HTML pages'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-6">Where To Write JavaScript</h1>
      
      {/* Quick Overview */}
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">JavaScript Placement</h2>
        <p className="text-gray-700 mb-4">
          Learn where and how to include JavaScript in your web pages, and understand different script loading strategies
          to optimize your website's performance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 whitespace-pre-line mb-4">
                  {section.content}
                </p>
              </div>
              <div>
                <SyntaxHighlighter 
                  language="html"
                  style={atomDark}
                  className="rounded-lg"
                >
                  {section.code}
                </SyntaxHighlighter>
              </div>
            </div>
          
      
    </motion.div>
        ))}
      </div>

      {/* Common Mistakes */}
      <div className="mt-12 bg-red-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Common Mistakes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Placing scripts in the wrong order, causing dependency issues</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Not using async or defer for performance optimization</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">•</span>
            <p className="text-gray-700">Loading unnecessary scripts that slow down the page</p>
          </li>
        </ul>
      </div>

      {/* Best Practices */}
      <div className="mt-12 bg-green-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Place scripts at the bottom of the body for better page load performance</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Use async for independent scripts and defer for dependent scripts</p>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <p className="text-gray-700">Implement error handling for script loading failures</p>
          </li>
        </ul>
      </div>

      {/* External Resources */}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">External Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <FiExternalLink className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <h4 className="font-semibold">MDN Documentation</h4>
              <p className="text-sm text-gray-600">Learn more about the script element</p>
            </div>
          </a>
          <a 
            href="https://www.w3.org/TR/html52/semantics-scripting.html#the-script-element" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <FiExternalLink className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <h4 className="font-semibold">W3C Specification</h4>
              <p className="text-sm text-gray-600">Official specification for scripting in HTML</p>
            </div>
          </a>
        </div>
      </div>

      {/* Navigation buttons */}
      <TopicNavigation />
    </motion.div>
  );
};

export default WhereTo; 