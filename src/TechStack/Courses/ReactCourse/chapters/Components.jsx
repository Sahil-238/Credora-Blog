import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ReactCourse.css';

const Components = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

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
        <h1>React Components</h1>

        <section className="section">
          <h2>What are Components?</h2>
          <p>
            Components are the building blocks of React applications. They are independent, reusable pieces of code
            that return HTML elements via JSX.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="component-card bg-white p-4 rounded-lg shadow">
              <h3>Function Components</h3>
              <div className="code-example">
                <pre>
                  <code>{`
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Using Arrow Function
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
                  `}</code>
                </pre>
              </div>
            </div>

            <div className="component-card bg-white p-4 rounded-lg shadow">
              <h3>Class Components</h3>
              <div className="code-example">
                <pre>
                  <code>{`
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
                  `}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Component Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="type-card bg-gray-50 p-4 rounded">
              <h3>Functional Components</h3>
              <ul className="list-disc pl-6">
                <li>Simple and straightforward</li>
                <li>No this keyword</li>
                <li>Can use Hooks</li>
                <li>Preferred in modern React</li>
              </ul>
            </div>

            <div className="type-card bg-gray-50 p-4 rounded">
              <h3>Class Components</h3>
              <ul className="list-disc pl-6">
                <li>More feature-rich</li>
                <li>Has lifecycle methods</li>
                <li>Can have local state</li>
                <li>Used in legacy code</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Creating a Component</h2>
          
          <div className="code-example">
            <pre>
              <code>{`
// Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button 
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

// Using the Button component
import Button from './Button';

function App() {
  return (
    <div>
      <Button text="Click Me" onClick={() => alert('Clicked!')} />
    </div>
  );
}
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>Component Lifecycle</h2>
          
          <div className="lifecycle-diagram mb-6">
            <h3>Class Component Lifecycle</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="phase-card bg-blue-50 p-4 rounded">
                <h4>Mounting</h4>
                <ul>
                  <li>constructor()</li>
                  <li>render()</li>
                  <li>componentDidMount()</li>
                </ul>
              </div>
              <div className="phase-card bg-green-50 p-4 rounded">
                <h4>Updating</h4>
                <ul>
                  <li>shouldComponentUpdate()</li>
                  <li>render()</li>
                  <li>componentDidUpdate()</li>
                </ul>
              </div>
              <div className="phase-card bg-red-50 p-4 rounded">
                <h4>Unmounting</h4>
                <ul>
                  <li>componentWillUnmount()</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="code-example">
            <h3>Lifecycle Methods Example:</h3>
            <pre>
              <code>{`
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>Interactive Example</h2>
          <div className="interactive-demo bg-white p-6 rounded-lg shadow-lg">
            <h3>Counter Component</h3>
            <p className="mb-4">Count: {count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Decrement
            </button>
          </div>

          <div className="code-example mt-4">
            <pre>
              <code>{`
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};
              `}</code>
            </pre>
          </div>
        </section>

        <section className="section">
          <h2>Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="practice-card bg-white p-4 rounded-lg shadow">
              <h3>Do's</h3>
              <ul className="list-disc pl-6">
                <li>Keep components small and focused</li>
                <li>Use functional components</li>
                <li>Use proper naming conventions</li>
                <li>Destructure props</li>
                <li>Use PropTypes for type checking</li>
              </ul>
            </div>
            <div className="practice-card bg-white p-4 rounded-lg shadow">
              <h3>Don'ts</h3>
              <ul className="list-disc pl-6">
                <li>Modify props directly</li>
                <li>Use state for derived data</li>
                <li>Put too much logic in JSX</li>
                <li>Forget to handle errors</li>
                <li>Ignore component composition</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="chapter-nav">
          <button
            onClick={() => navigate('/courses/react/jsx')}
            className="nav-button"
          >
            ← Previous: JSX
          </button>
          <button
            onClick={() => navigate('/courses/react/props')}
            className="nav-button"
          >
            Next: Props →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Components; 