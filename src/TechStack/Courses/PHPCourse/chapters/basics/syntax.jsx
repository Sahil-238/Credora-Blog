import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Syntax = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">PHP Syntax</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic PHP Syntax</h2>
        <p className="text-gray-600 mb-4">
          A PHP script can be placed anywhere in the document. PHP scripts start with <code className="bg-gray-100 px-2 py-1 rounded">&lt;?php</code> and end with <code className="bg-gray-100 px-2 py-1 rounded">?&gt;</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto mb-4">
          {`<?php
echo "Hello, World!";
?>`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">PHP Case Sensitivity</h2>
        <div className="space-y-4">
          <p className="text-gray-600">In PHP:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>All keywords (e.g., if, else, null, class, etc.), classes, and functions are NOT case-sensitive</li>
            <li>All variable names are case-sensitive</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<?php
$color = "red";
$COLOR = "blue";
$coLOR = "green";

echo $color;   // Outputs: red
echo $COLOR;   // Outputs: blue
echo $coLOR;   // Outputs: green
?>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">PHP Statements</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Each PHP statement must end with a semicolon (;). The semicolon tells PHP that one statement has ended and another begins.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<?php
$x = 5;        // Assign value to variable
echo $x;       // Output value
print $x;      // Another way to output
?>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">PHP Comments</h2>
        <div className="space-y-4">
          <p className="text-gray-600">PHP supports several ways to comment your code:</p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<?php
// Single-line comment

# Alternative single-line comment

/*
Multi-line
comment block
*/

echo "Code with comments";  // Inline comment
?>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">PHP in HTML</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            PHP code can be embedded into HTML. When PHP processes the file, it outputs the HTML as is and executes any PHP code it finds.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 overflow-x-auto">
            {`<!DOCTYPE html>
<html>
<body>
    <h1><?php echo "Hello from PHP!"; ?></h1>
    
    <?php
    $txt = "PHP";
    echo "<p>I love $txt!</p>";
    ?>
</body>
</html>`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Always close PHP statements with a semicolon</li>
          <li>Use proper indentation for better readability</li>
          <li>Add comments to explain complex code</li>
          <li>Use meaningful variable names</li>
          <li>Be consistent with your coding style</li>
          <li>Close your PHP tags when mixing with HTML</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="../install"
          className="text-blue-600 hover:text-blue-800"
        >
          ← PHP Installation
        </Link>
        <Link
          to="../variables"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: PHP Variables →
        </Link>
      </div>
    </motion.div>
  );
};

export default Syntax;