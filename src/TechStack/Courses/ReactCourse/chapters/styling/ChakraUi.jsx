import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const installCmd = `// Install Chakra UI and its dependencies
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
// or
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion`;

const basicButtonExample = `import { Button } from '@chakra-ui/react';

function App() {
  return (
    <Button colorScheme="teal" size="md">
      Click Me
    </Button>
  );
}

export default App;`;

const themeExample = `import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Your app components here */}
    </ChakraProvider>
  );
}

export default App;`;

const ChakraUi = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Chakra UI</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Chakra UI?</h2>
        <p className="text-gray-600 mb-4">
          Chakra UI is a simple, modular, and accessible component library that gives you building blocks to build React applications quickly. 
          It focuses on developer experience with easy theming, accessibility out of the box, and composable components.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Use Chakra UI?</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Accessible components with keyboard and screen reader support.</li>
          <li>Easy and customizable theming system.</li>
          <li>Built on top of Emotion for powerful CSS-in-JS support.</li>
          <li>Comes with responsive styles and style props.</li>
          <li>Great documentation and active community.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Installing Chakra UI</h2>
        <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
          {installCmd}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Basic Button Example</h2>
        <p className="text-gray-600 mb-4">
          Here’s a simple example using Chakra UI’s Button component with built-in styling and theming.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {basicButtonExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Theming with Chakra UI</h2>
        <p className="text-gray-600 mb-4">
          Chakra UI allows you to create a custom theme by extending the default theme and wrapping your app with <code>ChakraProvider</code>.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark} className="rounded-lg">
          {themeExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Wrap your app with <code>ChakraProvider</code> for theming and context.</li>
          <li>Use style props for quick and responsive styling.</li>
          <li>Use built-in accessibility features and semantic HTML components.</li>
          <li>Leverage the <code>extendTheme</code> function for consistent custom design tokens.</li>
          <li>Combine with Framer Motion for animations (already included).</li>
        </ul>
      </section>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/material-ui"
          className="text-blue-600 hover:text-blue-800"
        >
          ← Previous
        </Link>
        <Link
          to="/react-course"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next →
        </Link>
      </div>
    </motion.div>
  );
};

export default ChakraUi;
