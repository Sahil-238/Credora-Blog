import React from 'react';

const LinearRegression = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">Linear Regression</h1>
      <div className="chapter-text">
        <p>Linear regression is a fundamental statistical and machine learning technique used to model the relationship between a dependent variable and one or more independent variables.</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>Simple vs Multiple Linear Regression</li>
          <li>Least Squares Method</li>
          <li>Model Assumptions</li>
          <li>Model Evaluation Metrics</li>
        </ul>

        <div className="example-section">
          <h3>Implementing Linear Regression in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
X = np.random.rand(100, 1) * 10
y = 2 * X + 1 + np.random.randn(100, 1)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Print results
print(f"Coefficient: {model.coef_[0][0]:.2f}")
print(f"Intercept: {model.intercept_[0]:.2f}")
print(f"R² Score: {model.score(X_test, y_test):.2f}")

# Visualize results
plt.figure(figsize=(10, 6))
plt.scatter(X_test, y_test, color='blue', label='Actual')
plt.plot(X_test, y_pred, color='red', label='Predicted')
plt.xlabel('X')
plt.ylabel('y')
plt.title('Linear Regression')
plt.legend()
plt.show()`}
          </div>
        </div>

        <div className="note-section">
          <h3>Assumptions:</h3>
          <ul>
            <li>Linearity</li>
            <li>Independence</li>
            <li>Homoscedasticity</li>
            <li>Normality of residuals</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Applications:</h3>
          <ul>
            <li>Predictive modeling</li>
            <li>Trend analysis</li>
            <li>Financial forecasting</li>
            <li>Scientific research</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LinearRegression; 