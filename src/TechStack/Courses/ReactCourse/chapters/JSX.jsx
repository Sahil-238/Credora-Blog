import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ReactCourse.css';

const JSX = () => {
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
        <h1>JSX in React</h1>

        <section className="section">
          <h2>What is JSX?</h2>
          <p>
            JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code.
            It makes React code more readable and writing templates more intuitive.
          </p>

          <div className="code-example">
            <h3>JSX vs Plain JavaScript:</h3>
            <pre>
              <code>{`
// JSX Syntax
const element = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);

// Plain JavaScript (what JSX compiles to)
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>JSX Rules and Syntax</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rule-card bg-white p-4 rounded-lg shadow">
              <h3>Elements Must be Closed</h3>
              <div className="code-example">
                <pre>
                  <code>{`
// Correct
<img src="image.jpg" />
<input type="text" />

// Also correct
<div>
  Content
</div>
                  `}</code>
                </pre>
              </div>
            </div>

            <div className="rule-card bg-white p-4 rounded-lg shadow">
              <h3>Attributes Use camelCase</h3>
              <div className="code-example">
                <pre>
                  <code>{`
// Correct
<div className="container">
<button onClick={handleClick}>

// Incorrect
<div class="container">
<button onclick={handleClick}>
                  `}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="callout warning">
            <strong>Important Rules:</strong>
            <ul>
              <li>JSX must return a single root element</li>
              <li>All tags must be closed</li>
              <li>Use className instead of class</li>
              <li>JavaScript expressions in curly braces</li>
              <li>Attributes use camelCase naming</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>JSX Expressions</h2>
          <p>
            You can embed any JavaScript expression in JSX by wrapping it in curly braces.
          </p>

          <div className="code-example">
            <pre>
              <code>{`
const name = 'React Developer';
const element = <h1>Hello, {name}</h1>;

// Expressions in attributes
const imgUrl = 'https://example.com/image.jpg';
const element = <img src={imgUrl} />;

// Conditional rendering
const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
  </div>
);
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>JSX Attributes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="attribute-card bg-white p-4 rounded-lg shadow">
              <h3>String Literals</h3>
              <div className="code-example">
                <pre>
                  <code>{`
const element = <div className="container">
const input = <input type="text" />
                  `}</code>
                </pre>
              </div>
            </div>

            <div className="attribute-card bg-white p-4 rounded-lg shadow">
              <h3>JavaScript Expressions</h3>
              <div className="code-example">
                <pre>
                  <code>{`
const width = 100;
const element = <div style={{width: width}}>
const input = <input value={value} />
                  `}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>JSX Styling</h2>
          
          <div className="code-example">
            <pre>
              <code>{`
// Inline Styling
const styles = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px'
};

const element = <div style={styles}>Styled Content</div>;

// Class-based Styling
const element = <div className="container large-text">
  Styled with CSS Classes
</div>;
              `}</code>
            </pre>
          </div>

          <div className="callout">
            <strong>Note:</strong>
            <p>
              Inline styles in JSX use a JavaScript object with camelCased properties 
              instead of a CSS string.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>JSX Comments</h2>
          
          <div className="code-example">
            <pre>
              <code>{`
{/* This is a JSX comment */}
const element = (
  <div>
    {/* Multi-line
        JSX comment */}
    <h1>Hello</h1>
  </div>
);
              `}</code>
            </pre>
          </div>
        </section>

        <div className="chapter-nav">
          <button
            onClick={() => navigate('/courses/react/getting-started')}
            className="nav-button"
          >
            ← Previous: Getting Started
          </button>
          <button
            onClick={() => navigate('/courses/react/components')}
            className="nav-button"
          >
            Next: Components →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default JSX; 