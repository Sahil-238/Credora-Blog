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
          HTML (HyperText Markup Language) is the standard markup language for creating web pages. 
          It describes the structure of a web page and consists of a series of elements that tell 
          the browser how to display the content.
        </p>
        <div className="info-box">
          <h3>Key Points:</h3>
          <ul>
            <li>HTML is not a programming language, it's a markup language</li>
            <li>HTML elements are the building blocks of HTML pages</li>
            <li>HTML elements are represented by tags</li>
            <li>HTML tags label pieces of content such as "heading", "paragraph", "table", etc.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>A Simple HTML Document</h2>
        <p>Here's an example of a basic HTML document:</p>
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
      </section>

      <section className="lesson-section">
        <h2>HTML Elements</h2>
        <p>
          An HTML element usually consists of a start tag and an end tag, with the content inserted in between:
        </p>
        <CodeBlock
          code={`<tagname>Content goes here...</tagname>`}
          language="html"
        />
        <div className="info-box">
          <h3>Example:</h3>
          <ul>
            <li>&lt;h1&gt;My First Heading&lt;/h1&gt;</li>
            <li>&lt;p&gt;My first paragraph.&lt;/p&gt;</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Why Learn HTML?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Foundation of Web Development</h3>
            <p>HTML is the fundamental building block of web development</p>
          </div>
          <div className="benefit-card">
            <h3>Easy to Learn</h3>
            <p>Simple syntax and straightforward concepts</p>
          </div>
          <div className="benefit-card">
            <h3>Essential Skill</h3>
            <p>Required for all web development roles</p>
          </div>
          <div className="benefit-card">
            <h3>Versatile</h3>
            <p>Works with all modern browsers and platforms</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/editors" className="next-button">
          Next: HTML Editors →
        </Link>
      </div>
    </div>
  );
};

export default Introduction; 