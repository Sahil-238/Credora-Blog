import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './CSS.css';

const CSS = () => {
  return (
    <div className="lesson-container">
      <h1>CSS in HTML</h1>
      
      <section className="lesson-section">
        <h2>Introduction to CSS</h2>
        <p>
          CSS (Cascading Style Sheets) is used to style and layout web pages. There are three ways to include CSS in HTML:
        </p>
        
        <div className="css-methods">
          <div className="css-method">
            <h3>Inline CSS</h3>
            <CodeBlock
              code={`<p style="color: blue; font-size: 16px;">
  This is a paragraph with inline styles.
</p>`}
              language="html"
            />
          </div>
          
          <div className="css-method">
            <h3>Internal CSS</h3>
            <CodeBlock
              code={`<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
  </style>
</head>`}
              language="html"
            />
          </div>
          
          <div className="css-method">
            <h3>External CSS</h3>
            <CodeBlock
              code={`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>CSS Selectors</h2>
        <p>
          CSS selectors are used to select and style HTML elements.
        </p>
        
        <div className="selector-examples">
          <div className="selector-example">
            <h3>Element Selector</h3>
            <CodeBlock
              code={`p {
  color: blue;
}`}
              language="css"
            />
          </div>
          
          <div className="selector-example">
            <h3>Class Selector</h3>
            <CodeBlock
              code={`.highlight {
  background-color: yellow;
}`}
              language="css"
            />
          </div>
          
          <div className="selector-example">
            <h3>ID Selector</h3>
            <CodeBlock
              code={`#header {
  font-size: 24px;
}`}
              language="css"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Common CSS Properties</h2>
        <div className="properties-list">
          <div className="property-item">
            <h3>Text Properties</h3>
            <CodeBlock
              code={`p {
  color: blue;
  font-size: 16px;
  font-family: Arial, sans-serif;
  text-align: center;
  line-height: 1.5;
}`}
              language="css"
            />
          </div>
          
          <div className="property-item">
            <h3>Box Model</h3>
            <CodeBlock
              code={`div {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
  width: 200px;
  height: 100px;
}`}
              language="css"
            />
          </div>
          
          <div className="property-item">
            <h3>Background</h3>
            <CodeBlock
              code={`body {
  background-color: #f0f0f0;
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-position: center;
}`}
              language="css"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Use External CSS</h3>
            <p>Keep styles in separate CSS files for better organization and maintainability.</p>
          </div>
          <div className="practice-item">
            <h3>Follow Naming Conventions</h3>
            <p>Use consistent and meaningful names for classes and IDs.</p>
          </div>
          <div className="practice-item">
            <h3>Optimize Selectors</h3>
            <p>Use specific selectors and avoid over-qualifying them.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/colors" className="prev-button">
          Previous: Colors
        </Link>
        <Link to="/html-course/links" className="next-button">
          Next: Links
        </Link>
      </div>
    </div>
  );
};

export default CSS; 