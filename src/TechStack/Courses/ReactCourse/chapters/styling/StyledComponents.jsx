import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const styledComponentsExample = `import styled from 'styled-components';

const Button = styled.button\`
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
\`;

function App() {
  return <Button>Click Me</Button>;
}

export default App;
`;

const StyledComponents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Styled Components</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What Are Styled Components?</h2>
        <p className="text-gray-600 mb-4">
          Styled Components is a popular CSS-in-JS library for React and React Native that allows you to write CSS styles directly within your JavaScript files. It leverages tagged template literals to style your components, keeping styles scoped and modular.
        </p>
        <p className="text-gray-600 mb-4">
          Instead of having separate CSS files, styled-components lets you define your styles alongside your components. This tight coupling improves maintainability, enhances developer experience, and avoids global CSS conflicts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use Styled Components?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Automatic scoping of CSS to components prevents style collisions.</li>
          <li>Supports dynamic styling based on props and component state.</li>
          <li>Improves readability by colocating styles and markup.</li>
          <li>Supports theming, allowing easy implementation of light/dark modes.</li>
          <li>Removes the need for separate CSS files, streamlining projects.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Example of Styled Components</h2>
        <p className="text-gray-600 mb-4">
          Here's a simple example of creating a styled button component using styled-components:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {styledComponentsExample}
        </SyntaxHighlighter>
        <p className="text-gray-600">
          In this example, the <code>Button</code> component is styled directly using the <code>styled.button</code> API. You can use it just like a regular React component, and it will have the defined styles applied.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dynamic Styling with Props</h2>
        <p className="text-gray-600 mb-4">
          Styled Components also supports dynamic styling based on the props passed to the component. Here's an example:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {`const Button = styled.button\`
  background-color: \${props => (props.primary ? '#007bff' : '#6c757d')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: \${props => (props.primary ? '#0056b3' : '#5a6268')};
  }
\`;

function App() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </>
  );
}`}
        </SyntaxHighlighter>
        <p className="text-gray-600">
          In this snippet, the button’s background color changes based on the <code>primary</code> prop, demonstrating how you can customize styles dynamically.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Theming Support</h2>
        <p className="text-gray-600 mb-4">
          Styled Components has built-in theming support using a <code>ThemeProvider</code>. This lets you provide theme variables that can be accessed in all styled components, perfect for dark/light modes or custom themes.
        </p>
        <p className="text-gray-600 mb-4">
          Example usage:
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {`import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  }
};

const Button = styled.button\`
  background-color: \${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
\`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>Themed Button</Button>
    </ThemeProvider>
  );
}`}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Keep styled components small and focused on one UI element.</li>
          <li>Use meaningful component names for clarity.</li>
          <li>Use theming to maintain consistent design across your app.</li>
          <li>Avoid overusing global styles to keep styles modular.</li>
          <li>Leverage dynamic props to reduce duplication.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/css-modules"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/tailwind"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default StyledComponents;
