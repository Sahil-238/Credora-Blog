import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RWDMediaQueries = () => {
  const mediaQueryExamples = `
/* Basic Media Query Syntax */
@media screen and (max-width: 768px) {
  /* Styles for screens smaller than 768px */
}

/* Multiple Conditions */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablets and small laptops */
}

/* Orientation */
@media screen and (orientation: landscape) {
  /* Styles for landscape mode */
}

/* Print Media */
@media print {
  /* Styles for printing */
}

/* Example Usage */
.container {
  width: 80%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}

/* Mobile-First Approach */
.card {
  width: 100%;          /* Mobile default */
  padding: 15px;
}

@media screen and (min-width: 768px) {
  .card {
    width: 50%;        /* Tablet */
  }
}

@media screen and (min-width: 1024px) {
  .card {
    width: 33.33%;    /* Desktop */
  }
}`;

  return (
    <div className="course-content">
      <h1>CSS Media Queries</h1>
      
      <section>
        <h2>What are Media Queries?</h2>
        <p>
          Media queries are a key component of responsive web design that allow you to apply CSS styles based on device characteristics,
          such as screen width, height, orientation, or resolution. They enable you to create different layouts for different devices
          and screen sizes without changing the content.
        </p>
      </section>

      <section>
        <h2>Media Query Syntax</h2>
        <p>
          Here are various examples of media queries and their common use cases:
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {mediaQueryExamples}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Common Media Features</h2>
        <div className="features-table" style={{ marginTop: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Feature</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Description</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>width</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Viewport width</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>(min-width: 768px)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>height</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Viewport height</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>(min-height: 600px)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>orientation</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Device orientation</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>(orientation: landscape)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>aspect-ratio</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Width-to-height ratio</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>(aspect-ratio: 16/9)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>resolution</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Device resolution</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>(min-resolution: 300dpi)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Mobile-First vs Desktop-First</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Mobile-First Approach</h3>
          <ul>
            <li>Write base styles for mobile devices</li>
            <li>Use min-width queries to progressively enhance for larger screens</li>
            <li>Example: {'@media (min-width: 768px) { ... }'}</li>
            <li>Advantages: Better performance on mobile, progressive enhancement</li>
          </ul>
        </div>
        <div>
          <h3>Desktop-First Approach</h3>
          <ul>
            <li>Write base styles for desktop devices</li>
            <li>Use max-width queries to adapt for smaller screens</li>
            <li>Example: {'@media (max-width: 768px) { ... }'}</li>
            <li>Advantages: Easier when converting existing desktop sites</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Choose between mobile-first or desktop-first and stick to it</li>
          <li>Use relative units (em, rem) in media queries when appropriate</li>
          <li>Keep breakpoints consistent throughout your CSS</li>
          <li>Test on real devices when possible</li>
          <li>Don't base breakpoints on specific devices</li>
          <li>Group media queries for better maintainability</li>
          <li>Consider using CSS custom properties for breakpoint values</li>
        </ul>
      </section>

      <section>
        <h2>Common Breakpoint Patterns</h2>
        <div style={{ marginTop: '20px' }}>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '4px',
            overflow: 'auto'
          }}>
{`// Extra small devices (phones)
@media (max-width: 575.98px) { ... }

// Small devices (tablets)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (small laptops)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Large devices (desktops)
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

// Extra large devices
@media (min-width: 1200px) { ... }`}
          </pre>
        </div>
      </section>

      <section>
        <h2>Testing Media Queries</h2>
        <ul>
          <li>Use browser developer tools to simulate different screen sizes</li>
          <li>Test on actual devices when possible</li>
          <li>Consider using CSS @supports for feature detection</li>
          <li>Test print styles using print preview</li>
          <li>Verify styles at various zoom levels</li>
        </ul>
      </section>
    </div>
  );
};

export default RWDMediaQueries; 