import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Attributes.css';

const Attributes = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Attributes</h1>
      
      <section className="lesson-section">
        <h2>What are HTML Attributes?</h2>
        <p>
          HTML attributes provide additional information about HTML elements. They are always specified in the start tag
          and usually come in name/value pairs like: name="value".
        </p>
        <div className="info-box">
          <h3>Basic Structure</h3>
          <CodeBlock
            code={`<tagname attribute="value">Content goes here...</tagname>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Common Attributes</h2>
        <div className="attributes-grid">
          <div className="attribute-card">
            <h3>href</h3>
            <p>Specifies the URL of the page the link goes to</p>
            <CodeBlock
              code={`<a href="https://www.example.com">Visit Example</a>`}
              language="html"
            />
          </div>

          <div className="attribute-card">
            <h3>src</h3>
            <p>Specifies the source URL for images</p>
            <CodeBlock
              code={`<img src="image.jpg" alt="Description">`}
              language="html"
            />
          </div>

          <div className="attribute-card">
            <h3>alt</h3>
            <p>Provides alternative text for images</p>
            <CodeBlock
              code={`<img src="image.jpg" alt="A beautiful sunset">`}
              language="html"
            />
          </div>

          <div className="attribute-card">
            <h3>class</h3>
            <p>Specifies one or more class names for an element</p>
            <CodeBlock
              code={`<div class="container">Content</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Global Attributes</h2>
        <p>
          Global attributes are attributes that can be used on any HTML element. Here are some of the most common ones:
        </p>
        <div className="global-attributes">
          <div className="attribute-item">
            <h3>id</h3>
            <p>Specifies a unique id for an element</p>
            <CodeBlock
              code={`<div id="unique-element">Content</div>`}
              language="html"
            />
          </div>

          <div className="attribute-item">
            <h3>style</h3>
            <p>Specifies inline CSS styles</p>
            <CodeBlock
              code={`<p style="color: blue; font-size: 16px;">Styled text</p>`}
              language="html"
            />
          </div>

          <div className="attribute-item">
            <h3>title</h3>
            <p>Provides additional information about an element</p>
            <CodeBlock
              code={`<p title="This is a tooltip">Hover over me</p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Use Meaningful Names</h3>
            <p>Choose descriptive names for classes and IDs</p>
          </div>
          <div className="practice-item">
            <h3>Quote Values</h3>
            <p>Always use quotes around attribute values</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Include alt text for images and proper ARIA attributes</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/elements" className="prev-button">
          ← Previous: HTML Elements
        </Link>
        <Link to="/html-course/headings" className="next-button">
          Next: HTML Headings →
        </Link>
      </div>
    </div>
  );
};

export default Attributes; 