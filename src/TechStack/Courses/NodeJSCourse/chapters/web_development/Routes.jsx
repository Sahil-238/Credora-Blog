import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGitBranch, FiServer, FiPackage, FiLayers } from 'react-icons/fi';

const Routes = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Routing in Node.js</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to Routing</h2>
        <p className="text-gray-600 mb-4">
          Routing determines how an application responds to client requests to specific endpoints (URLs).
          In Node.js, you can implement routing using either the built-in HTTP module or popular
          frameworks like Express.js.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiGitBranch className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Key Concepts</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>URL patterns and parameters</li>
                <li>HTTP methods (GET, POST, PUT, DELETE)</li>
                <li>Route handlers and middleware</li>
                <li>Route parameters and query strings</li>
                <li>Route organization and modularization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Routing with HTTP Module</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiServer className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Implement basic routing using Node.js's built-in HTTP module:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Set response headers
  res.setHeader('Content-Type', 'application/json');

  // Route handling
  if (path === '/api/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ users: ['John', 'Jane', 'Bob'] }));
  }
  else if (path === '/api/users' && method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const user = JSON.parse(body);
      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'User created', user }));
    });
  }
  else if (path.startsWith('/api/users/')) {
    const userId = path.split('/')[3];
    
    if (method === 'GET') {
      res.statusCode = 200;
      res.end(JSON.stringify({ userId, name: 'John Doe' }));
    }
    else if (method === 'PUT') {
      let body = '';
      
      req.on('data', chunk => {
        body += chunk.toString();
      });

      req.on('end', () => {
        const updates = JSON.parse(body);
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'User updated', userId, updates }));
      });
    }
    else if (method === 'DELETE') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'User deleted', userId }));
    }
  }
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Express.js Routing</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiPackage className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Express.js provides a more elegant and powerful routing system:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Basic Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Route Parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId, name: 'John Doe' });
});

// Query Strings
app.get('/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  res.json({ query: q, limit });
});

// Multiple Route Handlers
app.get('/protected',
  authenticateUser,
  authorizeUser,
  (req, res) => {
    res.json({ message: 'Protected resource' });
  }
);

// Router Instance
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.json({ users: ['John', 'Jane', 'Bob'] });
});

userRouter.post('/', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created', user });
});

userRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  res.json({ message: 'User updated', id, updates });
});

userRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User deleted', id });
});

// Mount router
app.use('/api/users', userRouter);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Route Organization</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-start">
            <FiLayers className="w-6 h-6 text-blue-600 mr-3 mt-1" />
            <div>
              <p className="text-gray-600 mb-4">
                Best practices for organizing routes in a larger application:
              </p>
              <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                {`// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

// routes/posts.js
const express = require('express');
const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;

// app.js
const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Versioning API routes
app.use('/api/v1/users', require('./routes/v1/users'));
app.use('/api/v2/users', require('./routes/v2/users'));`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Use descriptive and RESTful route names</li>
            <li>Implement proper error handling</li>
            <li>Validate route parameters and request body</li>
            <li>Use middleware for common functionality</li>
            <li>Organize routes by resource or feature</li>
            <li>Version your API routes</li>
            <li>Use appropriate HTTP methods and status codes</li>
            <li>Implement rate limiting and security measures</li>
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
          to="/nodejs-course/middleware"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Middleware →
        </Link>
      </div>
    </motion.div>
  );
};

export default Routes; 