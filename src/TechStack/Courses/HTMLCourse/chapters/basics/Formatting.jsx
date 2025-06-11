import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Formatting.css';

const Formatting = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Formatting</h1>
      
      <section className="lesson-section">
        <h2>What is HTML Formatting?</h2>
        <p>
          HTML formatting elements are designed to display special types of text. They help in making text bold,
          italic, underlined, or marked in different ways to emphasize its importance.
        </p>
        <div className="info-box">
          <h3>Common Formatting Elements</h3>
          <CodeBlock
            code={`<b>Bold text</b>
<i>Italic text</i>
<u>Underlined text</u>
<strong>Important text</strong>
<em>Emphasized text</em>
<mark>Marked text</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript text</sub>
<sup>Superscript text</sup>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Text Formatting Elements</h2>
        <div className="formatting-grid">
          <div className="format-item">
            <h3>Bold & Strong</h3>
            <p>
              &lt;b&gt; and &lt;strong&gt; are used for bold text, but &lt;strong&gt; indicates strong importance.
            </p>
            <CodeBlock
              code={`<b>This is bold text</b>
<strong>This is strong text</strong>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Italic & Emphasis</h3>
            <p>
              &lt;i&gt; and &lt;em&gt; are used for italic text, but &lt;em&gt; indicates emphasized text.
            </p>
            <CodeBlock
              code={`<i>This is italic text</i>
<em>This is emphasized text</em>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Marked Text</h3>
            <p>
              &lt;mark&gt; is used to highlight text.
            </p>
            <CodeBlock
              code={`<p>Do not forget to buy <mark>milk</mark> today.</p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Text Modifications</h2>
        <div className="formatting-grid">
          <div className="format-item">
            <h3>Deleted & Inserted</h3>
            <p>
              &lt;del&gt; and &lt;ins&gt; are used to show deleted and inserted text.
            </p>
            <CodeBlock
              code={`<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Subscript & Superscript</h3>
            <p>
              &lt;sub&gt; and &lt;sup&gt; are used for subscript and superscript text.
            </p>
            <CodeBlock
              code={`<p>H<sub>2</sub>O</p>
<p>X<sup>2</sup> + Y<sup>2</sup></p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Small Text</h3>
            <p>
              &lt;small&gt; is used for smaller text.
            </p>
            <CodeBlock
              code={`<p>This is normal text <small>and this is small text</small></p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Semantic Meaning</h3>
            <p>Use &lt;strong&gt; and &lt;em&gt; for semantic meaning</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Ensure formatting enhances readability</p>
          </div>
          <div className="practice-item">
            <h3>Consistency</h3>
            <p>Maintain consistent formatting throughout</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/styles" className="prev-button">
          ← Previous: HTML Styles
        </Link>
        <Link to="/html-course/comments" className="next-button">
          Next: HTML Comments →
        </Link>
      </div>
    </div>
  );
};

export default Formatting; 