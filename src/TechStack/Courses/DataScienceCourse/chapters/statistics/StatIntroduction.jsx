import React from 'react';

const StatIntroduction = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Introduction to Statistics</h1>
      <div className="chapter-text">
        <p>Statistics is the science of collecting, analyzing, interpreting, and presenting data. It's a fundamental pillar of data science that helps us make sense of data and draw meaningful conclusions.</p>

        <h3>Types of Statistics:</h3>
        <ul>
          <li>Descriptive Statistics: Summarizing and describing data</li>
          <li>Inferential Statistics: Drawing conclusions from data</li>
        </ul>

        <div className="example-section">
          <h3>Basic Statistical Concepts in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
from scipy import stats

# Sample dataset
data = [23, 45, 67, 34, 89, 56, 44, 78, 90, 32]

# Basic statistics
print(f"Mean: {np.mean(data)}")
print(f"Median: {np.median(data)}")
print(f"Standard Deviation: {np.std(data)}")
print(f"Variance: {np.var(data)}")

# Using pandas
df = pd.DataFrame(data, columns=['values'])
print(df.describe())`}
          </div>
        </div>

        <h3>Key Statistical Concepts:</h3>
        <ul>
          <li>Measures of Central Tendency (Mean, Median, Mode)</li>
          <li>Measures of Spread (Variance, Standard Deviation)</li>
          <li>Probability Distributions</li>
          <li>Hypothesis Testing</li>
        </ul>

        <div className="note-section">
          <h3>Applications in Data Science:</h3>
          <ul>
            <li>Data Analysis and Interpretation</li>
            <li>Feature Selection</li>
            <li>Model Evaluation</li>
            <li>A/B Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatIntroduction; 