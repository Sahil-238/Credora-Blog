import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Elements.css';

const Elements = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Elements</h1>
      
      <section className="lesson-section">
        <h2>What are HTML Elements?</h2>
        <p>
          HTML elements are the building blocks of HTML pages. They consist of a start tag, 
          some content, and an end tag. Elements can also have attributes that provide 
          additional information about the element.
        </p>
        <div className="info-box">
          <h3>Basic Structure</h3>
          <CodeBlock
            code={`<tagname>Content goes here...</tagname>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Types of Elements</h2>
        <div className="elements-grid">
          <div className="element-card">
            <h3>Container Elements</h3>
            <p>Elements that can contain other elements:</p>
            <ul>
              <li>&lt;div&gt; - Division</li>
              <li>&lt;section&gt; - Section</li>
              <li>&lt;article&gt; - Article</li>
              <li>&lt;main&gt; - Main content</li>
            </ul>
          </div>

          <div className="element-card">
            <h3>Text Elements</h3>
            <p>Elements for text content:</p>
            <ul>
              <li>&lt;p&gt; - Paragraph</li>
              <li>&lt;h1&gt; to &lt;h6&gt; - Headings</li>
              <li>&lt;span&gt; - Inline text</li>
              <li>&lt;strong&gt; - Important text</li>
            </ul>
          </div>

          <div className="element-card">
            <h3>List Elements</h3>
            <p>Elements for creating lists:</p>
            <ul>
              <li>&lt;ul&gt; - Unordered list</li>
              <li>&lt;ol&gt; - Ordered list</li>
              <li>&lt;li&gt; - List item</li>
              <li>&lt;dl&gt; - Description list</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Empty Elements</h2>
        <p>
          Some HTML elements don't have content and don't need a closing tag. These are called empty elements.
        </p>
        <div className="empty-elements">
          <div className="empty-element">
            <h3>Image</h3>
            <CodeBlock
              code={`<img src="image.jpg" alt="Description">`}
              language="html"
            />
          </div>
          <div className="empty-element">
            <h3>Line Break</h3>
            <CodeBlock
              code={`<br>`}
              language="html"
            />
          </div>
          <div className="empty-element">
            <h3>Horizontal Rule</h3>
            <CodeBlock
              code={`<hr>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Nested Elements</h2>
        <p>
          HTML elements can be nested inside other elements. This creates a parent-child relationship.
        </p>
        <div className="example-box">
          <h3>Example:</h3>
          <CodeBlock
            code={`<div>
    <h1>Main Heading</h1>
    <p>This is a <strong>paragraph</strong> with <em>emphasized</em> text.</p>
    <ul>
        <li>First item</li>
        <li>Second item</li>
    </ul>
</div>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Proper Nesting</h3>
            <p>Always close elements in the correct order</p>
          </div>
          <div className="practice-item">
            <h3>Semantic Elements</h3>
            <p>Use elements that describe their content</p>
          </div>
          <div className="practice-item">
            <h3>Clean Structure</h3>
            <p>Keep your HTML well-organized and readable</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/basic" className="prev-button">
          ← Previous: Basic Structure
        </Link>
        <Link to="/html-course/attributes" className="next-button">
          Next: HTML Attributes →
        </Link>
      </div>
    </div>
  );
};

export default Elements; 