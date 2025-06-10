import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Comments.css';

const Comments = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Comments</h1>
      
      <section className="lesson-section">
        <h2>Introduction to Comments</h2>
        <p>
          HTML comments are used to add notes or explanations to your code. They are not displayed in the browser but are visible in the source code.
        </p>
        
        <div className="comment-example">
          <CodeBlock
            code={`<!-- This is a comment in HTML -->
<p>This is a paragraph.</p>
<!-- Comments can be used to explain code -->`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Types of Comments</h2>
        
        <div className="comment-types">
          <div className="comment-type">
            <h3>Single-line Comments</h3>
            <CodeBlock
              code={`<!-- This is a single-line comment -->`}
              language="html"
            />
          </div>
          
          <div className="comment-type">
            <h3>Multi-line Comments</h3>
            <CodeBlock
              code={`<!-- 
  This is a multi-line comment.
  It can span multiple lines.
  Useful for longer explanations.
-->`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Common Uses of Comments</h2>
        <div className="uses-list">
          <div className="use-item">
            <h3>Code Organization</h3>
            <CodeBlock
              code={`<!-- Header Section -->
<header>
  <!-- Navigation -->
  <nav>...</nav>
  <!-- Logo -->
  <div class="logo">...</div>
</header>`}
              language="html"
            />
          </div>
          
          <div className="use-item">
            <h3>Temporary Code</h3>
            <CodeBlock
              code={`<!-- Temporarily disabled feature
<div class="feature">
  <p>This feature is under maintenance</p>
</div>
-->`}
              language="html"
            />
          </div>
          
          <div className="use-item">
            <h3>Debugging</h3>
            <CodeBlock
              code={`<!-- Debug: Check if this section is rendering -->
<div class="debug-section">
  <p>Debug content</p>
</div>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Be Clear and Concise</h3>
            <p>Write comments that are easy to understand and provide value to the code.</p>
          </div>
          <div className="practice-item">
            <h3>Keep Comments Updated</h3>
            <p>Update comments when you modify the code to maintain accuracy.</p>
          </div>
          <div className="practice-item">
            <h3>Use Comments Wisely</h3>
            <p>Don't over-comment obvious code, but do comment complex logic or important sections.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/quotation" className="prev-button">
          Previous: Quotation
        </Link>
        <Link to="/html-course/colors" className="next-button">
          Next: Colors
        </Link>
      </div>
    </div>
  );
};

export default Comments; 