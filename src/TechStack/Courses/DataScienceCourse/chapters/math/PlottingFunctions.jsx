import React from 'react';

const PlottingFunctions = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Plotting Functions</h1>
      <div className="chapter-text">
        <p>Plotting functions is essential in data science for visualizing relationships, trends, and patterns in data.</p>

        <h3>Common Plot Types:</h3>
        <ul>
          <li>Line plots</li>
          <li>Scatter plots</li>
          <li>Bar plots</li>
          <li>Histograms</li>
          <li>Box plots</li>
        </ul>

        <div className="example-section">
          <h3>Python Examples:</h3>
          <div className="code-block">
{`import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Generate sample data
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Create subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

# Plot sine function
ax1.plot(x, y1, label='sin(x)')
ax1.set_title('Sine Function')
ax1.legend()

# Plot cosine function
ax2.plot(x, y2, label='cos(x)')
ax2.set_title('Cosine Function')
ax2.legend()

plt.tight_layout()
plt.show()`}
          </div>
        </div>

        <div className="note-section">
          <h3>Best Practices:</h3>
          <ul>
            <li>Always label axes and include titles</li>
            <li>Use appropriate scales</li>
            <li>Choose suitable color schemes</li>
            <li>Add legends when needed</li>
            <li>Keep visualizations clear and simple</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlottingFunctions; 