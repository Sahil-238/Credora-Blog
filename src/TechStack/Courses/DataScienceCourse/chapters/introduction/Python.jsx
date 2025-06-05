import React from 'react';

const Python = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Python for Data Science</h1>
      <div className="chapter-text">
        <p>Python is one of the most popular programming languages for data science due to its simplicity, readability, and powerful libraries.</p>

        <h3>Essential Python Libraries for Data Science:</h3>
        <ul>
          <li>NumPy: For numerical computing</li>
          <li>Pandas: For data manipulation and analysis</li>
          <li>Matplotlib: For data visualization</li>
          <li>Scikit-learn: For machine learning</li>
        </ul>

        <div className="example-section">
          <h3>Basic Python Example:</h3>
          <div className="code-block">
{`# Importing libraries
import pandas as pd
import numpy as np

# Creating a simple dataset
data = {
    'name': ['John', 'Sarah', 'Mike'],
    'age': [25, 30, 28],
    'city': ['London', 'Paris', 'Berlin']
}

# Creating a DataFrame
df = pd.DataFrame(data)
print(df)`}
          </div>
        </div>

        <div className="note-section">
          <h3>Key Python Concepts for Data Science:</h3>
          <ul>
            <li>Data structures (lists, dictionaries, arrays)</li>
            <li>Functions and methods</li>
            <li>List comprehensions</li>
            <li>Working with files and data formats</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Python; 