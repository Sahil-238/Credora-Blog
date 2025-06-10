import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Favicon.css';

const Favicon = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Favicon</h1>
      
      <section className="lesson-section">
        <h2>Introduction to Favicons</h2>
        <p>
          A favicon is a small icon that appears in the browser tab, bookmarks, and other places. It helps users identify your website.
        </p>
        
        <div className="favicon-example">
          <CodeBlock
            code={`<link rel="icon" type="image/x-icon" href="/favicon.ico">`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Favicon Formats</h2>
        <div className="format-list">
          <div className="format-item">
            <h3>ICO Format</h3>
            <p>Traditional format supported by all browsers.</p>
            <CodeBlock
              code={`<link rel="icon" type="image/x-icon" href="/favicon.ico">`}
              language="html"
            />
          </div>
          
          <div className="format-item">
            <h3>PNG Format</h3>
            <p>Modern format with better quality and transparency support.</p>
            <CodeBlock
              code={`<link rel="icon" type="image/png" href="/favicon.png">`}
              language="html"
            />
          </div>
          
          <div className="format-item">
            <h3>SVG Format</h3>
            <p>Vector format that scales perfectly at any size.</p>
            <CodeBlock
              code={`<link rel="icon" type="image/svg+xml" href="/favicon.svg">`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Multiple Sizes</h2>
        <p>
          For better support across different devices and platforms, you can provide multiple favicon sizes.
        </p>
        
        <div className="sizes-example">
          <CodeBlock
            code={`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Web App Manifest</h2>
        <p>
          For progressive web apps, you can use a web manifest file to define various icons and app properties.
        </p>
        
        <div className="manifest-example">
          <CodeBlock
            code={`{
  "name": "My Web App",
  "short_name": "App",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}`}
            language="json"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Multiple Formats</h3>
            <p>Provide favicons in multiple formats for better browser compatibility.</p>
          </div>
          <div className="practice-item">
            <h3>Appropriate Sizes</h3>
            <p>Include different sizes for various devices and contexts.</p>
          </div>
          <div className="practice-item">
            <h3>Simple Design</h3>
            <p>Keep the favicon design simple and recognizable at small sizes.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/images" className="prev-button">
          Previous: Images
        </Link>
        <Link to="/html-course/tables" className="next-button">
          Next: Tables
        </Link>
      </div>
    </div>
  );
};

export default Favicon; 