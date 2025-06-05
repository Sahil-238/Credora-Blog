import React from 'react';

const Correlation = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Understanding Correlation</h1>
      <div className="chapter-text">
        <p>Correlation measures the strength and direction of the relationship between two variables. It's a fundamental concept in data analysis and predictive modeling.</p>

        <h3>Types of Correlation:</h3>
        <ul>
          <li>Pearson Correlation (Linear)</li>
          <li>Spearman Correlation (Rank-based)</li>
          <li>Kendall's Tau (Ordinal)</li>
        </ul>

        <div className="example-section">
          <h3>Calculating Correlation in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
x = np.random.normal(0, 1, 100)
y = 0.8 * x + np.random.normal(0, 0.5, 100)  # Positive correlation
z = -0.5 * x + np.random.normal(0, 0.8, 100)  # Negative correlation

# Create DataFrame
df = pd.DataFrame({
    'X': x,
    'Y': y,
    'Z': z
})

# Calculate correlations
pearson_corr = df.corr(method='pearson')
spearman_corr = df.corr(method='spearman')

print("Pearson Correlation:")
print(pearson_corr)

# Visualize correlations
plt.figure(figsize=(10, 4))
plt.subplot(121)
sns.scatterplot(data=df, x='X', y='Y')
plt.title('Positive Correlation')

plt.subplot(122)
sns.scatterplot(data=df, x='X', y='Z')
plt.title('Negative Correlation')
plt.tight_layout()
plt.show()`}
          </div>
        </div>

        <div className="note-section">
          <h3>Interpretation:</h3>
          <ul>
            <li>+1: Perfect positive correlation</li>
            <li>0: No correlation</li>
            <li>-1: Perfect negative correlation</li>
            <li>Values between indicate partial correlation</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Feature selection in machine learning</li>
            <li>Portfolio optimization in finance</li>
            <li>Scientific research</li>
            <li>Market analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Correlation; 