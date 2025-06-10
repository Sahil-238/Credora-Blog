import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Basic.css';

const Basic = () => {
  return (
    <div className="lesson-container">
      <h1>Basic HTML Structure</h1>
      
      <section className="lesson-section">
        <h2>HTML Document Structure</h2>
        <p>
          Every HTML document has a basic structure that includes several essential elements. 
          These elements form the foundation of any HTML page.
        </p>
        <CodeBlock
          code={`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`}
          language="html"
        />
      </section>

      <section className="lesson-section">
        <h2>Document Type Declaration</h2>
        <p>
          The &lt;!DOCTYPE html&gt; declaration must be the first line in your HTML document. 
          It tells the browser which version of HTML you're using.
        </p>
        <div className="info-box">
          <h3>HTML5 Declaration</h3>
          <p>The current standard is HTML5, which uses a simple declaration:</p>
          <CodeBlock
            code={`<!DOCTYPE html>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>HTML Element</h2>
        <p>
          The &lt;html&gt; element is the root element of an HTML page. It contains all other HTML elements.
        </p>
        <div className="info-box">
          <h3>Language Attribute</h3>
          <p>You can specify the language of your document using the lang attribute:</p>
          <CodeBlock
            code={`<html lang="en">`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Head Section</h2>
        <p>
          The &lt;head&gt; element contains metadata about the document, including:
        </p>
        <div className="meta-list">
          <div className="meta-item">
            <h3>Title</h3>
            <CodeBlock
              code={`<title>My Web Page</title>`}
              language="html"
            />
          </div>
          <div className="meta-item">
            <h3>Character Set</h3>
            <CodeBlock
              code={`<meta charset="UTF-8">`}
              language="html"
            />
          </div>
          <div className="meta-item">
            <h3>Viewport</h3>
            <CodeBlock
              code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Body Section</h2>
        <p>
          The &lt;body&gt; element contains all the visible content of your web page.
        </p>
        <div className="example-box">
          <h3>Example:</h3>
          <CodeBlock
            code={`<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
    <img src="image.jpg" alt="Description">
</body>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Proper Indentation</h3>
            <p>Use consistent indentation to make your code readable</p>
          </div>
          <div className="practice-item">
            <h3>Comments</h3>
            <p>Add comments to explain complex sections of your code</p>
          </div>
          <div className="practice-item">
            <h3>Semantic Structure</h3>
            <p>Use appropriate HTML elements for their intended purpose</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/editors" className="prev-button">
          ← Previous: HTML Editors
        </Link>
        <Link to="/html-course/elements" className="next-button">
          Next: HTML Elements →
        </Link>
      </div>
    </div>
  );
};

export default Basic; 