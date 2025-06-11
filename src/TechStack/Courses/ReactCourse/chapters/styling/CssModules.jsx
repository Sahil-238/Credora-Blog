import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const cssModuleExample = `
// styles.module.css
.title {
  color: teal;
  font-size: 24px;
}

// Component.jsx
import React from 'react';
import styles from './styles.module.css';

function Component() {
  return <h1 className={styles.title}>Hello, CSS Modules!</h1>;
}

export default Component;
`;

const CssModules = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Modules</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Understanding CSS Modules</h2>
        <p className="text-gray-600 mb-4">
          CSS Modules allow you to write CSS that is scoped locally to your component, avoiding global namespace conflicts. Each CSS class or animation name is automatically made unique, so styles won’t clash with those in other files.
        </p>
        <p className="text-gray-600 mb-4">
          This approach improves maintainability and helps you write modular, reusable components with encapsulated styles.
        </p>
        <SyntaxHighlighter language="css" style={atomDark} className="rounded-lg mb-4">
          {cssModuleExample}
        </SyntaxHighlighter>
        <p className="text-gray-600">
          To use CSS Modules, your CSS file needs to have the <code>.module.css</code> suffix and you import it as an object in your React component. You then assign class names using this imported styles object.
        </p>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/styled-components"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default CssModules;
