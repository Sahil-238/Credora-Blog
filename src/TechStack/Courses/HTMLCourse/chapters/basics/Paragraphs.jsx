import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Paragraphs.css';

const Paragraphs = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Paragraphs</h1>
      
      <section className="lesson-section">
        <h2>What are HTML Paragraphs?</h2>
        <p>
          HTML paragraphs are defined with the &lt;p&gt; tag. A paragraph always starts on a new line, and browsers
          automatically add some margin before and after a paragraph.
        </p>
        <div className="info-box">
          <h3>Basic Structure</h3>
          <CodeBlock
            code={`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Paragraph Formatting</h2>
        <div className="formatting-examples">
          <div className="format-example">
            <h3>Line Breaks</h3>
            <p>Use &lt;br&gt; for line breaks within a paragraph:</p>
            <CodeBlock
              code={`<p>This is the first line.<br>
This is the second line.</p>`}
              language="html"
            />
          </div>

          <div className="format-example">
            <h3>Horizontal Rule</h3>
            <p>Use &lt;hr&gt; to create a thematic break:</p>
            <CodeBlock
              code={`<p>First paragraph</p>
<hr>
<p>Second paragraph</p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Text Formatting within Paragraphs</h2>
        <div className="text-formatting">
          <div className="format-item">
            <h3>Bold Text</h3>
            <CodeBlock
              code={`<p>This is <strong>bold</strong> text.</p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Italic Text</h3>
            <CodeBlock
              code={`<p>This is <em>italic</em> text.</p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Underlined Text</h3>
            <CodeBlock
              code={`<p>This is <u>underlined</u> text.</p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Semantic Structure</h3>
            <p>Use paragraphs for text content, not for layout</p>
          </div>
          <div className="practice-item">
            <h3>Proper Spacing</h3>
            <p>Let CSS handle spacing between paragraphs</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Keep paragraphs concise and well-structured</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/headings" className="prev-button">
          ← Previous: HTML Headings
        </Link>
        <Link to="/html-course/styles" className="next-button">
          Next: HTML Styles →
        </Link>
      </div>
    </div>
  );
};

export default Paragraphs; 