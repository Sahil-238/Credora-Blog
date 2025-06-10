import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Styles.css';

const Styles = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Styles</h1>
      
      <section className="lesson-section">
        <h2>What are HTML Styles?</h2>
        <p>
          HTML styles are used to control the appearance of HTML elements. There are three ways to add styles to your
          HTML document: inline styles, internal stylesheets, and external stylesheets.
        </p>
        <div className="info-box">
          <h3>Style Methods</h3>
          <CodeBlock
            code={`<!-- Inline Style -->
<p style="color: blue; font-size: 16px;">Blue text</p>

<!-- Internal Style -->
<style>
  p { color: blue; }
</style>

<!-- External Style -->
<link rel="stylesheet" href="styles.css">`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Inline Styles</h2>
        <p>
          Inline styles are applied directly to HTML elements using the style attribute. They have the highest
          specificity but are not recommended for large-scale styling.
        </p>
        <div className="style-examples">
          <div className="style-example">
            <h3>Text Styling</h3>
            <CodeBlock
              code={`<p style="color: red; font-size: 20px; font-weight: bold;">
  Red, bold text
</p>`}
              language="html"
            />
          </div>

          <div className="style-example">
            <h3>Background & Border</h3>
            <CodeBlock
              code={`<div style="background-color: #f0f0f0; 
     border: 1px solid #ccc; 
     padding: 10px;">
  Styled div
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Internal Stylesheets</h2>
        <p>
          Internal stylesheets are defined within the &lt;style&gt; tag in the HTML document's &lt;head&gt; section.
          They are useful for single-page applications or when you want to keep styles specific to one page.
        </p>
        <div className="style-examples">
          <div className="style-example">
            <h3>Basic Internal Style</h3>
            <CodeBlock
              code={`<head>
  <style>
    p {
      color: blue;
      font-size: 16px;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>External Stylesheets</h2>
        <p>
          External stylesheets are the most common and recommended way to add styles to your HTML documents. They are
          defined in separate .css files and linked to your HTML document.
        </p>
        <div className="style-examples">
          <div className="style-example">
            <h3>Linking External CSS</h3>
            <CodeBlock
              code={`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
              language="html"
            />
          </div>

          <div className="style-example">
            <h3>Example CSS File</h3>
            <CodeBlock
              code={`/* styles.css */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
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
            <p>Keep styles in separate files for better maintenance</p>
          </div>
          <div className="practice-item">
            <h3>Avoid Inline Styles</h3>
            <p>Use inline styles only for dynamic styling</p>
          </div>
          <div className="practice-item">
            <h3>Organize CSS</h3>
            <p>Group related styles and use comments for clarity</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/paragraphs" className="prev-button">
          ← Previous: HTML Paragraphs
        </Link>
        <Link to="/html-course/formatting" className="next-button">
          Next: HTML Formatting →
        </Link>
      </div>
    </div>
  );
};

export default Styles; 