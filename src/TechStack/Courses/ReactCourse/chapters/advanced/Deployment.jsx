import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCloud, FiServer, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Deployment = () => {
  const [activeTab, setActiveTab] = useState('build');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const examples = {
    build: {
      title: 'Build Process',
      code: `// package.json
{
  "scripts": {
    "build": "react-scripts build",
    "analyze": "source-map-explorer 'build/static/js/*.js'"
  }
}

// Build optimization
const config = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}`,
      explanation: 'Build configuration and optimization for production deployment.'
    },
    static: {
      title: 'Static Hosting',
      code: `# Netlify configuration
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Vercel configuration
# vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    }
  ],
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}`,
      explanation: 'Configuration for static hosting platforms like Netlify and Vercel.'
    },
    docker: {
      title: 'Docker',
      code: `# Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# nginx.conf
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}`,
      explanation: 'Docker configuration for containerized deployment.'
    },
    ci: {
      title: 'CI/CD',
      code: `# GitHub Actions workflow
name: Deploy React App

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install Dependencies
        run: npm ci
        
      - name: Run Tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Production
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}`,
      explanation: 'Continuous Integration and Deployment pipeline configuration.'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Deploying React Applications</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding Deployment</h2>
        <p className="text-gray-600 mb-4">
          Deploying a React application involves building, optimizing, and hosting your
          application in a production environment. Different deployment strategies suit
          different project needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <FiCloud className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Static Hosting</h3>
            <p className="text-gray-600">
              Deploy to CDN-backed platforms
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiServer className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Server Deployment</h3>
            <p className="text-gray-600">
              Deploy with server-side rendering
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <FiSettings className="text-2xl text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Configuration</h3>
            <p className="text-gray-600">
              Environment and build setup
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Deployment Examples</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                className={`px-6 py-3 whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(key)}
              >
                {example.title}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              {examples[activeTab].code}
            </pre>
            <p className="text-gray-600">
              {examples[activeTab].explanation}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Environment Configuration</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Environment Variables</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`# .env.development
REACT_APP_API_URL=http://localhost:3000
REACT_APP_DEBUG=true

# .env.production
REACT_APP_API_URL=https://api.example.com
REACT_APP_DEBUG=false

# Usage in React
const apiUrl = process.env.REACT_APP_API_URL;
const isDebug = process.env.REACT_APP_DEBUG === 'true';`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Build Configuration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`// craco.config.js
module.exports = {
  webpack: {
    configure: {
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Deployment Platforms</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Static Hosting Platforms</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Netlify - Automated deployments with Git integration</li>
              <li>Vercel - Optimized for Next.js and React applications</li>
              <li>GitHub Pages - Free hosting for static sites</li>
              <li>Firebase Hosting - Google's hosting platform</li>
              <li>AWS S3 + CloudFront - Scalable static hosting</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Server Platforms</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Heroku - Platform as a Service (PaaS)</li>
              <li>DigitalOcean - Virtual private servers</li>
              <li>AWS Elastic Beanstalk - Managed application platform</li>
              <li>Google App Engine - Serverless application platform</li>
              <li>Azure App Service - Microsoft's cloud platform</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Deployment</h2>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="mb-4 text-blue-600 hover:text-blue-800"
        >
          {showAdvanced ? 'Hide Advanced Topics' : 'Show Advanced Topics'}
        </button>
        {showAdvanced && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Blue-Green Deployment</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`# Docker Compose for Blue-Green Deployment
version: '3'
services:
  blue:
    build: .
    ports:
      - "8001:80"
  green:
    build: .
    ports:
      - "8002:80"
  nginx:
    image: nginx
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - blue
      - green`}
              </pre>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Kubernetes Deployment</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: react-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: react-app
  template:
    metadata:
      labels:
        app: react-app
    spec:
      containers:
      - name: react-app
        image: react-app:latest
        ports:
        - containerPort: 80
        resources:
          limits:
            cpu: "0.5"
            memory: "512Mi"
          requests:
            cpu: "0.2"
            memory: "256Mi"`}
              </pre>
            </div>
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Exercise</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            Set up a complete deployment pipeline with the following requirements:
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-700 font-semibold">Requirements:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Configure staging and production environments</li>
              <li>Set up automated testing in CI/CD pipeline</li>
              <li>Implement blue-green deployment strategy</li>
              <li>Configure monitoring and logging</li>
              <li>Set up automated rollback procedures</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/testing"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Testing
        </Link>
        <Link
          to="/react-course/best-practices"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Best Practices →
        </Link>
      </div>
    </motion.div>
  );
};

export default Deployment; 