import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './TextFormatting.css';

const TextFormatting = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Text Formatting</h1>
      
      <section className="lesson-section">
        <h2>Text Formatting Elements</h2>
        <p>
          HTML provides several elements for formatting text. These elements are used to make text bold, italic, underlined, and more.
        </p>
        
        <div className="formatting-examples">
          <div className="format-item">
            <h3>Bold Text</h3>
            <p>Use &lt;b&gt; or &lt;strong&gt; for bold text:</p>
            <CodeBlock
              code={`<p>This is <b>bold</b> text using &lt;b&gt; tag.</p>
<p>This is <strong>important</strong> text using &lt;strong&gt; tag.</p>`}
              language="html"
            />
            <div className="note">
              <strong>Note:</strong> &lt;strong&gt; is preferred as it indicates importance, while &lt;b&gt; is purely visual.
            </div>
          </div>

          <div className="format-item">
            <h3>Italic Text</h3>
            <p>Use &lt;i&gt; or &lt;em&gt; for italic text:</p>
            <CodeBlock
              code={`<p>This is <i>italic</i> text using &lt;i&gt; tag.</p>
<p>This is <em>emphasized</em> text using &lt;em&gt; tag.</p>`}
              language="html"
            />
            <div className="note">
              <strong>Note:</strong> &lt;em&gt; is preferred as it indicates emphasis, while &lt;i&gt; is purely visual.
            </div>
          </div>

          <div className="format-item">
            <h3>Underlined Text</h3>
            <p>Use &lt;u&gt; for underlined text:</p>
            <CodeBlock
              code={`<p>This is <u>underlined</u> text.</p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Marked Text</h3>
            <p>Use &lt;mark&gt; to highlight text:</p>
            <CodeBlock
              code={`<p>This is <mark>highlighted</mark> text.</p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Text Modifications</h2>
        <div className="formatting-examples">
          <div className="format-item">
            <h3>Deleted Text</h3>
            <p>Use &lt;del&gt; or &lt;s&gt; for deleted text:</p>
            <CodeBlock
              code={`<p>This is <del>deleted</del> text.</p>
<p>This is <s>strikethrough</s> text.</p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Inserted Text</h3>
            <p>Use &lt;ins&gt; for inserted text:</p>
            <CodeBlock
              code={`<p>This is <ins>inserted</ins> text.</p>`}
              language="html"
            />
          </div>

          <div className="format-item">
            <h3>Subscript and Superscript</h3>
            <p>Use &lt;sub&gt; and &lt;sup&gt; for subscript and superscript:</p>
            <CodeBlock
              code={`<p>H<sub>2</sub>O is water.</p>
<p>E = mc<sup>2</sup> is Einstein's equation.</p>`}
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
            <p>Use semantic elements (&lt;strong&gt;, &lt;em&gt;) over presentational elements (&lt;b&gt;, &lt;i&gt;) when possible.</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Ensure text remains readable and accessible when using formatting elements.</p>
          </div>
          <div className="practice-item">
            <h3>Consistency</h3>
            <p>Maintain consistent formatting throughout your document.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/formatting" className="prev-button">
          Previous: Formatting
        </Link>
        <Link to="/html-course/quotation" className="next-button">
          Next: Quotation
        </Link>
      </div>
    </div>
  );
};

export default TextFormatting; 