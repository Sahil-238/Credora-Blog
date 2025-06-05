import React from 'react';

const DataFrame = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Working with DataFrames</h1>
      <div className="chapter-text">
        <p>A DataFrame is a two-dimensional data structure that organizes data into rows and columns. It's one of the most important tools in data science, primarily used through the Pandas library in Python.</p>

        <div className="example-section">
          <h3>Creating a DataFrame:</h3>
          <div className="code-block">
{`import pandas as pd

# Creating a DataFrame from a dictionary
data = {
    'name': ['John', 'Sarah', 'Mike'],
    'age': [25, 30, 28],
    'salary': [50000, 60000, 55000]
}
df = pd.DataFrame(data)

# Basic operations
print(df.head())  # View first few rows
print(df.describe())  # Statistical summary
print(df['age'].mean())  # Calculate mean age`}
          </div>
        </div>

        <h3>Common DataFrame Operations:</h3>
        <ul>
          <li>Filtering rows and selecting columns</li>
          <li>Handling missing values</li>
          <li>Grouping and aggregating data</li>
          <li>Merging and joining DataFrames</li>
          <li>Sorting and reshaping data</li>
        </ul>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Always check data types of columns</li>
            <li>Handle missing values appropriately</li>
            <li>Use efficient methods for large datasets</li>
            <li>Make copies when needed to avoid unintended modifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataFrame; 