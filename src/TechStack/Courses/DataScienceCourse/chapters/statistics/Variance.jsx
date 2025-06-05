import React from 'react';

const Variance = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Variance in Statistics</h1>
      <div className="chapter-text">
        <p>Variance is a measure of variability that quantifies how far a set of numbers are spread out from their average (mean). It's the square of the standard deviation.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Population vs. Sample Variance</li>
          <li>Sum of Squared Deviations</li>
          <li>Degrees of Freedom</li>
          <li>Relationship to Standard Deviation</li>
        </ul>

        <div className="example-section">
          <h3>Calculating Variance in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Sample data
data = [2, 4, 4, 4, 5, 5, 7, 9]

# Calculate variance using NumPy
population_var = np.var(data)
sample_var = np.var(data, ddof=1)  # ddof=1 for sample variance

print(f"Population Variance: {population_var:.2f}")
print(f"Sample Variance: {sample_var:.2f}")

# Manual calculation
mean = np.mean(data)
squared_diff = [(x - mean) ** 2 for x in data]
manual_var = sum(squared_diff) / (len(data) - 1)

print(f"Manually calculated variance: {manual_var:.2f}")

# Visualize the squared differences
plt.figure(figsize=(10, 6))
plt.bar(range(len(data)), squared_diff)
plt.title('Squared Differences from Mean')
plt.xlabel('Data Point')
plt.ylabel('Squared Difference')
plt.show()`}
          </div>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Risk assessment in finance</li>
            <li>Quality control in manufacturing</li>
            <li>Experimental design</li>
            <li>Machine learning model evaluation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Variance; 