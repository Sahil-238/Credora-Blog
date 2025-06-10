import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Quotation.css';

const Quotation = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Quotations</h1>
      
      <section className="lesson-section">
        <h2>Blockquote Element</h2>
        <p>
          The &lt;blockquote&gt; element is used for longer quotations that are set off from the main text.
        </p>
        
        <div className="quote-example">
          <CodeBlock
            code={`<blockquote cite="https://www.example.com/source">
  <p>This is a blockquote. It is typically used for longer quotations that are set off from the main text.</p>
  <footer>— <cite>Author Name</cite></footer>
</blockquote>`}
            language="html"
          />
          <div className="note">
            <strong>Note:</strong> The cite attribute can be used to specify the source of the quotation.
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Short Quotations</h2>
        <p>
          The &lt;q&gt; element is used for shorter quotations that are part of a sentence.
        </p>
        
        <div className="quote-example">
          <CodeBlock
            code={`<p>As the saying goes, <q cite="https://www.example.com/source">The early bird catches the worm.</q></p>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Abbreviations</h2>
        <p>
          The &lt;abbr&gt; element is used to mark up abbreviations or acronyms.
        </p>
        
        <div className="quote-example">
          <CodeBlock
            code={`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`}
            language="html"
          />
          <div className="note">
            <strong>Note:</strong> The title attribute provides the full form of the abbreviation.
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Address Information</h2>
        <p>
          The &lt;address&gt; element is used to provide contact information.
        </p>
        
        <div className="quote-example">
          <CodeBlock
            code={`<address>
  Written by <a href="mailto:webmaster@example.com">John Doe</a>.<br>
  Visit us at:<br>
  Example.com<br>
  Box 564, Disneyland<br>
  USA
</address>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Proper Attribution</h3>
            <p>Always provide proper attribution for quotations using the cite attribute.</p>
          </div>
          <div className="practice-item">
            <h3>Semantic Usage</h3>
            <p>Use the appropriate quotation element based on the length and context of the quote.</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Ensure abbreviations are properly explained using the title attribute.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/text-formatting" className="prev-button">
          Previous: Text Formatting
        </Link>
        <Link to="/html-course/comments" className="next-button">
          Next: Comments
        </Link>
      </div>
    </div>
  );
};

export default Quotation; 