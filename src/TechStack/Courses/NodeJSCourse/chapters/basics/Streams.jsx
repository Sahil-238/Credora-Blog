import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft, FiRepeat, FiFilter } from 'react-icons/fi';

const Streams = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Streams in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Streams</h2>
        <p className="text-gray-600 mb-4">
          Streams are one of the fundamental concepts in Node.js. They provide a way to handle reading/writing
          data chunk by chunk, without loading the entire data into memory. This makes them perfect for
          handling large amounts of data efficiently.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiArrowRight className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Advantages of Streams</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memory efficiency - process data in chunks</li>
                <li>Time efficiency - start processing data immediately</li>
                <li>Composability - pipe data through multiple operations</li>
                <li>Backpressure handling - automatic flow control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Types of Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Readable Streams</h3>
            <p className="text-gray-600 mb-4">
              Streams from which data can be read (e.g., reading a file)
            </p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const fs = require('fs');

const readStream = fs.createReadStream('file.txt');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading');
});`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Writable Streams</h3>
            <p className="text-gray-600 mb-4">
              Streams to which data can be written (e.g., writing to a file)
            </p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello ');
writeStream.write('World!');
writeStream.end();

writeStream.on('finish', () => {
  console.log('Finished writing');
});`}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Duplex Streams</h3>
            <p className="text-gray-600 mb-4">
              Streams that are both readable and writable (e.g., TCP sockets)
            </p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const net = require('net');

const server = net.createServer((socket) => {
  // socket is a duplex stream
  socket.write('Hello ');
  socket.on('data', (data) => {
    socket.write(data);
  });
});

server.listen(3000);`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Transform Streams</h3>
            <p className="text-gray-600 mb-4">
              Duplex streams that can modify data as it's written and read
            </p>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

process.stdin
  .pipe(upperCaseTransform)
  .pipe(process.stdout);`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Stream Events</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiRepeat className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Streams emit various events that you can listen to:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const stream = fs.createReadStream('file.txt');

// Data events
stream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

// End event
stream.on('end', () => {
  console.log('No more data');
});

// Error event
stream.on('error', (err) => {
  console.error('Error:', err);
});

// Ready event
stream.on('ready', () => {
  console.log('Stream is ready');
});

// Close event
stream.on('close', () => {
  console.log('Stream closed');
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Piping Streams</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiFilter className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                The pipe() method allows you to chain streams together:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const fs = require('fs');
const zlib = require('zlib');

// Pipe chains for file compression
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// Error handling in pipes
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))
  .on('error', (err) => {
    console.error('Pipeline failed:', err);
  });

// Using pipeline utility (recommended)
const { pipeline } = require('stream');
const util = require('util');
const pipelineAsync = util.promisify(pipeline);

async function compressFile() {
  try {
    await pipelineAsync(
      fs.createReadStream('input.txt'),
      zlib.createGzip(),
      fs.createWriteStream('input.txt.gz')
    );
    console.log('Pipeline succeeded');
  } catch (err) {
    console.error('Pipeline failed:', err);
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Custom Streams</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            You can create custom streams by extending the base stream classes:
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm">
            {`const { Readable, Writable, Transform } = require('stream');

// Custom Readable Stream
class CounterStream extends Readable {
  constructor(max) {
    super();
    this.max = max;
    this.counter = 0;
  }

  _read() {
    this.counter++;
    if (this.counter <= this.max) {
      this.push(this.counter.toString());
    } else {
      this.push(null);
    }
  }
}

// Custom Transform Stream
class ReverseStream extends Transform {
  _transform(chunk, encoding, callback) {
    const reversed = chunk.toString()
      .split('')
      .reverse()
      .join('');
    callback(null, reversed);
  }
}

// Usage
const counter = new CounterStream(3);
const reverser = new ReverseStream();

counter
  .pipe(reverser)
  .pipe(process.stdout);`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use pipeline() instead of pipe() for better error handling</li>
            <li>Always handle stream errors</li>
            <li>Set appropriate highWaterMark values for performance</li>
            <li>Use objectMode when streaming non-binary data</li>
            <li>Implement backpressure handling in custom streams</li>
            <li>Clean up resources by destroying streams when done</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/buffers"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Buffers
        </Link>
        <Link
          to="/nodejs-course/error-handling"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Error Handling →
        </Link>
      </div>
    </motion.div>
  );
};

export default Streams; 