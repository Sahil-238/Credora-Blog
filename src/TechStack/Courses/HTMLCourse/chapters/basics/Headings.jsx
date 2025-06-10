import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Headings.css';

const Headings = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Headings</h1>
      
      <section className="lesson-section">
        <h2>What are HTML Headings?</h2>
        <p>
          HTML headings are titles or subtitles that you want to display on your webpage. They are defined with the
          &lt;h1&gt; to &lt;h6&gt; tags, where &lt;h1&gt; defines the most important heading and &lt;h6&gt; defines
          the least important heading.
        </p>
        <div className="info-box">
          <h3>Heading Levels</h3>
          <CodeBlock
            code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Heading Hierarchy</h2>
        <p>
          Headings should be used in a hierarchical manner, with &lt;h1&gt; being the main title of the page,
          followed by &lt;h2&gt; for major sections, and so on.
        </p>
        <div className="example-box">
          <h3>Example Structure:</h3>
          <CodeBlock
            code={`<h1>Main Title</h1>
<h2>Section 1</h2>
<h3>Subsection 1.1</h3>
<h3>Subsection 1.2</h3>
<h2>Section 2</h2>
<h3>Subsection 2.1</h3>
<h4>Sub-subsection 2.1.1</h4>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>One H1 per Page</h3>
            <p>Use only one &lt;h1&gt; element per page for the main title</p>
          </div>
          <div className="practice-item">
            <h3>Proper Order</h3>
            <p>Don't skip heading levels (e.g., h1 to h3)</p>
          </div>
          <div className="practice-item">
            <h3>Semantic Meaning</h3>
            <p>Use headings for structure, not for styling</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Styling Headings</h2>
        <p>
          While HTML headings have default styling, you can customize their appearance using CSS.
        </p>
        <div className="styling-examples">
          <div className="style-example">
            <h3>Basic Styling</h3>
            <CodeBlock
              code={`h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}`}
              language="css"
            />
          </div>
          <div className="style-example">
            <h3>Custom Font</h3>
            <CodeBlock
              code={`h2 {
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  line-height: 1.2;
}`}
              language="css"
            />
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/attributes" className="prev-button">
          ← Previous: HTML Attributes
        </Link>
        <Link to="/html-course/paragraphs" className="next-button">
          Next: HTML Paragraphs →
        </Link>
      </div>
    </div>
  );
};

export default Headings; 