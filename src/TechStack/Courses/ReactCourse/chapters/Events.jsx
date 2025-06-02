import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ReactCourse.css';

const Events = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Basic event handler
  const handleClick = () => {
    setCount(count + 1);
  };

  // Event handler with parameter
  const handleParamClick = (text) => {
    setMessage(text);
  };

  // Event object handler
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

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
                ← Back to React Course
              </button>
            </div>
          </div>
        </div>
      </nav>

      <h1>React Events</h1>
      
      <section className="section">
        <h2>Event Basics</h2>
        <p>
          React events are named using camelCase syntax and passed as JSX attributes.
          Event handlers are written inside curly braces.
        </p>
        
        <div className="code-example">
          <pre>
            <code>{`
// React event syntax
<button onClick={handleClick}>Click me</button>

// HTML event syntax
<button onclick="handleClick()">Click me</button>
            `}</code>
          </pre>
        </div>

        <div className="interactive-demo">
          <h3>Try it yourself:</h3>
          <p>Count: {count}</p>
          <button onClick={handleClick} className="mr-4">
            Increment Count
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Passing Arguments to Event Handlers</h2>
        <p>
          You can pass arguments to event handlers using arrow functions or the bind method.
        </p>

        <div className="code-example">
          <pre>
            <code>{`
// Using arrow function
<button onClick={() => handleParamClick("Hello!")}>
  Say Hello
</button>

// Using bind
<button onClick={handleParamClick.bind(this, "Hello!")}>
  Say Hello
</button>
            `}</code>
          </pre>
        </div>

        <div className="interactive-demo">
          <h3>Try it yourself:</h3>
          <p>Message: {message}</p>
          <button 
            onClick={() => handleParamClick("Hello!")}
            className="mr-4"
          >
            Say Hello
          </button>
          <button 
            onClick={() => handleParamClick("Goodbye!")}
          >
            Say Goodbye
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Event Object</h2>
        <p>
          React events pass a synthetic event object that wraps the browser's native event.
        </p>

        <div className="code-example">
          <pre>
            <code>{`
function handleChange(event) {
  console.log(event.target.value);
}

<input onChange={handleChange} />
            `}</code>
          </pre>
        </div>

        <div className="interactive-demo">
          <h3>Try it yourself:</h3>
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            placeholder="Type something..."
            className="mb-4"
          />
          <p>You typed: {message}</p>
        </div>
      </section>

      <section className="section">
        <h2>Common React Events</h2>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>onClick</td>
              <td>Triggered when an element is clicked</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>Triggered when form input value changes</td>
            </tr>
            <tr>
              <td>onSubmit</td>
              <td>Triggered when a form is submitted</td>
            </tr>
            <tr>
              <td>onMouseOver</td>
              <td>Triggered when mouse hovers over an element</td>
            </tr>
            <tr>
              <td>onKeyPress</td>
              <td>Triggered when a key is pressed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Event Binding in Class Components</h2>
        <div className="code-example">
          <pre>
            <code>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 'this' is bound correctly
    this.setState({ clicked: true });
  }

  // Alternative: Use class fields with arrow functions
  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
            `}</code>
          </pre>
        </div>
      </section>

      <div className="chapter-nav">
        <button
          onClick={() => navigate('/courses/react/components')}
          className="nav-button"
        >
          ← Previous: Components
        </button>
        <button
          onClick={() => navigate('/courses/react/conditional-rendering')}
          className="nav-button"
        >
          Next: Conditional Rendering →
        </button>
      </div>
    </div>
  );
};

export default Events; 