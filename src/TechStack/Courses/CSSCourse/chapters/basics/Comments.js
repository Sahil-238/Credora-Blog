import React from 'react';
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
    <div className="course-content">
      <h1>CSS Comments</h1>
      
      <section>
        <h2>Introduction to CSS Comments</h2>
        <p>
          CSS comments are non-executing annotations in your stylesheets that help document your code,
          explain complex logic, and facilitate collaboration among developers. They are essential for
          maintaining clean, understandable, and maintainable CSS code.
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {basicCommentsExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Types of CSS Comments</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Single-line Comments</h3>
          <ul>
            <li>Used for brief explanations</li>
            <li>Typically placed above the code they describe</li>
            <li>Good for quick notes and simple documentation</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Multi-line Comments</h3>
          <ul>
            <li>Used for detailed explanations</li>
            <li>Perfect for documentation blocks</li>
            <li>Can contain formatted text and lists</li>
            <li>Useful for temporarily disabling large blocks of CSS</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Documentation Best Practices</h2>
        <p>
          Well-structured comments help maintain code quality and improve team collaboration.
          Here's an example of comprehensive documentation:
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {documentationExample}
        </SyntaxHighlighter>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Documentation Guidelines</h3>
          <ul>
            <li>Use consistent comment formatting</li>
            <li>Include component/section headers</li>
            <li>Document complex selectors and calculations</li>
            <li>Explain browser-specific code</li>
            <li>Add context to magic numbers</li>
            <li>Reference related components or dependencies</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Comment Categories</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Task-based Comments</h3>
          <ul>
            <li>TODO: Mark tasks for future implementation</li>
            <li>FIXME: Highlight code that needs repair</li>
            <li>NOTE: Add important information or context</li>
            <li>HACK: Indicate temporary solutions</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Structural Comments</h3>
          <ul>
            <li>Section dividers</li>
            <li>Component boundaries</li>
            <li>File organization</li>
            <li>Import/dependency notes</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Debugging with Comments</h2>
        <p>
          Comments can be valuable tools during development and debugging:
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {debuggingExample}
        </SyntaxHighlighter>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Debugging Techniques</h3>
          <ul>
            <li>Comment out problematic code</li>
            <li>Add visual debugging helpers</li>
            <li>Document browser-specific issues</li>
            <li>Mark performance considerations</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Keep comments up-to-date with code changes</li>
          <li>Remove commented-out code before deployment</li>
          <li>Use meaningful and descriptive comments</li>
          <li>Follow team or project commenting conventions</li>
          <li>Document complex responsive layouts</li>
          <li>Include references to relevant documentation</li>
        </ul>
      </section>

      <section>
        <h2>Common Pitfalls</h2>
        <ul>
          <li>Over-commenting obvious code</li>
          <li>Outdated or incorrect comments</li>
          <li>Comments that contradict the code</li>
          <li>Leaving debugging comments in production</li>
          <li>Poor formatting that reduces readability</li>
          <li>Missing documentation for complex features</li>
        </ul>
      </section>

      <section>
        <h2>Tools and Resources</h2>
        <ul>
          <li>CSS documentation generators</li>
          <li>Style guide enforcers</li>
          <li>Comment formatting tools</li>
          <li>IDE plugins for better commenting</li>
          <li>Team documentation templates</li>
          <li>CSS commenting conventions guides</li>
        </ul>
      </section>
    </div>
  );
};

export default Comments; 