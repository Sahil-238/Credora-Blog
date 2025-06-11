import React, { useState } from 'react';
import '../../styles/Chapter.css';

const Borders = () => {
  const [borderWidth, setBorderWidth] = useState('2px');
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderColor, setBorderColor] = useState('#3498db');
  const [borderRadius, setBorderRadius] = useState('4px');

  return (
    <div className="chapter-container">
      <h1>CSS Borders</h1>

      <section className="content-section">
        <h2>Introduction to CSS Borders</h2>
        <p>
          CSS borders are fundamental for defining element boundaries and creating visual separation in web design.
          They can be customized in terms of style, width, color, and can be applied to specific sides of an element.
        </p>
        
        <div className="interactive-demo">
          <h3>Interactive Border Demo</h3>
          <div 
            className="demo-box"
            style={{
              border: `${borderWidth} ${borderStyle} ${borderColor}`,
              borderRadius: borderRadius,
              padding: '20px',
              margin: '20px 0',
              textAlign: 'center'
            }}
          >
            Interactive Border Box
          </div>
          
          <div className="controls">
            <div className="control-group">
              <label>Border Width:</label>
              <select value={borderWidth} onChange={(e) => setBorderWidth(e.target.value)}>
                <option value="1px">1px</option>
                <option value="2px">2px</option>
                <option value="4px">4px</option>
                <option value="8px">8px</option>
              </select>
            </div>

            <div className="control-group">
              <label>Border Style:</label>
              <select value={borderStyle} onChange={(e) => setBorderStyle(e.target.value)}>
                <option value="solid">solid</option>
                <option value="dashed">dashed</option>
                <option value="dotted">dotted</option>
                <option value="double">double</option>
                <option value="groove">groove</option>
                <option value="ridge">ridge</option>
              </select>
            </div>

            <div className="control-group">
              <label>Border Color:</label>
              <input
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
              />
            </div>

            <div className="control-group">
              <label>Border Radius:</label>
              <input
                type="range"
                min="0"
                max="50"
                value={borderRadius.replace('px', '')}
                onChange={(e) => setBorderRadius(`${e.target.value}px`)}
              />
              <span>{borderRadius}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Border Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <h3>Border Width</h3>
            <div className="example-box" style={{ border: '2px solid #3498db' }}>
              2px solid border
            </div>
            <div className="code-example">
              <pre>
                {`border-width: 2px;
/* or */
border-width: thin | medium | thick;`}
              </pre>
            </div>
          </div>

          <div className="property-card">
            <h3>Border Style</h3>
            <div className="style-examples">
              <div style={{ border: '2px solid black', margin: '5px' }}>solid</div>
              <div style={{ border: '2px dashed black', margin: '5px' }}>dashed</div>
              <div style={{ border: '2px dotted black', margin: '5px' }}>dotted</div>
              <div style={{ border: '2px double black', margin: '5px' }}>double</div>
            </div>
            <div className="code-example">
              <pre>
                {`border-style: solid | dashed | dotted | double;`}
              </pre>
            </div>
          </div>

          <div className="property-card">
            <h3>Border Color</h3>
            <div className="color-examples">
              <div style={{ border: '2px solid red', margin: '5px' }}>red</div>
              <div style={{ border: '2px solid #00ff00', margin: '5px' }}>#00ff00</div>
              <div style={{ border: '2px solid rgb(0,0,255)', margin: '5px' }}>rgb(0,0,255)</div>
            </div>
            <div className="code-example">
              <pre>
                {`border-color: red;
border-color: #00ff00;
border-color: rgb(0,0,255);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Individual Border Sides</h2>
        <div className="demo-box sides-demo">
          <div className="example-box" style={{
            borderTop: '3px solid #e74c3c',
            borderRight: '3px dashed #3498db',
            borderBottom: '3px dotted #2ecc71',
            borderLeft: '3px double #f1c40f',
            padding: '20px',
            margin: '20px 0'
          }}>
            Different borders on each side
          </div>
          <div className="code-example">
            <pre>
              {`.element {
    border-top: 3px solid #e74c3c;
    border-right: 3px dashed #3498db;
    border-bottom: 3px dotted #2ecc71;
    border-left: 3px double #f1c40f;
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Border Radius</h2>
        <div className="radius-examples">
          <div className="example-grid">
            <div className="radius-box" style={{
              border: '2px solid #3498db',
              borderRadius: '10px',
              padding: '20px',
              margin: '10px'
            }}>
              10px radius
            </div>
            <div className="radius-box" style={{
              border: '2px solid #3498db',
              borderRadius: '20px',
              padding: '20px',
              margin: '10px'
            }}>
              20px radius
            </div>
            <div className="radius-box" style={{
              border: '2px solid #3498db',
              borderRadius: '50%',
              padding: '20px',
              margin: '10px',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              50% (circle)
            </div>
          </div>
          <div className="code-example">
            <pre>
              {`.element {
    border-radius: 10px;
    /* or */
    border-radius: 50%;  /* For circles */
    /* or individual corners */
    border-radius: 10px 20px 30px 40px;
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Best Practices</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>🎯 Consistency</h3>
            <p>Use consistent border styles throughout your website for a cohesive look.</p>
          </div>
          <div className="tip-card">
            <h3>📱 Responsive Design</h3>
            <p>Adjust border widths and radius for different screen sizes.</p>
          </div>
          <div className="tip-card">
            <h3>🎨 Color Harmony</h3>
            <p>Match border colors with your website's color scheme.</p>
          </div>
          <div className="tip-card">
            <h3>📦 Box Sizing</h3>
            <p>Use border-box to prevent layout issues with borders.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Common Issues and Solutions</h2>
        <div className="troubleshooting">
          <div className="issue-card">
            <h3>Issue: Border Adding to Element Size</h3>
            <div className="solution">
              <p>Solution: Use box-sizing: border-box</p>
              <div className="code-example">
                <pre>
                  {`.element {
    box-sizing: border-box;
    width: 100px;
    border: 2px solid black;
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="issue-card">
            <h3>Issue: Borders Not Showing</h3>
            <div className="solution">
              <p>Solution: Ensure all properties are specified</p>
              <div className="code-example">
                <pre>
                  {`/* Complete border declaration */
.element {
    border: 2px solid black;
    /* or individual properties */
    border-width: 2px;
    border-style: solid;  /* Required */
    border-color: black;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .interactive-demo {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }

        .controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .control-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .property-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .property-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .example-box {
          margin: 10px 0;
          padding: 15px;
          text-align: center;
          background: white;
        }

        .style-examples, .color-examples {
          display: grid;
          gap: 10px;
        }

        .radius-examples {
          margin: 20px 0;
        }

        .example-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .tip-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .issue-card {
          margin: 20px 0;
          padding: 20px;
          background: #fff8dc;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .controls {
            grid-template-columns: 1fr;
          }

          .property-grid {
            grid-template-columns: 1fr;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Borders; 