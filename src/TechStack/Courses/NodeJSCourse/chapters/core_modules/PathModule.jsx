import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFolder, FiLink, FiGitBranch, FiSettings } from 'react-icons/fi';

const PathModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Path Module in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to Path Module</h2>
        <p className="text-gray-600 mb-4">
          The Path module is a core Node.js module that provides utilities for working with file and directory paths.
          It helps in handling paths across different operating systems by providing a consistent interface.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiFolder className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cross-platform path handling</li>
                <li>Path normalization and resolution</li>
                <li>Path component extraction</li>
                <li>Path manipulation utilities</li>
                <li>Directory and file path operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Path Operations</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiLink className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Common path operations and manipulations:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const path = require('path');

// Join path segments
const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log(fullPath);
// Output: /users/john/documents/file.txt

// Resolve absolute path
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(absolutePath);
// Output: /current/working/directory/folder/subfolder/file.txt

// Normalize a path
const normalizedPath = path.normalize('/users//john/..//documents/./file.txt');
console.log(normalizedPath);
// Output: /users/documents/file.txt

// Get path segments
console.log(path.dirname('/users/john/file.txt'));  // /users/john
console.log(path.basename('/users/john/file.txt')); // file.txt
console.log(path.extname('/users/john/file.txt'));  // .txt

// Parse path
const parsedPath = path.parse('/users/john/file.txt');
console.log(parsedPath);
// Output: {
//   root: '/',
//   dir: '/users/john',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }

// Format path object back to string
const pathString = path.format({
  dir: '/users/john',
  base: 'file.txt'
});
console.log(pathString);
// Output: /users/john/file.txt`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cross-Platform Path Handling</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiGitBranch className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Handle paths consistently across different operating systems:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const path = require('path');

// Platform-specific separator
console.log(path.sep);  // '\' on Windows, '/' on Unix

// Platform-specific delimiter
console.log(path.delimiter);  // ';' on Windows, ':' on Unix

// Using path.join() for cross-platform compatibility
const crossPlatformPath = path.join('folder', 'subfolder', 'file.txt');
console.log(crossPlatformPath);
// Output: folder/subfolder/file.txt (Unix)
// Output: folder\\subfolder\\file.txt (Windows)

// Convert to POSIX path
const posixPath = path.posix.join('/users', 'john', 'documents');
console.log(posixPath);
// Output: /users/john/documents (always forward slashes)

// Convert to Windows path
const windowsPath = path.win32.join('C:', 'Users', 'John', 'Documents');
console.log(windowsPath);
// Output: C:\\Users\\John\\Documents (always backslashes)

// Resolve relative paths
console.log(path.resolve('folder', '../other', 'file.txt'));
// Resolves to absolute path from current working directory`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Working with Relative Paths</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSettings className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Handle relative paths and calculate path relationships:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const path = require('path');

// Get relative path
const relativePath = path.relative('/users/john', '/users/john/documents/file.txt');
console.log(relativePath);
// Output: documents/file.txt

// Check if path is absolute
console.log(path.isAbsolute('/users/john'));  // true
console.log(path.isAbsolute('users/john'));   // false

// Resolve __dirname and __filename
console.log(__dirname);  // Absolute path to current directory
console.log(__filename); // Absolute path to current file

// Resolve paths relative to current file
const configPath = path.resolve(__dirname, '../config/settings.json');
console.log(configPath);

// Get relative path from current file
const projectRoot = path.resolve(__dirname, '../../');
const relativeToRoot = path.relative(projectRoot, __filename);
console.log(relativeToRoot);`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Common Use Cases</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Working with Configuration Files</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const path = require('path');
const fs = require('fs');

// Load configuration based on environment
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, 'config', \`\${env}.json\`);

try {
  const config = require(configPath);
  console.log('Loaded configuration:', config);
} catch (err) {
  console.error('Error loading configuration:', err);
}`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Managing Assets and Resources</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const path = require('path');

// Define paths for different resource types
const paths = {
  static: path.join(__dirname, 'public'),
  uploads: path.join(__dirname, 'uploads'),
  templates: path.join(__dirname, 'views'),
  cache: path.join(__dirname, '.cache')
};

// Ensure directories exist
Object.values(paths).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Get resource path
function getResourcePath(type, filename) {
  return path.join(paths[type], filename);
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Always use path.join() or path.resolve() for path manipulation</li>
            <li>Avoid string concatenation for paths</li>
            <li>Use __dirname for file-relative paths</li>
            <li>Handle path separators using path.sep</li>
            <li>Normalize paths before comparison</li>
            <li>Use path.resolve() for absolute paths</li>
            <li>Consider cross-platform compatibility</li>
            <li>Use path.basename() to extract filenames safely</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/fs-module"
          className="text-blue-600 hover:text-blue-800"
        >
          ← File System Module
        </Link>
        <Link
          to="/nodejs-course/url-module"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: URL Module →
        </Link>
      </div>
    </motion.div>
  );
};

export default PathModule; 