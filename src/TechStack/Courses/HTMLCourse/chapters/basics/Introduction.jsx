import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="lesson-container">
      <h1>Introduction to HTML</h1>
      
      <section className="lesson-section">
        <h2>What is HTML?</h2>
        <p>
          HTML (HyperText Markup Language) is the standard markup language for creating web pages 
          and web applications. It provides the structure and content of a webpage, while CSS 
          handles the presentation and JavaScript adds interactivity.
        </p>
        
        <div className="info-box">
          <h3>Key Points:</h3>
          <ul>
            <li>HTML is not a programming language, but a markup language</li>
            <li>HTML documents are plain text files with .html extension</li>
            <li>HTML uses tags to structure content</li>
            <li>HTML is platform-independent</li>
            <li>HTML is the foundation of web development</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>History of HTML</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>HTML 1.0 (1991)</h3>
            <p>The first version of HTML, created by Tim Berners-Lee</p>
          </div>
          <div className="timeline-item">
            <h3>HTML 2.0 (1995)</h3>
            <p>First standardized version of HTML</p>
          </div>
          <div className="timeline-item">
            <h3>HTML 4.01 (1999)</h3>
            <p>Major update with improved features and standards</p>
          </div>
          <div className="timeline-item">
            <h3>HTML5 (2014)</h3>
            <p>Current version with modern features and APIs</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>How HTML Works</h2>
        <p>
          When you visit a website, your browser reads the HTML document and renders it as a 
          visual webpage. Here's a simple example of how HTML works:
        </p>
        
        <CodeBlock
          code={`<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`}
          language="html"
        />

        <div className="explanation-box">
          <h3>How it Works:</h3>
          <ol>
            <li>Browser reads the HTML document</li>
            <li>Parses the HTML tags and structure</li>
            <li>Renders the content according to the tags</li>
            <li>Displays the final webpage</li>
          </ol>
        </div>
      </section>

      <section className="lesson-section">
        <h2>HTML Tags and Elements</h2>
        <p>
          HTML elements are the building blocks of HTML pages. They consist of tags and content:
        </p>
        
        <div className="example-box">
          <h3>Example:</h3>
          <CodeBlock
            code={`<p>This is a paragraph element</p>
<h1>This is a heading element</h1>
<a href="https://example.com">This is a link element</a>`}
            language="html"
          />
        </div>

        <div className="info-box">
          <h3>Common HTML Elements:</h3>
          <ul>
            <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</li>
            <li><code>&lt;p&gt;</code> - Paragraphs</li>
            <li><code>&lt;a&gt;</code> - Links</li>
            <li><code>&lt;img&gt;</code> - Images</li>
            <li><code>&lt;div&gt;</code> - Division/Container</li>
            <li><code>&lt;span&gt;</code> - Inline container</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>HTML Attributes</h2>
        <p>
          Attributes provide additional information about HTML elements:
        </p>
        
        <CodeBlock
          code={`<img src="image.jpg" alt="Description" width="300" height="200">
<a href="https://example.com" target="_blank">Visit Example</a>
<div class="container" id="main-content">Content</div>`}
          language="html"
        />

        <div className="explanation-box">
          <h3>Common Attributes:</h3>
          <ul>
            <li><code>class</code> - Specifies CSS classes</li>
            <li><code>id</code> - Specifies a unique identifier</li>
            <li><code>src</code> - Specifies the source URL</li>
            <li><code>alt</code> - Specifies alternative text</li>
            <li><code>href</code> - Specifies the URL for links</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>HTML5 Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Semantic Elements</h3>
            <p>New elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</p>
          </div>
          <div className="feature-card">
            <h3>Multimedia</h3>
            <p>Native support for audio and video with &lt;audio&gt; and &lt;video&gt; tags</p>
          </div>
          <div className="feature-card">
            <h3>Canvas & SVG</h3>
            <p>Graphics capabilities with &lt;canvas&gt; and &lt;svg&gt; elements</p>
          </div>
          <div className="feature-card">
            <h3>APIs</h3>
            <p>New APIs for geolocation, drag-and-drop, and local storage</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="info-box">
          <h3>HTML Coding Standards:</h3>
          <ul>
            <li>Always use lowercase for HTML elements and attributes</li>
            <li>Always quote attribute values</li>
            <li>Always close HTML elements</li>
            <li>Use proper indentation for better readability</li>
            <li>Add comments to explain complex sections</li>
            <li>Use semantic HTML elements</li>
            <li>Validate your HTML code</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Practice Exercise</h2>
        <div className="exercise-box">
          <h3>Create Your First HTML Page:</h3>
          <ol>
            <li>Create a new HTML file</li>
            <li>Add the basic HTML structure</li>
            <li>Create a heading and a paragraph</li>
            <li>Add an image with proper attributes</li>
            <li>Create a link to another website</li>
            <li>Test your page in a web browser</li>
          </ol>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html/home" className="prev-button">
          ← Previous: HTML Home
        </Link>
        <Link to="/html/editors" className="next-button">
          Next: HTML Editors →
        </Link>
      </div>
    </div>
  );
};

export default Introduction; 