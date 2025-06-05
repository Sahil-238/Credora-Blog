import React from 'react';

const CorrelationMatrix = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Correlation Matrix</h1>
      <div className="chapter-text">
        <p>A correlation matrix is a table showing correlation coefficients between multiple variables. It's an essential tool for understanding relationships in multivariate data.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Matrix Symmetry</li>
          <li>Diagonal Values</li>
          <li>Interpretation of Values</li>
          <li>Visualization Techniques</li>
        </ul>

        <div className="example-section">
          <h3>Creating a Correlation Matrix in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Create sample dataset
np.random.seed(42)
data = {
    'Age': np.random.normal(30, 5, 100),
    'Income': np.random.normal(50000, 10000, 100),
    'Experience': np.random.normal(8, 3, 100),
    'Satisfaction': np.random.normal(7, 2, 100)
}

# Create DataFrame
df = pd.DataFrame(data)

# Add some correlations
df['Income'] = df['Age'] * 1000 + np.random.normal(0, 5000, 100)
df['Experience'] = df['Age'] - 22 + np.random.normal(0, 2, 100)

# Calculate correlation matrix
corr_matrix = df.corr()

# Create heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(corr_matrix, 
            annot=True,
            cmap='coolwarm',
            vmin=-1,
            vmax=1,
            center=0)
plt.title('Correlation Matrix Heatmap')
plt.show()

# Print correlation matrix
print("\\nCorrelation Matrix:")
print(corr_matrix)`}
          </div>
        </div>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Use appropriate color scales</li>
            <li>Include correlation values in visualization</li>
            <li>Consider statistical significance</li>
            <li>Watch for multicollinearity</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Feature selection in machine learning</li>
            <li>Dimensionality reduction</li>
            <li>Identifying redundant variables</li>
            <li>Understanding data relationships</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorrelationMatrix; 