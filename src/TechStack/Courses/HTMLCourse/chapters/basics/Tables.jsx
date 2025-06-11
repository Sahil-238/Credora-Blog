import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../../../../../components/CodeBlock';
import './Tables.css';

const Tables = () => {
  return (
    <div className="lesson-container">
      <h1>HTML Tables</h1>
      
      <section className="lesson-section">
        <h2>Basic Table Structure</h2>
        <p>
          HTML tables are used to display data in rows and columns. The basic structure consists of &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, and &lt;td&gt; elements.
        </p>
        
        <div className="table-example">
          <CodeBlock
            code={`<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`}
            language="html"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Table Elements</h2>
        <div className="elements-list">
          <div className="element-item">
            <h3>&lt;table&gt;</h3>
            <p>The main container for the table.</p>
          </div>
          
          <div className="element-item">
            <h3>&lt;tr&gt;</h3>
            <p>Defines a table row.</p>
          </div>
          
          <div className="element-item">
            <h3>&lt;th&gt;</h3>
            <p>Defines a header cell.</p>
          </div>
          
          <div className="element-item">
            <h3>&lt;td&gt;</h3>
            <p>Defines a data cell.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Advanced Table Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Table Headers</h3>
            <CodeBlock
              code={`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total: 1</td>
    </tr>
  </tfoot>
</table>`}
              language="html"
            />
          </div>
          
          <div className="feature-item">
            <h3>Colspan and Rowspan</h3>
            <CodeBlock
              code={`<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>First</td>
    <td>Last</td>
    <td rowspan="2">25</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
</table>`}
              language="html"
            />
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Table Styling</h2>
        <p>
          Tables can be styled using CSS to improve their appearance and readability.
        </p>
        
        <div className="styling-example">
          <CodeBlock
            code={`<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
</style>`}
            language="css"
          />
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <div className="practices-list">
          <div className="practice-item">
            <h3>Semantic Structure</h3>
            <p>Use the appropriate table elements (thead, tbody, tfoot) for better structure.</p>
          </div>
          <div className="practice-item">
            <h3>Accessibility</h3>
            <p>Include proper headers and captions for screen readers.</p>
          </div>
          <div className="practice-item">
            <h3>Responsive Design</h3>
            <p>Make tables responsive for mobile devices using CSS.</p>
          </div>
        </div>
      </section>

      <div className="navigation-buttons">
        <Link to="/html-course/favicon" className="prev-button">
          Previous: Favicon
        </Link>
        <Link to="/html-course/lists" className="next-button">
          Next: Lists
        </Link>
      </div>
    </div>
  );
};

export default Tables; 