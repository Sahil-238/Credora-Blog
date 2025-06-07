import React from 'react';
import { motion } from 'framer-motion';
import ChapterNavigation from '../../components/ChapterNavigation';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Comments = () => {
  const basicCommentsExample = `
/* This is a single-line CSS comment */

/* This is a 
   multi-line CSS comment that can
   span multiple lines */

/* Comments can be used to:
   1. Document code
   2. Explain complex selectors
   3. Group related styles
   4. Temporarily disable code */

.header {
  /* Setting primary brand color */
  color: #333;
  
  /* Responsive font size */
  font-size: clamp(1rem, 2.5vw, 2rem);
}`;

  const documentationExample = `
/* ==========================================================================
   Component: Navigation
   Description: Main navigation styles for the website
   ========================================================================== */

/* Base navigation styles
   ========================================================================== */
.nav {
  display: flex;
  justify-content: space-between;
}

/* Navigation items
   ========================================================================== */
.nav__item {
  /* Using BEM naming convention */
  padding: 0.5rem 1rem;
}

/* Navigation states
   ========================================================================== */
.nav__item:hover {
  /* Color variables defined in :root */
  background-color: var(--nav-hover-bg);
}

/* TODO: Add mobile navigation styles */
/* FIXME: Fix navigation overflow on small screens */
/* NOTE: Consider adding dropdown support */`;

  const debuggingExample = `
/* Debug borders */
* {
  /* outline: 1px solid red !important; */
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Debug: 
  background: rgba(0, 0, 255, 0.1);
  border: 2px dashed blue; */
}

/* @debug "Grid columns: " + 3; (Sass) */
/* @warn "Deprecated mixin used"; (Sass) */`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">CSS Comments</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction to CSS Comments</h2>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="text-gray-600 mb-4">
            CSS comments are non-executing annotations in your stylesheets that help document your code,
            explain complex logic, and facilitate collaboration among developers. They are essential for
            maintaining clean, understandable, and maintainable CSS code.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* This is a single-line CSS comment */

/* This is a 
   multi-line CSS comment that can
   span multiple lines */

/* Comments can be used to:
   1. Document code
   2. Explain complex selectors
   3. Group related styles
   4. Temporarily disable code */

.header {
  /* Setting primary brand color */
  color: #333;
  
  /* Responsive font size */
  font-size: clamp(1rem, 2.5vw, 2rem);
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Types of CSS Comments</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Single-line Comments</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Used for brief explanations</li>
              <li>Typically placed above the code they describe</li>
              <li>Good for quick notes and simple documentation</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Multi-line Comments</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Used for detailed explanations</li>
              <li>Perfect for documentation blocks</li>
              <li>Can contain formatted text and lists</li>
              <li>Useful for temporarily disabling large blocks of CSS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Documentation Best Practices</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* ==========================================================================
   Component: Navigation
   Description: Main navigation styles for the website
   ========================================================================== */

/* Base navigation styles
   ========================================================================== */
.nav {
  display: flex;
  justify-content: space-between;
}

/* Navigation items
   ========================================================================== */
.nav__item {
  /* Using BEM naming convention */
  padding: 0.5rem 1rem;
}

/* Navigation states
   ========================================================================== */
.nav__item:hover {
  /* Color variables defined in :root */
  background-color: var(--nav-hover-bg);
}

/* TODO: Add mobile navigation styles */
/* FIXME: Fix navigation overflow on small screens */
/* NOTE: Consider adding dropdown support */`}
            </pre>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Documentation Guidelines</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use consistent comment formatting</li>
              <li>Include component/section headers</li>
              <li>Document complex selectors and calculations</li>
              <li>Explain browser-specific code</li>
              <li>Add context to magic numbers</li>
              <li>Reference related components or dependencies</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Debugging with Comments</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono mb-4">
            <pre className="whitespace-pre-wrap">
{`/* Debug borders */
* {
  /* outline: 1px solid red !important; */
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Debug: 
  background: rgba(0, 0, 255, 0.1);
  border: 2px dashed blue; */
}

/* @debug "Grid columns: " + 3; (Sass) */
/* @warn "Deprecated mixin used"; (Sass) */`}
            </pre>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Debugging Techniques</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comment out problematic code</li>
              <li>Add visual debugging helpers</li>
              <li>Document browser-specific issues</li>
              <li>Mark performance considerations</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 p-4 bg-pink-50 rounded-lg">
        <h2 className="text-xl font-semibold text-pink-800 mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-pink-600 space-y-2">
          <li>Keep comments up-to-date with code changes</li>
          <li>Remove commented-out code before deployment</li>
          <li>Use meaningful and descriptive comments</li>
          <li>Follow team or project commenting conventions</li>
          <li>Document complex responsive layouts</li>
          <li>Include references to relevant documentation</li>
        </ul>
      </div>

      <ChapterNavigation />
    </motion.div>
  );
};

export default Comments; 