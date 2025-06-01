import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiPlay } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CreateReactApp = () => {
  const createAppExample = `# Using npx (recommended)
npx create-react-app my-app

# Using npm
npm init react-app my-app

# Using yarn
yarn create react-app my-app

# With TypeScript template
npx create-react-app my-app --template typescript`;

  const projectStructureExample = `my-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock`;

  const availableScriptsExample = `{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

# Usage:
npm start      # Starts the development server
npm run build  # Builds the app for production
npm test       # Runs the test watcher
npm run eject  # Ejects from Create React App`;

  const environmentVariablesExample = `# .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key

# Usage in React
console.log(process.env.REACT_APP_API_URL);
console.log(process.env.REACT_APP_API_KEY);

# Different env files
.env              # Always loaded
.env.local        # Loaded in all environments except test
.env.development  # Only loaded in development
.env.production   # Only loaded in production
.env.test         # Only loaded in test`;

  const customizationExample = `// Adding Sass
npm install sass

// Adding TypeScript
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// Adding React Router
npm install react-router-dom

// Adding Material-UI
npm install @mui/material @emotion/react @emotion/styled

// Adding Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create React App</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">What is Create React App?</h2>
        <p className="text-gray-600 mb-4">
          Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration needed.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
          <p className="text-blue-700">
            Create React App sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
          </p>
        </div>
        <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
          {createAppExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Project Structure</h2>
        <p className="text-gray-600 mb-4">
          Create React App generates a project structure with everything you need to build a modern React application.
        </p>
        <SyntaxHighlighter language="plaintext" style={atomDark} className="rounded-lg">
          {projectStructureExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Scripts</h2>
        <p className="text-gray-600 mb-4">
          Create React App comes with several built-in scripts that help you develop, test, and build your application.
        </p>
        <SyntaxHighlighter language="json" style={atomDark} className="rounded-lg">
          {availableScriptsExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Environment Variables</h2>
        <p className="text-gray-600 mb-4">
          Create React App has built-in support for environment variables, which can be useful for configuration.
        </p>
        <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
          {environmentVariablesExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customization and Popular Additions</h2>
        <p className="text-gray-600 mb-4">
          While Create React App provides a solid foundation, you can customize it further by adding popular libraries and tools.
        </p>
        <SyntaxHighlighter language="bash" style={atomDark} className="rounded-lg">
          {customizationExample}
        </SyntaxHighlighter>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Best Practices</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            <li>Keep the src/ directory organized with clear folder structure</li>
            <li>Use environment variables for configuration</li>
            <li>Don't eject unless absolutely necessary</li>
            <li>Utilize the built-in testing capabilities</li>
            <li>Keep track of your dependencies and update them regularly</li>
            <li>Use the PWA template if you need offline capabilities</li>
            <li>Follow the official documentation for updates and best practices</li>
          </ul>
        </div>
      </section>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
        <p className="text-yellow-700">
          The 'eject' script is a one-way operation. Once you eject, you can't go back! Only eject if you have a specific need for advanced configuration that Create React App doesn't support.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Pro Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>Use TypeScript for better type safety</li>
          <li>Consider alternatives like Vite for faster development</li>
          <li>Set up ESLint and Prettier for code quality</li>
          <li>Use CSS modules or styled-components for styling</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          to="/react-course/getting-started"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <FiPlay className="mr-2" /> Previous: Getting Started
        </Link>
        <Link
          to="/react-course/jsx"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Next: JSX <FiCode className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CreateReactApp;