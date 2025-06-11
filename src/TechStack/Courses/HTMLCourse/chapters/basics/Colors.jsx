import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Colors.css';

const Colors = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Colors</h1>
      
      <section className="lesson-section">
        <h2>Color Values in HTML</h2>
        <p>
          HTML colors can be specified using different methods: color names, RGB values, HEX codes, and HSL values.
        </p>
        
        <div className="color-methods">
          <div className="color-method">
            <h3>Color Names</h3>
            <CodeBlock
              code={`<p style="color: red;">This text is red</p>
<p style="color: blue;">This text is blue</p>
<p style="color: green;">This text is green</p>`}
              language="html"
            />
          </div>
          
          <div className="color-method">
            <h3>RGB Values</h3>
            <CodeBlock
              code={`<p style="color: rgb(255, 0, 0);">This text is red</p>
<p style="color: rgb(0, 0, 255);">This text is blue</p>
<p style="color: rgb(0, 255, 0);">This text is green</p>`}
              language="html"
            />
          </div>
          
          <div className="color-method">
            <h3>HEX Codes</h3>
            <CodeBlock
              code={`<p style="color: #FF0000;">This text is red</p>
<p style="color: #0000FF;">This text is blue</p>
<p style="color: #00FF00;">This text is green</p>`}
              language="html"
            />
          </div>
          
          <div className="color-method">
            <h3>HSL Values</h3>
            <CodeBlock
              code={`<p style="color: hsl(0, 100%, 50%);">This text is red</p>
<p style="color: hsl(240, 100%, 50%);">This text is blue</p>
<p style="color: hsl(120, 100%, 50%);">This text is green</p>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Background Colors</h2>
        <p>
          You can set background colors for elements using the same color value methods.
        </p>
        
        <div className="color-example">
          <CodeBlock
            code={`<div style="background-color: #f0f0f0; padding: 20px;">
  <p style="background-color: yellow;">This paragraph has a yellow background</p>
  <p style="background-color: rgba(0, 255, 0, 0.3);">This paragraph has a semi-transparent green background</p>
</div>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Color Opacity</h2>
        <p>
          You can control the opacity of colors using RGBA or HSLA values.
        </p>
        
        <div className="color-example">
          <CodeBlock
            code={`<div style="background-color: #000;">
  <p style="color: rgba(255, 255, 255, 0.5);">This text is semi-transparent white</p>
  <p style="color: hsla(0, 100%, 50%, 0.7);">This text is semi-transparent red</p>
</div>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Color Contrast</h3>
            <p>Ensure sufficient contrast between text and background colors for readability.</p>
          </div>
          <div className="practice-item">
            <h3>Consistent Color Scheme</h3>
            <p>Use a consistent color scheme throughout your website for visual harmony.</p>
          </div>
          <div className="practice-item">
            <h3>Color Accessibility</h3>
            <p>Consider color-blind users and provide alternative ways to convey information.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/comments" className="prev-button">
          Previous: Comments
        </Link>
        <Link to="/html-course/css" className="next-button">
          Next: CSS
        </Link>
      </div>
    </div>
  );
};

export default Colors; 