import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiFolder, FiFile, FiEdit, FiTrash2 } from 'react-icons/fi';

const FSModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">File System Module in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to fs Module</h2>
        <p className="text-gray-600 mb-4">
          The File System (fs) module is a core module in Node.js that provides an API for interacting
          with the file system. It allows you to work with files and directories, including reading,
          writing, updating, and deleting operations.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiFolder className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Synchronous and asynchronous operations</li>
                <li>File reading and writing</li>
                <li>Directory operations</li>
                <li>File information and stats</li>
                <li>File watching and monitoring</li>
                <li>Streams and pipes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reading Files</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiFile className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                There are multiple ways to read files in Node.js:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const fs = require('fs');
const fsPromises = require('fs').promises;

// Asynchronous reading with callback
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Synchronous reading
try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

// Using Promises
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// Reading with streams
const readStream = fs.createReadStream('file.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', (err) => {
  console.error('Error reading file:', err);
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Writing Files</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiEdit className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Different methods for writing to files:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const fs = require('fs');
const fsPromises = require('fs').promises;

// Asynchronous writing
fs.writeFile('output.txt', 'Hello World!', 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});

// Synchronous writing
try {
  fs.writeFileSync('output.txt', 'Hello World!', 'utf8');
  console.log('File written successfully');
} catch (err) {
  console.error('Error writing file:', err);
}

// Using Promises
async function writeFileAsync() {
  try {
    await fsPromises.writeFile('output.txt', 'Hello World!', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

// Writing with streams
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello');
writeStream.write(' World!');
writeStream.end();

writeStream.on('finish', () => {
  console.log('Finished writing file');
});

writeStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

// Appending to files
fs.appendFile('output.txt', '\nNew line', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Data appended to file');
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Directory Operations</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Creating and Removing Directories</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Create directory
fs.mkdir('new-directory', (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created');
});

// Create nested directories
fs.mkdir('path/to/new/directory', { recursive: true }, (err) => {
  if (err) {
    console.error('Error creating directories:', err);
    return;
  }
  console.log('Directories created');
});

// Remove directory
fs.rmdir('empty-directory', (err) => {
  if (err) {
    console.error('Error removing directory:', err);
    return;
  }
  console.log('Directory removed');
});

// Remove directory and contents recursively
fs.rm('directory', { recursive: true }, (err) => {
  if (err) {
    console.error('Error removing directory:', err);
    return;
  }
  console.log('Directory and contents removed');
});`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Reading Directory Contents</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Read directory contents
fs.readdir('directory', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Directory contents:', files);
});

// Read directory with file types
fs.readdir('directory', { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  files.forEach(file => {
    if (file.isDirectory()) {
      console.log('Directory:', file.name);
    } else if (file.isFile()) {
      console.log('File:', file.name);
    }
  });
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">File Information and Monitoring</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Getting File Information</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Get file stats
fs.stat('file.txt', (err, stats) => {
  if (err) {
    console.error('Error getting file stats:', err);
    return;
  }
  
  console.log('File size:', stats.size);
  console.log('Is file:', stats.isFile());
  console.log('Is directory:', stats.isDirectory());
  console.log('Last modified:', stats.mtime);
});

// Check if file exists
fs.access('file.txt', fs.constants.F_OK, (err) => {
  console.log(\`\${err ? 'File does not exist' : 'File exists'}\`);
});

// Check file permissions
fs.access('file.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log(\`\${err ? 'No access' : 'File is readable/writable'}\`);
});`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Watching Files and Directories</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Watch file for changes
fs.watch('file.txt', (eventType, filename) => {
  console.log(\`File \${filename} had event: \${eventType}\`);
});

// Watch directory for changes
fs.watch('directory', { recursive: true }, (eventType, filename) => {
  console.log(\`Directory change - Event: \${eventType}, File: \${filename}\`);
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use asynchronous methods for better performance</li>
            <li>Handle errors appropriately</li>
            <li>Use streams for large files</li>
            <li>Close file handles when done</li>
            <li>Check file permissions before operations</li>
            <li>Use path module for cross-platform compatibility</li>
            <li>Implement proper error recovery</li>
            <li>Consider using promises for cleaner code</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/http-module"
          className="text-blue-600 hover:text-blue-800"
        >
          ← HTTP Module
        </Link>
        <Link
          to="/nodejs-course/path-module"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Path Module →
        </Link>
      </div>
    </motion.div>
  );
};

export default FSModule; 