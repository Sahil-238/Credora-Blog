import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const exampleInstall = `// Installation using npm or yarn
npm install @mui/material @emotion/react @emotion/styled
// or
yarn add @mui/material @emotion/react @emotion/styled`;

const exampleButton = `import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton() {
  return (
    <Button variant="contained" color="primary">
      Click Me
    </Button>
  );
}`;

const exampleTheme = `import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="contained">
        Primary Button
      </Button>
      <Button color="secondary" variant="outlined">
        Secondary Button
      </Button>
    </ThemeProvider>
  );
}

export default App;`;

const MaterialUi = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Material UI</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Material UI?</h2>
        <p className="text-gray-600 mb-4">
          Material UI (MUI) is a popular React UI framework that implements Google’s Material Design principles.
          It provides a rich set of pre-built, accessible, and customizable React components to build modern user interfaces quickly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use Material UI?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Comprehensive library of ready-to-use components.</li>
          <li>Consistent design system based on Material Design.</li>
          <li>Highly customizable theming system.</li>
          <li>Responsive design and accessibility built-in.</li>
          <li>Strong community support and continuous updates.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How to Install Material UI</h2>
        <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
          {exampleInstall}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Usage Example</h2>
        <p className="text-gray-600 mb-4">Here is a simple example of using Material UI's Button component:</p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {exampleButton}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Theming in Material UI</h2>
        <p className="text-gray-600 mb-4">
          Material UI offers a powerful theming system that lets you customize colors, typography, and spacing globally.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {exampleTheme}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Use the ThemeProvider to apply custom themes across your app.</li>
          <li>Leverage the built-in system props for spacing, typography, and colors.</li>
          <li>Use Material UI’s responsive utilities to build mobile-friendly layouts.</li>
          <li>Combine Material UI components with CSS-in-JS solutions like Emotion (used internally) for advanced styling.</li>
          <li>Stay updated with MUI’s latest versions for new features and bug fixes.</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/css-in-js"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course/chakra-ui"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default MaterialUi;
