import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiServer, FiSend, FiGlobe, FiSettings } from 'react-icons/fi';

const HTTPModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">HTTP Module in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to HTTP Module</h2>
        <p className="text-gray-600 mb-4">
          The HTTP module is a core module in Node.js that allows you to create web servers and make HTTP requests.
          It provides the foundation for handling HTTP communications and is the basis for many higher-level modules
          like Express.js.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiServer className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Create HTTP servers</li>
                <li>Handle HTTP requests and responses</li>
                <li>Make HTTP client requests</li>
                <li>Support for HTTPS</li>
                <li>Stream-based data handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Creating an HTTP Server</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiGlobe className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Create a basic HTTP server that listens for incoming requests:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const http = require('http');

// Create a basic server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  
  // Send response
  res.end('Hello from Node.js Server!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Handle incoming connections
server.on('connection', (socket) => {
  console.log('New connection from', socket.remoteAddress);
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Handling HTTP Requests</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSend className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Handle different types of HTTP requests and route them appropriately:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Set default headers
  res.setHeader('Content-Type', 'application/json');

  // Route handling
  if (path === '/api/users' && method === 'GET') {
    // Handle GET request
    res.writeHead(200);
    res.end(JSON.stringify({ users: ['John', 'Jane'] }));
  }
  else if (path === '/api/users' && method === 'POST') {
    // Handle POST request
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const user = JSON.parse(body);
      // Process the user data
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'User created' }));
    });
  }
  else {
    // Handle 404
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000);`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Making HTTP Requests</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiSettings className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Use the HTTP module to make requests to other servers:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const http = require('http');
const https = require('https');

// Make a GET request
http.get('http://api.example.com/data', (res) => {
  let data = '';

  // Receive data in chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Process the complete response
  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});

// Make a POST request
const options = {
  hostname: 'api.example.com',
  port: 443,
  path: '/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.on('error', (err) => {
  console.error('Error:', err.message);
});

// Write request body
req.write(JSON.stringify({
  name: 'John Doe',
  email: 'john@example.com'
}));

req.end();`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Working with HTTPS</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Create an HTTPS server with SSL/TLS encryption:
          </p>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm">
            {`const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Secure hello from HTTPS server!');
});

server.listen(443, () => {
  console.log('HTTPS server running on port 443');
});`}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Features</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Request Streaming</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const fileStream = fs.createWriteStream('uploaded-file.txt');
    
    req.pipe(fileStream);

    req.on('end', () => {
      res.end('File uploaded successfully');
    });
  }
});`}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Proxy Server</h3>
            <div className="bg-gray-100 p-4 rounded font-mono text-sm">
              {`const server = http.createServer((req, res) => {
  const options = {
    hostname: 'api.example.com',
    port: 80,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  req.pipe(proxyReq);
});`}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Always handle errors in both server and client operations</li>
            <li>Set appropriate headers for content type and encoding</li>
            <li>Use HTTPS for secure communications</li>
            <li>Implement proper request timeout handling</li>
            <li>Consider using streams for large data transfers</li>
            <li>Implement proper error status codes</li>
            <li>Use compression when appropriate</li>
            <li>Implement proper security headers</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/nodejs-course/error-handling"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Error Handling
        </Link>
        <Link
          to="/nodejs-course/fs-module"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: File System Module →
        </Link>
      </div>
    </motion.div>
  );
};

export default HTTPModule; 