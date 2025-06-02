import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RWDGridView = () => {
  const gridExample = `
/* Create a responsive grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
}

/* For smaller screens */
@media screen and (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}`;

  return (
    <div className="course-content">
      <h1>Responsive Grid View</h1>
      
      <section>
        <h2>What is a Responsive Grid View?</h2>
        <p>
          A responsive grid view is a layout system that automatically adjusts and reorganizes content based on the screen size.
          It helps create flexible and dynamic layouts that work well across different devices.
        </p>
      </section>

      <section>
        <h2>Creating a Basic Responsive Grid</h2>
        <p>
          Modern CSS provides powerful tools like Grid and Flexbox to create responsive layouts.
          Here's an example of a responsive grid using CSS Grid:
        </p>
        <SyntaxHighlighter language="css" style={docco}>
          {gridExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Live Example</h2>
        <div className="demo-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            padding: '20px'
          }}>
            <div style={{
              backgroundColor: '#f0f0f0',
              padding: '20px',
              borderRadius: '4px'
            }}>
              Grid Item 1
            </div>
            <div style={{
              backgroundColor: '#f0f0f0',
              padding: '20px',
              borderRadius: '4px'
            }}>
              Grid Item 2
            </div>
            <div style={{
              backgroundColor: '#f0f0f0',
              padding: '20px',
              borderRadius: '4px'
            }}>
              Grid Item 3
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Key Features of Responsive Grids</h2>
        <ul>
          <li>Automatically adjusts to screen width</li>
          <li>Maintains consistent spacing between items</li>
          <li>Reflows items based on available space</li>
          <li>Works across different device sizes</li>
          <li>Easy to maintain and modify</li>
        </ul>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Use relative units (fr, %, em) instead of fixed units</li>
          <li>Test layouts across different screen sizes</li>
          <li>Consider content hierarchy when items reflow</li>
          <li>Maintain readable text width on all devices</li>
          <li>Use appropriate gap sizes for visual separation</li>
        </ul>
      </section>
    </div>
  );
};

export default RWDGridView; 