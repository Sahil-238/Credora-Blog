import React from 'react';

const StandardDeviation = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Standard Deviation</h1>
      <div className="chapter-text">
        <p>Standard deviation is a measure of variability that indicates how spread out the values in a dataset are from their mean (average).</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Population vs. Sample Standard Deviation</li>
          <li>Relationship to Variance</li>
          <li>Normal Distribution</li>
          <li>Z-scores</li>
        </ul>

        <div className="example-section">
          <h3>Calculating Standard Deviation in Python:</h3>
          <div className="code-block">
{`import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Sample data
data = np.random.normal(100, 15, 1000)

# Calculate standard deviation
std_dev = np.std(data)
mean = np.mean(data)

print(f"Mean: {mean:.2f}")
print(f"Standard Deviation: {std_dev:.2f}")

# Visualize with histogram
plt.figure(figsize=(10, 6))
plt.hist(data, bins=30, density=True, alpha=0.7)
plt.axvline(mean, color='red', linestyle='dashed', linewidth=2)
plt.axvline(mean + std_dev, color='green', linestyle='dashed', linewidth=2)
plt.axvline(mean - std_dev, color='green', linestyle='dashed', linewidth=2)
plt.title('Data Distribution with Standard Deviation')
plt.show()

# Calculate z-scores
z_scores = (data - mean) / std_dev
print(f"Z-scores mean: {z_scores.mean():.2f}")
print(f"Z-scores std: {z_scores.std():.2f}")`}
          </div>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Measuring data dispersion</li>
            <li>Identifying outliers</li>
            <li>Feature scaling in machine learning</li>
            <li>Quality control in manufacturing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StandardDeviation; 