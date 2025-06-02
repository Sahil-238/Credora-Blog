import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RWDIntro = () => {
  const viewportExample = `
<!-- Viewport meta tag for responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Basic responsive design rules */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Responsive text */
body {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
}`;

  return (
    <div className="course-content">
      <h1>Introduction to Responsive Web Design</h1>
      
      <section>
        <h2>What is Responsive Web Design?</h2>
        <p>
          Responsive Web Design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
          It's about creating websites that work seamlessly across desktop computers, tablets, and mobile phones.
        </p>
      </section>

      <section>
        <h2>Key Principles of RWD</h2>
        <ul>
          <li>
            <strong>Fluid Grids:</strong> Using relative width values instead of fixed pixel widths
          </li>
          <li>
            <strong>Flexible Images:</strong> Images that scale within their containing elements
          </li>
          <li>
            <strong>Media Queries:</strong> CSS rules that apply different styles for different screen sizes
          </li>
          <li>
            <strong>Mobile-First Approach:</strong> Designing for mobile devices first, then enhancing for larger screens
          </li>
        </ul>
      </section>

      <section>
        <h2>Basic Setup</h2>
        <p>
          Here's a basic example of responsive design setup including viewport meta tag and some responsive CSS rules:
        </p>
        <SyntaxHighlighter language="html" style={docco}>
          {viewportExample}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>Common Breakpoints</h2>
        <div className="breakpoints-table">
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Device</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Width</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Common Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Mobile</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>320px - 480px</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Small screen mobile devices</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Tablet</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>481px - 768px</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>iPads, tablets</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Laptop</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>769px - 1024px</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Small screens, laptops</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Desktop</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>1025px - 1200px</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Desktops, large screens</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Extra Large</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>1201px and above</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Extra large screens, TV</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Benefits of Responsive Design</h2>
        <ul>
          <li>Better user experience across all devices</li>
          <li>Improved SEO performance</li>
          <li>Easier maintenance (one codebase for all devices)</li>
          <li>Future-proof for new device sizes</li>
          <li>Cost-effective compared to maintaining separate mobile sites</li>
        </ul>
      </section>

      <section>
        <h2>Best Practices</h2>
        <ul>
          <li>Always include the viewport meta tag</li>
          <li>Use relative units (%, em, rem) instead of fixed pixels</li>
          <li>Test on real devices when possible</li>
          <li>Consider touch targets on mobile devices</li>
          <li>Optimize images for different screen sizes</li>
          <li>Keep performance in mind for mobile users</li>
        </ul>
      </section>
    </div>
  );
};

export default RWDIntro; 