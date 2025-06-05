import React from 'react';

const RegressionRSquared = () => {
  return (
    <div className="chapter-content">
      <h1 className="chapter-title">R-Squared in Regression</h1>
      <div className="chapter-text">
        <p>R-squared (R²) is a statistical measure that represents the proportion of variance in the dependent variable that is predictable from the independent variable(s).</p>

        <h3>Key Concepts:</h3>
        <ul>
          <li>R-squared (coefficient of determination)</li>
          <li>Adjusted R-squared</li>
          <li>Total Sum of Squares (TSS)</li>
          <li>Residual Sum of Squares (RSS)</li>
        </ul>

        <div className="example-section">
          <h3>Calculating and Interpreting R-Squared in Python:</h3>
          <div className="code-block">
{`import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
import seaborn as sns

# Generate sample data with different R-squared values
np.random.seed(42)
n_samples = 100

# Strong relationship (high R-squared)
X_strong = np.random.normal(0, 1, n_samples).reshape(-1, 1)
y_strong = 2 * X_strong + np.random.normal(0, 0.2, (n_samples, 1))

# Moderate relationship (medium R-squared)
X_moderate = np.random.normal(0, 1, n_samples).reshape(-1, 1)
y_moderate = 2 * X_moderate + np.random.normal(0, 1, (n_samples, 1))

# Weak relationship (low R-squared)
X_weak = np.random.normal(0, 1, n_samples).reshape(-1, 1)
y_weak = 2 * X_weak + np.random.normal(0, 3, (n_samples, 1))

# Function to fit model and calculate R-squared
def fit_and_plot(X, y, title):
    model = LinearRegression()
    model.fit(X, y)
    r2 = model.score(X, y)
    
    plt.scatter(X, y)
    plt.plot(X, model.predict(X), color='red')
    plt.title(f'{title} (R² = {r2:.3f})')
    return r2

# Create subplots
plt.figure(figsize=(15, 5))

plt.subplot(131)
r2_strong = fit_and_plot(X_strong, y_strong, 'Strong Relationship')

plt.subplot(132)
r2_moderate = fit_and_plot(X_moderate, y_moderate, 'Moderate Relationship')

plt.subplot(133)
r2_weak = fit_and_plot(X_weak, y_weak, 'Weak Relationship')

plt.tight_layout()
plt.show()

# Manual calculation of R-squared
def calculate_r2(y_true, y_pred):
    ss_res = np.sum((y_true - y_pred) ** 2)
    ss_tot = np.sum((y_true - np.mean(y_true)) ** 2)
    r2 = 1 - (ss_res / ss_tot)
    return r2

print("\\nR-squared values:")
print(f"Strong relationship: {r2_strong:.3f}")
print(f"Moderate relationship: {r2_moderate:.3f}")
print(f"Weak relationship: {r2_weak:.3f}")`}
          </div>
        </div>

        <div className="note-section">
          <h3>Interpretation:</h3>
          <ul>
            <li>R² = 1: Perfect fit</li>
            <li>R² = 0: Model explains none of the variability</li>
            <li>R² = 0.7: Model explains 70% of the variability</li>
            <li>Negative R² possible in some cases</li>
          </ul>
        </div>

        <div className="note-section">
          <h3>Limitations:</h3>
          <ul>
            <li>Doesn't indicate prediction accuracy</li>
            <li>Can increase with irrelevant predictors</li>
            <li>Sensitive to outliers</li>
            <li>May not be comparable across different types of models</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegressionRSquared; 