import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './BasicStructure.css';

const BasicStructure = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Basic Structure</h1>
      
      <section className="lesson-section">
        <h2>Understanding HTML Document Structure</h2>
        <p>
          Every HTML document follows a specific structure that helps browsers understand 
          how to render the content. Let's break down the essential components of an HTML document.
        </p>
        
        <div className="info-box">
          <h3>Key Components:</h3>
          <ul>
            <li>Document Type Declaration (DOCTYPE)</li>
            <li>HTML Root Element</li>
            <li>Head Section</li>
            <li>Body Section</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>The DOCTYPE Declaration</h2>
        <p>
          The DOCTYPE declaration is the first line in an HTML document. It tells the browser 
          which version of HTML the page is using.
        </p>
        
        <CodeBlock
          code={`<!DOCTYPE html>`}
          language="html"
        />

        <div className="explanation-box">
          <h3>Why DOCTYPE is Important:</h3>
          <ul>
            <li>Ensures proper rendering of the page</li>
            <li>Prevents browsers from going into "quirks mode"</li>
            <li>Helps maintain consistency across different browsers</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>The HTML Root Element</h2>
        <p>
          The HTML element is the root element of an HTML page. It contains all other HTML elements.
        </p>
        
        <CodeBlock
          code={`<!DOCTYPE html>
<html lang="en">
  <!-- All other elements go here -->
</html>`}
          language="html"
        />

        <div className="info-box">
          <h3>Important Attributes:</h3>
          <ul>
            <li><code>lang</code> - Specifies the language of the document</li>
            <li><code>dir</code> - Specifies the text direction (ltr or rtl)</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>The Head Section</h2>
        <p>
          The head section contains metadata about the document, including title, character set, 
          styles, scripts, and other meta information.
        </p>
        
        <CodeBlock
          code={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML basics">
  <title>My HTML Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>`}
          language="html"
        />

        <div className="explanation-box">
          <h3>Common Head Elements:</h3>
          <ul>
            <li><code>&lt;title&gt;</code> - Sets the page title</li>
            <li><code>&lt;meta&gt;</code> - Provides metadata</li>
            <li><code>&lt;link&gt;</code> - Links to external resources</li>
            <li><code>&lt;script&gt;</code> - Embeds or links to JavaScript</li>
            <li><code>&lt;style&gt;</code> - Contains CSS styles</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>The Body Section</h2>
        <p>
          The body section contains all the visible content of the webpage, including text, 
          images, links, and other elements.
        </p>
        
        <CodeBlock
          code={`<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>About Us</h2>
      <p>This is the main content of our website.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
</body>`}
          language="html"
        />

        <div className="info-box">
          <h3>Common Body Elements:</h3>
          <ul>
            <li><code>&lt;header&gt;</code> - Introductory content</li>
            <li><code>&lt;nav&gt;</code> - Navigation links</li>
            <li><code>&lt;main&gt;</code> - Main content</li>
            <li><code>&lt;section&gt;</code> - Thematic grouping</li>
            <li><code>&lt;footer&gt;</code> - Footer content</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Complete HTML Document Example</h2>
        <p>Here's a complete example of a well-structured HTML document:</p>
        
        <CodeBlock
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A sample HTML document">
  <title>Sample HTML Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
  </header>

  <main>
    <section>
      <h2>About</h2>
      <p>This is a sample HTML document showing proper structure.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`}
          language="html"
        />
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="info-box">
          <h3>HTML Structure Best Practices:</h3>
          <ul>
            <li>Always include the DOCTYPE declaration</li>
            <li>Use semantic HTML elements</li>
            <li>Properly nest elements</li>
            <li>Include meta tags for SEO</li>
            <li>Use proper indentation for readability</li>
            <li>Validate your HTML code</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice Exercise</h2>
        <div className="exercise-box">
          <h3>Create a Basic HTML Document:</h3>
          <ol>
            <li>Create a new HTML file</li>
            <li>Add the DOCTYPE declaration</li>
            <li>Create the HTML structure with head and body sections</li>
            <li>Add a title and meta tags</li>
            <li>Create a simple page with header, main content, and footer</li>
            <li>Validate your HTML using an online validator</li>
          </ol>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html/editors" className="prev-button">
          ← Previous: HTML Editors
        </Link>
        <Link to="/html/elements" className="next-button">
          Next: HTML Elements →
        </Link>
      </div>
    </div>
  );
};

export default BasicStructure; 