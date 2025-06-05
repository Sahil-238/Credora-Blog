import React from 'react';

const DatabaseTable = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Database Tables in Data Science</h1>
      <div className="chapter-text">
        <p>Database tables are fundamental structures for organizing and storing data in a structured format. They consist of rows (records) and columns (fields).</p>

        <div className="example-section">
          <h3>Example of a Database Table Structure:</h3>
          <div className="code-block">
            {`| ID | Name    | Age | City    |
|----+---------|-----|---------|
| 1  | John    | 25  | London  |
| 2  | Sarah   | 30  | Paris   |
| 3  | Michael | 28  | Berlin  |`}
          </div>
        </div>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Primary Keys: Unique identifiers for each record</li>
          <li>Foreign Keys: References to other tables</li>
          <li>Data Types: Specific formats for data storage</li>
          <li>Relationships: Connections between different tables</li>
        </ul>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Normalize your data to reduce redundancy</li>
            <li>Use appropriate data types for efficiency</li>
            <li>Index important columns for faster queries</li>
            <li>Maintain data integrity with constraints</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DatabaseTable; 