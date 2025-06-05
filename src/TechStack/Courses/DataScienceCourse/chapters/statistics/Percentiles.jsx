import React from 'react';

const Percentiles = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Understanding Percentiles</h1>
      <div className="chapter-text">
        <p>Percentiles are values that divide a dataset into 100 equal parts. They are crucial for understanding data distribution and identifying outliers.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Quartiles (25th, 50th, 75th percentiles)</li>
          <li>Median (50th percentile)</li>
          <li>Interquartile Range (IQR)</li>
          <li>Box plots and whiskers</li>
        </ul>

        <div className="example-section">
          <h3>Calculating Percentiles in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sample data
data = np.random.normal(100, 15, 1000)

# Calculate percentiles
percentiles = np.percentile(data, [25, 50, 75])
print(f"25th percentile: {percentiles[0]}")
print(f"Median (50th): {percentiles[1]}")
print(f"75th percentile: {percentiles[2]}")

# Create box plot
plt.figure(figsize=(10, 6))
sns.boxplot(data=data)
plt.title('Box Plot showing Percentiles')
plt.show()

# Calculate IQR
iqr = percentiles[2] - percentiles[0]
print(f"Interquartile Range: {iqr}")`}
          </div>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Identifying outliers in data</li>
            <li>Understanding data distribution</li>
            <li>Setting thresholds for analysis</li>
            <li>Performance benchmarking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Percentiles; 