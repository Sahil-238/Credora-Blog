import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Props = () => {
  const basicPropsExample = `// Parent Component
function App() {
  return (
    <div>
      <Welcome name="John" age={25} isAdmin={true} />
    </div>
  );
}

// Child Component
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
      {props.isAdmin && <p>Admin Access Granted</p>}
    </div>
  );
}`;

  const destructuringExample = `// Props Destructuring
function UserProfile({ name, age, email, isVerified = false }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {isVerified && <span>✓ Verified</span>}
    </div>
  );
}

// Usage
<UserProfile
  name="John Doe"
  age={25}
  email="john@example.com"
/>`;

  const propTypesExample = `import PropTypes from 'prop-types';

function User({ name, age, email, friends }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Friends: {friends.length}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(PropTypes.string)
};

User.defaultProps = {
  age: 0,
  friends: []
};`;

  const childrenPropExample = `// Button Component with children prop
function Button({ children, type = "primary" }) {
  return (
    <button className={\`btn btn-\${type}\`}>
      {children}
    </button>
  );
}

// Usage
<Button type="success">
  Click Me!
</Button>

// Card Component with multiple children
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="Welcome">
  <p>This is the main content.</p>
  <Button>Learn More</Button>
</Card>`;

  const spreadPropsExample = `// Component with many props
function UserCard({ name, age, email, location, ...otherProps }) {
  return (
    <div {...otherProps}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Location: {location}</p>
    </div>
  );
}

// Usage with spread operator
const userProps = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  location: "New York",
  className: "user-card",
  id: "user-1"
};

<UserCard {...userProps} />`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Props in React</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What are Props?</h2>
        <p className="text-gray-600 mb-4">
          Props (short for "properties") are the mechanism for passing data from parent to child components in React. They are read-only and help make your components reusable.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            Props are immutable - a component should never modify its own props. This helps maintain the one-way data flow that makes React apps predictable and easier to debug.
          </p>
        </div>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicPropsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Props Destructuring</h2>
        <p className="text-gray-600 mb-4">
          Props can be destructured directly in the function parameters, making the code cleaner and more readable. You can also specify default values during destructuring.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {destructuringExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">PropTypes and Default Props</h2>
        <p className="text-gray-600 mb-4">
          PropTypes provide a way to validate the props being passed to a component. While optional, they're very useful for debugging and documenting your components.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {propTypesExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">The Children Prop</h2>
        <p className="text-gray-600 mb-4">
          The children prop is a special prop that lets you pass components as data to other components, enabling component composition.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {childrenPropExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Spreading Props</h2>
        <p className="text-gray-600 mb-4">
          The spread operator can be used to pass all properties of an object as props, or to collect remaining props after destructuring.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {spreadPropsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Props Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Always use prop-types or TypeScript for props validation</li>
            <li>Keep props as simple as possible</li>
            <li>Use descriptive prop names</li>
            <li>Provide default values for optional props</li>
            <li>Don't modify props inside a component</li>
            <li>Use the spread operator judiciously</li>
            <li>Document your props with comments or TypeScript</li>
          </ul>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Consider using TypeScript for better props type safety</li>
          <li>Use compound components pattern for complex component APIs</li>
          <li>Avoid passing too many props (prop drilling)</li>
          <li>Consider using Context API for deeply nested props</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/components"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: Components
        </Link>
        <Link
          to="/react-course/state"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: State <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Props;