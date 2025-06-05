import React from 'react';

const WhatIsData = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">What is Data?</h1>
      <div className="chapter-text">
        <p>Data is information that has been collected, measured, or observed that can be analyzed to make decisions or draw conclusions. In the context of data science, data can come in many forms:</p>
        
        <ul>
          <li>Numbers (Quantitative data)</li>
          <li>Text (Qualitative data)</li>
          <li>Images</li>
          <li>Audio</li>
          <li>Video</li>
        </ul>

        <div className="example-section">
          <h3>Examples of Data:</h3>
          <ul>
            <li>Temperature readings over time</li>
            <li>Customer reviews of products</li>
            <li>Sales figures</li>
            <li>Social media posts</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Key Points:</h3>
          <ul>
            <li>Data can be structured or unstructured</li>
            <li>Quality of data is crucial for analysis</li>
            <li>Data should be relevant to the problem being solved</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatIsData; 