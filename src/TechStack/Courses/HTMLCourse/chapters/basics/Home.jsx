import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Tutorial</h1>
      
      <section className="welcome-section">
        <h2>Welcome to HTML Learning</h2>
        <p>
          Welcome to our comprehensive HTML tutorial! Whether you're a complete beginner 
          or looking to refresh your knowledge, this tutorial will guide you through 
          everything you need to know about HTML.
        </p>
        
        <div className="features-grid">
          <div className="feature-card">
            <h3>Learn from Scratch</h3>
            <p>Start with the basics and progress to advanced concepts</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Examples</h3>
            <p>Practice with real-world examples and exercises</p>
          </div>
          <div className="feature-card">
            <h3>Comprehensive Coverage</h3>
            <p>From basic tags to advanced APIs and best practices</p>
          </div>
          <div className="feature-card">
            <h3>Modern Web Development</h3>
            <p>Learn HTML5 and modern web development techniques</p>
          </div>
        </div>
      </section>

      <section className="course-overview">
        <h2>Course Overview</h2>
        <div className="course-sections">
          <div className="section-card">
            <h3>HTML Basics</h3>
            <ul>
              <li>Introduction to HTML</li>
              <li>HTML Editors</li>
              <li>Basic Structure</li>
              <li>Elements and Attributes</li>
            </ul>
            <Link to="/html/introduction" className="section-link">Start Learning →</Link>
          </div>

          <div className="section-card">
            <h3>Text Formatting</h3>
            <ul>
              <li>Headings and Paragraphs</li>
              <li>Text Styling</li>
              <li>Formatting Elements</li>
              <li>Quotations and Comments</li>
            </ul>
            <Link to="/html/headings" className="section-link">Learn More →</Link>
          </div>

          <div className="section-card">
            <h3>Media & Links</h3>
            <ul>
              <li>Images and Links</li>
              <li>Video and Audio</li>
              <li>Favicons</li>
              <li>Media Best Practices</li>
            </ul>
            <Link to="/html/links" className="section-link">Explore →</Link>
          </div>

          <div className="section-card">
            <h3>Forms & Tables</h3>
            <ul>
              <li>Form Creation</li>
              <li>Input Types</li>
              <li>Table Structure</li>
              <li>Data Organization</li>
            </ul>
            <Link to="/html/forms" className="section-link">Get Started →</Link>
          </div>
        </div>
      </section>

      <section className="learning-path">
        <h2>Learning Path</h2>
        <div className="path-timeline">
          <div className="timeline-item">
            <div className="timeline-number">1</div>
            <h3>HTML Basics</h3>
            <p>Learn the fundamental concepts and structure of HTML</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-number">2</div>
            <h3>Text & Media</h3>
            <p>Master text formatting and media elements</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-number">3</div>
            <h3>Forms & Tables</h3>
            <p>Create interactive forms and structured data tables</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-number">4</div>
            <h3>Advanced Topics</h3>
            <p>Explore APIs, graphics, and modern web features</p>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started</h2>
        <div className="start-steps">
          <div className="step">
            <h3>1. Choose Your Editor</h3>
            <p>Select and set up your preferred HTML editor</p>
            <Link to="/html/editors" className="step-link">Learn about Editors →</Link>
          </div>
          <div className="step">
            <h3>2. Learn Basic Structure</h3>
            <p>Understand the fundamental HTML document structure</p>
            <Link to="/html/basic" className="step-link">Start with Basics →</Link>
          </div>
          <div className="step">
            <h3>3. Practice with Examples</h3>
            <p>Follow along with our interactive examples</p>
            <Link to="/html/elements" className="step-link">Try Examples →</Link>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>HTML References</h3>
            <p>Complete reference of HTML tags and attributes</p>
            <Link to="/html/tag-list" className="resource-link">View Reference →</Link>
          </div>
          <div className="resource-card">
            <h3>Code Examples</h3>
            <p>Collection of practical HTML code examples</p>
            <Link to="/html/examples" className="resource-link">Browse Examples →</Link>
          </div>
          <div className="resource-card">
            <h3>Best Practices</h3>
            <p>Guidelines for writing clean, semantic HTML</p>
            <Link to="/html/style-guide" className="resource-link">Learn Best Practices →</Link>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html/introduction" className="next-button">
          Start Learning HTML →
        </Link>
      </div>
    </div>
  );
};

export default Home; 