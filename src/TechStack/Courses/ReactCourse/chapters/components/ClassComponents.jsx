import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Example 1: Basic Class Component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Counter mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count updated:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Counter will unmount');
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    return (
      <div className="space-y-4">
        <div className="text-4xl font-mono text-center">{this.state.count}</div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

// Example 2: Component with Props and PropTypes
class UserCard extends React.Component {
  static defaultProps = {
    role: 'User'
  };

  render() {
    const { name, email, role } = this.props;

    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-gray-600">{email}</p>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    );
  }
}

// Example 3: Component with Error Handling
class ErrorProne extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  throwError = () => {
    throw new Error('Simulated error');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-500 p-4 bg-red-50 rounded">
          Something went wrong!
        </div>
      );
    }

    return (
      <button
        onClick={this.throwError}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Trigger Error
      </button>
    );
  }
}

const ClassComponents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Class Components</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Class Components?</h2>
        <p className="text-gray-600 mb-4">
          Class components are ES6 classes that extend React.Component. They were the primary way to define React
          components before hooks were introduced. They provide:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Local state management through this.state</li>
          <li>Lifecycle methods for side effects</li>
          <li>Error boundaries (only possible with classes)</li>
          <li>Object-oriented patterns and inheritance</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Note:</strong> While functional components with hooks are now preferred, understanding
            class components is still important for maintaining legacy code and using features like error boundaries.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 1: Basic Class Component</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Counter with Lifecycle Methods</h3>
          <Counter />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Counter mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count updated:', this.state.count);
    }
  }

  componentWillUnmount() {
    console.log('Counter will unmount');
  }

  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 2: Props and PropTypes</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">User Card Example</h3>
          <div className="space-y-4">
            <UserCard
              name="John Doe"
              email="john@example.com"
              role="Admin"
            />
            <UserCard
              name="Jane Smith"
              email="jane@example.com"
            />
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`class UserCard extends React.Component {
  static defaultProps = {
    role: 'User'
  };

  render() {
    const { name, email, role } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <span>{role}</span>
      </div>
    );
  }
}`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Example 3: Error Boundaries</h2>
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="font-semibold mb-4">Error Handling Example</h3>
          <ErrorProne />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
          {`class ErrorProne extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong!</div>;
    }
    return <button onClick={this.throwError}>
      Trigger Error
    </button>;
  }
}`}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lifecycle Methods</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>Mounting Phase:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>constructor(props)</li>
              <li>static getDerivedStateFromProps(props, state)</li>
              <li>render()</li>
              <li>componentDidMount()</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">
              <strong>Updating Phase:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-yellow-700">
              <li>static getDerivedStateFromProps(props, state)</li>
              <li>shouldComponentUpdate(nextProps, nextState)</li>
              <li>render()</li>
              <li>getSnapshotBeforeUpdate(prevProps, prevState)</li>
              <li>componentDidUpdate(prevProps, prevState, snapshot)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>Unmounting Phase:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>componentWillUnmount()</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-green-700">
              <strong>✅ Do:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700">
              <li>Use constructor for state initialization</li>
              <li>Bind methods in constructor or use arrow functions</li>
              <li>Clean up subscriptions in componentWillUnmount</li>
              <li>Use PureComponent for simple props/state comparisons</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">
              <strong>❌ Don't:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 text-red-700">
              <li>Modify state directly (use setState)</li>
              <li>Call setState in componentDidUpdate without condition</li>
              <li>Use componentWillMount (deprecated)</li>
              <li>Forget to handle errors in lifecycle methods</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/custom-hooks"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous: Custom Hooks
        </Link>
        <Link
          to="/react-course/functional-components"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Functional Components →
        </Link>
      </div>
    </motion.div>
  );
};

export default ClassComponents;