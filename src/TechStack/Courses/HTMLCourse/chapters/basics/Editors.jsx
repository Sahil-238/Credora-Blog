import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Editors.css';

const Editors = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Editors</h1>
      
      <section className="lesson-section">
        <h2>What is an HTML Editor?</h2>
        <p>
          An HTML editor is a software application for creating and editing HTML code. 
          While you can write HTML using any text editor, specialized HTML editors offer 
          features that make coding easier and more efficient.
        </p>
      </section>

      <section className="lesson-section">
        <h2>Types of HTML Editors</h2>
        <div className="editors-grid">
          <div className="editor-card">
            <h3>Text Editors</h3>
            <p>Simple editors that allow you to write and edit code:</p>
            <ul>
              <li>Notepad (Windows)</li>
              <li>TextEdit (Mac)</li>
              <li>Gedit (Linux)</li>
            </ul>
          </div>

          <div className="editor-card">
            <h3>Code Editors</h3>
            <p>Advanced editors with coding features:</p>
            <ul>
              <li>Visual Studio Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
            </ul>
          </div>

          <div className="editor-card">
            <h3>WYSIWYG Editors</h3>
            <p>Visual editors that show the result while editing:</p>
            <ul>
              <li>Adobe Dreamweaver</li>
              <li>Microsoft Expression Web</li>
              <li>BlueGriffon</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Recommended Editors</h2>
        <div className="recommended-editors">
          <div className="editor-feature">
            <h3>Visual Studio Code</h3>
            <p>
              A free, open-source code editor with excellent HTML support, extensions, 
              and features like IntelliSense, debugging, and Git integration.
            </p>
            <a 
              href="https://code.visualstudio.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="editor-link"
            >
              Download VS Code →
            </a>
          </div>

          <div className="editor-feature">
            <h3>Sublime Text</h3>
            <p>
              A sophisticated text editor with a minimal interface, powerful features, 
              and excellent performance.
            </p>
            <a 
              href="https://www.sublimetext.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="editor-link"
            >
              Download Sublime Text →
            </a>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Features to Look For</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Syntax Highlighting</h3>
            <p>Colors different parts of your code for better readability</p>
          </div>
          <div className="feature-item">
            <h3>Auto-completion</h3>
            <p>Automatically completes tags and attributes as you type</p>
          </div>
          <div className="feature-item">
            <h3>Error Detection</h3>
            <p>Highlights syntax errors and suggests fixes</p>
          </div>
          <div className="feature-item">
            <h3>Live Preview</h3>
            <p>Shows how your HTML will look in a browser</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Getting Started with VS Code</h2>
        <div className="setup-steps">
          <ol>
            <li>Download and install Visual Studio Code</li>
            <li>Install the "HTML CSS Support" extension</li>
            <li>Create a new file with .html extension</li>
            <li>Start coding with HTML5 template</li>
          </ol>
          <CodeBlock
            code={`<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`}
            language="html"
          />
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/introduction" className="prev-button">
          ← Previous: Introduction
        </Link>
        <Link to="/html-course/basic" className="next-button">
          Next: Basic Structure →
        </Link>
      </div>
    </div>
  );
};

export default Editors; 