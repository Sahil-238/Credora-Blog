import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RWDFrameworks = () => {
  const bootstrapExample = `
<!-- Bootstrap Grid Example -->
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Content for small (12 cols), medium (6 cols), and large (4 cols) -->
    </div>
  </div>
</div>

<!-- Bootstrap Components -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>`;

  const tailwindExample = `
<!-- Tailwind Responsive Classes -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on tablet, third on desktop -->
</div>

<!-- Tailwind Component -->
<nav class="bg-white shadow-lg">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="flex space-x-7">
        <!-- Mobile menu button -->
        <button class="md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>`;

  return (
    <div className="course-content">
      <h1>CSS Frameworks for Responsive Design</h1>
      
      <section>
        <h2>What are CSS Frameworks?</h2>
        <p>
          CSS frameworks are pre-written, standardized CSS files that help developers quickly build responsive websites.
          They provide a collection of ready-to-use components, utilities, and grid systems that follow responsive design principles.
        </p>
      </section>

      <section>
        <h2>Popular CSS Frameworks</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Bootstrap</h3>
          <p>The most popular CSS framework with extensive components and utilities.</p>
          <SyntaxHighlighter language="html" style={docco}>
            {bootstrapExample}
          </SyntaxHighlighter>
          <ul>
            <li>12-column grid system</li>
            <li>Extensive component library</li>
            <li>Built-in responsive utilities</li>
            <li>JavaScript components included</li>
            <li>Large community and resources</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Tailwind CSS</h3>
          <p>A utility-first CSS framework for highly customizable designs.</p>
          <SyntaxHighlighter language="html" style={docco}>
            {tailwindExample}
          </SyntaxHighlighter>
          <ul>
            <li>Utility-first approach</li>
            <li>Highly customizable</li>
            <li>Modern responsive design patterns</li>
            <li>Smaller bundle size potential</li>
            <li>Growing ecosystem</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>3. Other Popular Frameworks</h3>
          <ul>
            <li>Foundation - Enterprise-grade framework</li>
            <li>Bulma - Modern CSS framework based on Flexbox</li>
            <li>Material UI - Google's Material Design implementation</li>
            <li>Chakra UI - Modern component library with accessibility</li>
            <li>Semantic UI - Human-friendly HTML</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Key Features of CSS Frameworks</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Grid Systems</h3>
          <ul>
            <li>Responsive grid layouts</li>
            <li>Flexbox/Grid based systems</li>
            <li>Column-based organization</li>
            <li>Breakpoint configurations</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Components</h3>
          <ul>
            <li>Navigation bars</li>
            <li>Cards and containers</li>
            <li>Form elements</li>
            <li>Modals and popups</li>
            <li>Responsive tables</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>3. Utilities</h3>
          <ul>
            <li>Spacing helpers</li>
            <li>Typography classes</li>
            <li>Flexbox utilities</li>
            <li>Color systems</li>
            <li>Responsive helpers</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Advantages of Using Frameworks</h2>
        <ul>
          <li>Rapid development and prototyping</li>
          <li>Consistent responsive behavior</li>
          <li>Cross-browser compatibility</li>
          <li>Well-tested components</li>
          <li>Community support and resources</li>
          <li>Built-in accessibility features</li>
        </ul>
      </section>

      <section>
        <h2>Considerations and Best Practices</h2>
        <ul>
          <li>Choose frameworks based on project needs</li>
          <li>Consider bundle size and performance</li>
          <li>Customize to match design requirements</li>
          <li>Keep up with framework updates</li>
          <li>Understand the underlying principles</li>
          <li>Don't over-rely on framework defaults</li>
        </ul>
      </section>

      <section>
        <h2>Framework Selection Criteria</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>1. Project Requirements</h3>
          <ul>
            <li>Project size and complexity</li>
            <li>Design flexibility needs</li>
            <li>Performance requirements</li>
            <li>Browser support requirements</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Development Considerations</h3>
          <ul>
            <li>Learning curve</li>
            <li>Documentation quality</li>
            <li>Community support</li>
            <li>Long-term maintenance</li>
          </ul>
        </div>

        <div>
          <h3>3. Technical Factors</h3>
          <ul>
            <li>Bundle size</li>
            <li>Customization options</li>
            <li>Build tool integration</li>
            <li>Framework maturity</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Tools and Resources</h2>
        <ul>
          <li>Framework documentation</li>
          <li>Component libraries and extensions</li>
          <li>Design systems</li>
          <li>Framework-specific dev tools</li>
          <li>Community templates and themes</li>
          <li>Online tutorials and courses</li>
        </ul>
      </section>
    </div>
  );
};

export default RWDFrameworks; 