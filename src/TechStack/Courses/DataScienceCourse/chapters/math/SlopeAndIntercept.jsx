import React from 'react';

const SlopeAndIntercept = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Slope and Intercept</h1>
      <div className="chapter-text">
        <p>Understanding slope and intercept is crucial for linear regression and trend analysis in data science.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Slope: Rate of change (rise over run)</li>
          <li>Y-intercept: Point where line crosses y-axis</li>
          <li>Interpretation in context</li>
          <li>Relationship to correlation</li>
        </ul>

        <div className="example-section">
          <h3>Calculating Slope and Intercept:</h3>
          <div className="code-block">
{`import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# Fit linear regression model
model = LinearRegression()
model.fit(X, y)

# Get slope and intercept
slope = model.coef_[0]
intercept = model.intercept_

print(f"Slope: {slope}")
print(f"Intercept: {intercept}")

# Predictions
y_pred = model.predict(X)`}
          </div>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Trend analysis in time series</li>
            <li>Predictive modeling</li>
            <li>Understanding relationships between variables</li>
            <li>Feature importance in linear models</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlopeAndIntercept; 