import React from 'react';

const LinearFunctions = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Linear Functions</h1>
      <div className="chapter-text">
        <p>Linear functions are fundamental mathematical concepts in data science, particularly in linear regression and machine learning.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Slope (m)</li>
          <li>Y-intercept (b)</li>
          <li>Linear equation: y = mx + b</li>
          <li>Rate of change</li>
        </ul>

        <div className="example-section">
          <h3>Python Implementation:</h3>
          <div className="code-block">
{`import numpy as np
import matplotlib.pyplot as plt

# Create data points
x = np.linspace(-5, 5, 100)
m = 2  # slope
b = 1  # y-intercept
y = m * x + b  # linear function

# Plotting
plt.plot(x, y)
plt.title('Linear Function: y = 2x + 1')
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.show()`}
          </div>
        </div>

        <div className="note-section">
          <h3>Applications in Data Science:</h3>
          <ul>
            <li>Linear regression modeling</li>
            <li>Trend analysis</li>
            <li>Feature scaling</li>
            <li>Cost function optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinearFunctions; 