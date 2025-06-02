import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ReactCourse.css';

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className="chapter-content">
      <nav className="bg-white shadow-lg mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/courses/react')}
                className="text-gray-800 hover:text-blue-600"
              >
                ← Back to Course
              </button>
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Introduction to React</h1>
        
        <section className="section">
          <h2>What is React?</h2>
          <p>
            React is a JavaScript library for building user interfaces, particularly single-page applications. 
            It was developed and is maintained by Facebook (now Meta) and a community of individual developers and companies.
          </p>
          <div className="callout">
            <strong>Key Points:</strong>
            <ul>
              <li>Developed by Facebook</li>
              <li>Open-source library</li>
              <li>Component-based architecture</li>
              <li>Virtual DOM for performance</li>
              <li>Declarative UI programming</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Why Choose React?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="benefit-card bg-white p-4 rounded-lg shadow">
              <h3>Easy to Learn</h3>
              <p>React has a gentle learning curve and extensive documentation.</p>
            </div>
            <div className="benefit-card bg-white p-4 rounded-lg shadow">
              <h3>Component-Based</h3>
              <p>Build encapsulated components that manage their own state.</p>
            </div>
            <div className="benefit-card bg-white p-4 rounded-lg shadow">
              <h3>Virtual DOM</h3>
              <p>Efficient updates and rendering for better performance.</p>
            </div>
            <div className="benefit-card bg-white p-4 rounded-lg shadow">
              <h3>Strong Community</h3>
              <p>Large ecosystem of libraries and tools.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>React Features</h2>
          <div className="code-example">
            <pre>
              <code>{`
// Example of a simple React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using JSX
const element = <Welcome name="React Developer" />;
              `}</code>
            </pre>
          </div>
          <div className="mt-4">
            <h3>Key Features:</h3>
            <ul className="list-disc pl-6">
              <li>JSX - JavaScript XML</li>
              <li>One-way data flow</li>
              <li>Virtual DOM</li>
              <li>Performance</li>
              <li>Extensions</li>
              <li>Debugging</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Prerequisites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="prerequisite-card bg-gray-50 p-4 rounded">
              <h3>HTML & CSS</h3>
              <ul className="text-sm">
                <li>Basic HTML structure</li>
                <li>CSS styling</li>
                <li>Responsive design</li>
              </ul>
            </div>
            <div className="prerequisite-card bg-gray-50 p-4 rounded">
              <h3>JavaScript</h3>
              <ul className="text-sm">
                <li>ES6+ features</li>
                <li>Functions</li>
                <li>Objects & Arrays</li>
              </ul>
            </div>
            <div className="prerequisite-card bg-gray-50 p-4 rounded">
              <h3>Development Tools</h3>
              <ul className="text-sm">
                <li>Node.js</li>
                <li>npm/yarn</li>
                <li>Code editor</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>React Architecture</h2>
          <div className="mb-4">
            <h3>Component Architecture</h3>
            <p>
              React applications are built using components. Components are the building blocks of any React application, 
              and a single app usually consists of multiple components.
            </p>
          </div>
          <div className="code-example">
            <pre>
              <code>{`
// Component hierarchy example
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  );
}
              `}</code>
            </pre>
          </div>
        </section>

        <div className="chapter-nav">
          <button
            onClick={() => navigate('/courses/react')}
            className="nav-button"
          >
            ← Back to Course
          </button>
          <button
            onClick={() => navigate('/courses/react/getting-started')}
            className="nav-button"
          >
            Next: Getting Started →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction; 