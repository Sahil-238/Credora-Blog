import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Lists.css';

const Lists = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Lists</h1>
      
      <section className="lesson-section">
        <h2>Types of Lists</h2>
        <p>
          HTML provides three types of lists: unordered lists, ordered lists, and description lists. Each type serves a specific purpose.
        </p>
        
        <div className="list-types">
          <div className="list-type">
            <h3>Unordered Lists</h3>
            <p>Used for items that don't require a specific order.</p>
            <CodeBlock
              code={`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}
              language="html"
            />
          </div>
          
          <div className="list-type">
            <h3>Ordered Lists</h3>
            <p>Used for items that require a specific sequence.</p>
            <CodeBlock
              code={`<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`}
              language="html"
            />
          </div>
          
          <div className="list-type">
            <h3>Description Lists</h3>
            <p>Used for name-value pairs or terms and descriptions.</p>
            <CodeBlock
              code={`<dl>
  <dt>Term 1</dt>
  <dd>Description 1</dd>
  <dt>Term 2</dt>
  <dd>Description 2</dd>
</dl>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>List Attributes</h2>
        <div className="attributes-list">
          <div className="attribute-item">
            <h3>type (for &lt;ul&gt;)</h3>
            <p>Specifies the bullet style (disc, circle, square).</p>
            <CodeBlock
              code={`<ul type="square">
  <li>Square bullet</li>
</ul>`}
              language="html"
            />
          </div>
          
          <div className="attribute-item">
            <h3>type (for &lt;ol&gt;)</h3>
            <p>Specifies the numbering style (1, A, a, I, i).</p>
            <CodeBlock
              code={`<ol type="A">
  <li>Letter A</li>
</ol>`}
              language="html"
            />
          </div>
          
          <div className="attribute-item">
            <h3>start</h3>
            <p>Specifies the starting number for ordered lists.</p>
            <CodeBlock
              code={`<ol start="5">
  <li>Starts at 5</li>
</ol>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Nested Lists</h2>
        <p>
          Lists can be nested within other lists to create hierarchical structures.
        </p>
        
        <div className="nested-example">
          <CodeBlock
            code={`<ul>
  <li>Main item 1
    <ul>
      <li>Sub-item 1.1</li>
      <li>Sub-item 1.2</li>
    </ul>
  </li>
  <li>Main item 2
    <ol>
      <li>Sub-item 2.1</li>
      <li>Sub-item 2.2</li>
    </ol>
  </li>
</ul>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Semantic Usage</h3>
            <p>Choose the appropriate list type based on the content structure.</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Use proper list elements for better screen reader support.</p>
          </div>
          <div className="practice-item">
            <h3>Styling</h3>
            <p>Use CSS to customize list appearance while maintaining semantic structure.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/tables" className="prev-button">
          Previous: Tables
        </Link>
        <Link to="/html-course/unordered-lists" className="next-button">
          Next: Unordered Lists
        </Link>
      </div>
    </div>
  );
};

export default Lists; 