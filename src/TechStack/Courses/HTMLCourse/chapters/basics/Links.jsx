import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Links.css';

const Links = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Links</h1>
      
      <section className="lesson-section">
        <h2>Basic Links</h2>
        <p>
          The &lt;a&gt; tag is used to create hyperlinks in HTML. The href attribute specifies the URL of the page the link goes to.
        </p>
        
        <div className="link-example">
          <CodeBlock
            code={`<a href="https://www.example.com">Visit Example.com</a>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Link Types</h2>
        <div className="link-types">
          <div className="link-type">
            <h3>External Links</h3>
            <CodeBlock
              code={`<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
  Open in new tab
</a>`}
              language="html"
            />
            <div className="note">
              <strong>Note:</strong> Use target="_blank" and rel="noopener noreferrer" for external links.
            </div>
          </div>
          
          <div className="link-type">
            <h3>Internal Links</h3>
            <CodeBlock
              code={`<a href="/about">About Us</a>
<a href="#section-id">Jump to Section</a>`}
              language="html"
            />
          </div>
          
          <div className="link-type">
            <h3>Email Links</h3>
            <CodeBlock
              code={`<a href="mailto:info@example.com">Send Email</a>`}
              language="html"
            />
          </div>
          
          <div className="link-type">
            <h3>Phone Links</h3>
            <CodeBlock
              code={`<a href="tel:+1234567890">Call Us</a>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Link Attributes</h2>
        <div className="attributes-list">
          <div className="attribute-item">
            <h3>href</h3>
            <p>Specifies the URL of the page the link goes to.</p>
          </div>
          
          <div className="attribute-item">
            <h3>target</h3>
            <p>Specifies where to open the linked document (_blank, _self, _parent, _top).</p>
          </div>
          
          <div className="attribute-item">
            <h3>rel</h3>
            <p>Specifies the relationship between the current document and the linked document.</p>
          </div>
          
          <div className="attribute-item">
            <h3>download</h3>
            <p>Specifies that the target will be downloaded when clicked.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Descriptive Text</h3>
            <p>Use clear and descriptive link text that indicates the destination.</p>
          </div>
          <div className="practice-item">
            <h3>Security</h3>
            <p>Use rel="noopener noreferrer" for external links to prevent security vulnerabilities.</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Ensure links are keyboard accessible and have sufficient color contrast.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/css" className="prev-button">
          Previous: CSS
        </Link>
        <Link to="/html-course/images" className="next-button">
          Next: Images
        </Link>
      </div>
    </div>
  );
};

export default Links; 