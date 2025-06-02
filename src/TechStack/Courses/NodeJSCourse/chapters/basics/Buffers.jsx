import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDatabase, FiRefreshCw, FiEdit, FiCpu } from 'react-icons/fi';

const Buffers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Buffers in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Buffers?</h2>
        <p className="text-gray-600 mb-4">
          Buffers are used to handle binary data in Node.js. They represent a fixed-length sequence
          of bytes and provide a way to work with raw memory allocations outside the V8 heap.
          This is particularly useful when dealing with TCP streams, file system operations,
          and other operations that involve binary data.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiDatabase className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Characteristics</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fixed-length sequence of bytes</li>
                <li>Raw memory allocation</li>
                <li>Binary data manipulation</li>
                <li>No need to require - globally available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating Buffers</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiCpu className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                There are several ways to create buffers in Node.js:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Create an empty buffer of length 10
const buf1 = Buffer.alloc(10);

// Create a buffer from a string
const buf2 = Buffer.from('Hello World');

// Create a buffer from an array
const buf3 = Buffer.from([1, 2, 3, 4, 5]);

// Create a buffer with specific encoding
const buf4 = Buffer.from('Hello', 'utf8');

// Create an uninitialized buffer (faster but may contain old data)
const buf5 = Buffer.allocUnsafe(10);

// Create a buffer from another buffer
const buf6 = Buffer.from(buf2);`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buffer Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Writing to Buffers</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const buf = Buffer.alloc(10);

// Write a string
buf.write('Hello');

// Write at specific position
buf.write('World', 5);

// Write a single byte
buf[0] = 0x48; // 'H'

// Fill buffer with a value
buf.fill(0);`}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Reading from Buffers</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const buf = Buffer.from('Hello World');

// Convert to string
console.log(buf.toString());

// Read a range
console.log(buf.toString('utf8', 0, 5));

// Read a single byte
console.log(buf[0]); // 72 (ASCII for 'H')

// Get buffer length
console.log(buf.length);`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buffer Manipulation</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiEdit className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Buffers provide various methods for manipulating binary data:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// Copying buffers
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(5);
buf1.copy(buf2);

// Slicing buffers
const slice = buf1.slice(0, 2); // 'He'

// Concatenating buffers
const buf3 = Buffer.from(' World');
const combined = Buffer.concat([buf1, buf3]);

// Compare buffers
const isEqual = buf1.equals(buf2);

// Find position of a value
const index = buf1.indexOf('e');

// Check if buffer includes value
const includes = buf1.includes('lo');`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buffer Encoding</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiRefreshCw className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Buffers support various encodings for converting between strings and binary data:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const buf = Buffer.from('Hello World');

// Different encoding formats
console.log(buf.toString('utf8'));    // default
console.log(buf.toString('base64'));  // SGVsbG8gV29ybGQ=
console.log(buf.toString('hex'));     // 48656c6c6f20576f726c64

// Converting back from encoded strings
const base64Buf = Buffer.from('SGVsbG8gV29ybGQ=', 'base64');
console.log(base64Buf.toString());    // Hello World

// Check if encoding is supported
console.log(Buffer.isEncoding('utf8'));  // true
console.log(Buffer.isEncoding('utf9'));  // false`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Practical Examples</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Reading a Binary File</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const fs = require('fs');

// Read binary file
fs.readFile('image.png', (err, buffer) => {
  if (err) throw err;
  console.log('File size:', buffer.length, 'bytes');
  
  // Convert to base64 for web display
  const base64 = buffer.toString('base64');
  const dataUrl = \`data:image/png;base64,\${base64}\`;
});`}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Network Protocol Implementation</h3>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const net = require('net');

const server = net.createServer((socket) => {
  // Protocol: 2 bytes for length, followed by message
  socket.on('data', (buffer) => {
    const length = buffer.readUInt16BE(0);
    const message = buffer.slice(2, 2 + length).toString();
    console.log('Received:', message);
  });
});

server.listen(3000);`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use Buffer.alloc() instead of new Buffer() (deprecated)</li>
            <li>Be cautious with Buffer.allocUnsafe() as it may contain sensitive data</li>
            <li>Always specify encoding when converting to/from strings</li>
            <li>Use TypedArrays for numeric data when possible</li>
            <li>Handle buffer overflows carefully</li>
            <li>Consider using streams for large data</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/events"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Events
        </Link>
        <Link
          to="/nodejs-course/streams"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Streams →
        </Link>
      </div>
    </motion.div>
  );
};

export default Buffers; 