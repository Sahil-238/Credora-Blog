import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCloud, FiServer, FiCode } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Deployment = () => {
  const buildProcessExample = `{
  "scripts": {
    "build": "react-scripts build",
    "analyze": "source-map-explorer 'build/static/js/*.js'"
  }
}`;

  const staticHostingExample = `[build]
  command = "npm run build"
  publish = "build"
  environment = { NODE_VERSION = "16" }`;

  const dockerExample = `FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html`;

  const cicdExample = `name: Deploy React App
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install Dependencies
        run: npm ci

      - name: Run Tests
        run: npm test

      - name: Build
        run: npm run build
        env:
          REACT_APP_API_URL: "\${process.env.API_URL}"

      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: "\${process.env.NETLIFY_AUTH_TOKEN}"
          NETLIFY_SITE_ID: "\${process.env.NETLIFY_SITE_ID}"
        with:
          args: deploy --dir=build --prod"`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Deploying React Applications</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Deployment</h2>
        <p className="text-gray-600 mb-4">
          Deploying a React application involves building for production and hosting the static files on a web server. Various platforms and approaches are available depending on your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCloud className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Static Hosting</h3>
            <p className="text-gray-600">
              Deploy to CDN platforms
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiServer className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Containerization</h3>
            <p className="text-gray-600">
              Deploy with Docker
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCode className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">CI/CD</h3>
            <p className="text-gray-600">
              Automated deployment
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Build Process</h2>
        <p className="text-gray-600 mb-4">
          Understanding the build process and optimizing your production build is crucial for optimal performance.
        </p>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded-lg">
          {buildProcessExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Static Hosting</h2>
        <p className="text-gray-600 mb-4">
          Static hosting platforms like Netlify, Vercel, and GitHub Pages offer simple deployment solutions with additional features like continuous deployment.
        </p>
        <SyntaxHighlighter language="toml" style={atomDark} className="rounded-lg">
          {staticHostingExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Docker Deployment</h2>
        <p className="text-gray-600 mb-4">
          Using Docker for deployment provides consistency across different environments and easy scaling options.
        </p>
        <SyntaxHighlighter language="dockerfile" style={atomDark} className="rounded-lg">
          {dockerExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">CI/CD Pipelines</h2>
        <p className="text-gray-600 mb-4">
          Implementing continuous integration and deployment pipelines automates the testing and deployment process.
        </p>
        <SyntaxHighlighter language="yaml" style={atomDark} className="rounded-lg">
          {cicdExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Deployment Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Use environment variables for configuration</li>
            <li>Implement proper error handling</li>
            <li>Configure proper caching strategies</li>
            <li>Set up monitoring and logging</li>
            <li>Implement security best practices</li>
            <li>Use CDN for static assets</li>
            <li>Configure proper routing</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use build analysis tools</li>
          <li>Implement progressive deployment</li>
          <li>Monitor performance metrics</li>
          <li>Set up proper backup strategies</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/testing"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiCode className="mr-2" /> Previous: Testing
        </Link>
        <Link
          to="/react-course/best-practices"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: Best Practices <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Deployment;